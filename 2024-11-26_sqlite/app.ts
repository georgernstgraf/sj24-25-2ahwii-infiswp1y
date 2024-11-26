const dataPath = "../nmap-datenfiles";
const outputFilePath = "./out.csv";

function parseDate(dateStr: string): Date {
  const p = dateStr.split("_");
  return new Date(`${p[0]}:${p[1]}:${p[2]}+${p[3]}:${p[4]}`);
}

async function main() {
  let outputData = "";
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
        console.error("Error parsing date:", dirEntry.name, err);
        continue;
      }
      const filePath = `${dataPath}/${dirEntry.name}`;
      let host = undefined;
      let mac = undefined;
      for (const Line of (await Deno.readTextFile(filePath)).split("\n")) {
        const cleanedLine = Line.replace(/\r/g, "");
        if (
          cleanedLine.trim() === "" ||
          cleanedLine.startsWith("Starting Nmap") ||
          cleanedLine.startsWith("Nmap done") ||
          cleanedLine.startsWith("Host is up")
        ) {
          continue;
        }
        if (cleanedLine.startsWith("Nmap scan report for ")) {
          host = cleanedLine.split(" ")[4];
          continue;
        }
        if (cleanedLine.startsWith("MAC Address: ")) {
          mac = cleanedLine.split(" ")[2].toLowerCase();
          outputData += `${date.toISOString()};${host};${mac}\n`;
          //console.log(`${date.toISOString()};${host};${mac}`);
        }
      }
    }
    await Deno.writeTextFile(outputFilePath, outputData);

    //console.log(`waiting for Insertion ${promiseArray.length} rows`);
    //await Promise.all(promiseArray);
    //console.log(`Inserted ${promiseArray.length} rows`);
  } catch (err) {
    console.error("Error reading the file:", err);
  }
}
await main();
