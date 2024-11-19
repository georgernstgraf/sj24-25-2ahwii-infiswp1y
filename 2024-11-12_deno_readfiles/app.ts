import { Database } from "@db/sqlite";
import { assert } from "@std/assert";
const dataPath = '../nmap-datenfiles';
const db = new Database("nmap_data.db");

async function createTable() {
    // db.prepare(`CREATE TABLE IF NOT EXISTS scans
    // (id INTEGER PRIMARY KEY AUTOINCREMENT, date DATETIME, host TEXT, mac TEXT); `)
    // .run();
}
function parseDate(dateStr: string): Date {
    const p = dateStr.split('_');
    return new Date(`${p[0]}:${p[1]}:${p[2]}+${p[3]}:${p[4]}`);
}

async function main() {
    await createTable();
    try {
        const dirEntries = await Deno.readDir(dataPath);
        //const promiseArray = [];
        for await (const dirEntry of dirEntries) {
            if (!dirEntry.isFile) {
                continue;
            }
            let date;
            try {
                date = parseDate(dirEntry.name);
            } catch (err) {
                assert(err instanceof Error);
                console.error('Error parsing date:', dirEntry.name, err.message);
                continue;
            }
            const filePath = `${dataPath}/${dirEntry.name}`;
            let host = undefined;
            let mac = undefined;
            for (const line of (await Deno.readTextFile(filePath)).split('\n')) {
                if (line.trim() === '' || line.startsWith('Starting Nmap')
                    || line.startsWith('Nmap done') || line.startsWith('Host is up')) {
                    continue;
                }
                if (line.startsWith('Nmap scan report for ')) {
                    host = line.split(' ')[4];
                    continue;
                }
                if (line.startsWith('MAC Address: ')) {
                    mac = line.split(' ')[2].toLowerCase();
                    //console.log(`${ date.toISOString() };${ host; };${ mac; } `);
                    /* promiseArray.push(db.query("INSERT INTO scans (date, host, mac) VALUES (?, ?, ?)", [
                         date.toISOString(),
                         host,
                         mac,
                     ]));
                     promiseArray.length === 7 && console.log(promiseArray);*/
                    console.log(`${date.toISOString()};${host};${mac}`);
                }
            }
        }
        //console.log(`waiting for Insertion ${ promiseArray.length } rows`);
        //await Promise.all(promiseArray);
        //console.log(`Inserted ${ promiseArray.length; } rows`);
    } catch (err) {
        console.error('Error reading the file:', err);
    }
}
await main();