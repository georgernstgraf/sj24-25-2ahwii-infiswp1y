import { readFileStr } from "https://deno.land/std@0.42.0/fs/mod.ts";
//const fileContent = await Deno.readTextFile("persons.csv");
const fileContent = await readFileStr("persons.csv", { encoding: "utf-8" });

const lines = fileContent.split("\n"); // lines : String[]

for (const line of lines) {
  const [vorname, nachname, geschlecht, gewicht, groesse] = line.split("|");
  let genderDE;
  let sieEr;
  if (geschlecht === "female") {
    genderDE = "weiblich";
    sieEr = "Sie";
  } else {
    genderDE = "männlich";
    sieEr = "Er";
  }
  console
    .log(
      `${vorname} ${nachname} ist ${genderDE}. ${sieEr} ist ${gewicht}kg schwer und ${groesse}cm groß.`,
    );
}
