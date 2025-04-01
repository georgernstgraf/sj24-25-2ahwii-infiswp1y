const decoder = new TextDecoder("utf-8"); // Decoder Object
const data = Deno.readFileSync("fragen.json");
const jsonString = decoder.decode(data);
const jsonData = JSON.parse(jsonString);
jsonData.forEach((_) => {
    console.log(_.frage);
});
console.log(`Es gibt ${jsonData.length} Fragen.`);
