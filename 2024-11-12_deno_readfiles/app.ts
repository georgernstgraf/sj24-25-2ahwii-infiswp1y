
import { assert } from "https://deno.land/std@0.114.0/testing/asserts.ts";

const dataPath = '../nmap-datenfiles';
function parseDate(dateStr: string): Date {
        const p = dateStr.split('_');
        return new Date(`${p[0]}:${p[1]}:${p[2]}+${p[3]}:${p[4]}`);

}
try {
    const dirEntries = await Deno.readDir(dataPath);
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
        // console.log(dirEntry.name, date);
        const filePath = `${dataPath}/${dirEntry.name}`;
        const data = await Deno.readTextFile(filePath);
        const lines = data.split('\n');
        for (const line of lines) {
            //console.log(line);
        }
    }
} catch (err) {
    console.error('Error reading the file:', err);
}