import { assertAlmostEquals } from "@std/assert";
import { bmi } from "./main.ts";

Deno.test(function addTest() {
  const richtigeDaten = [
    [42, 1.68, 14.9],
    [56, 1.63, 21.1],
    [127, 2.2, 26.2],
    [105, 1.65, 38.6],
    [131, 1.83, 39.1],
  ];
  for (const [kg, m, bmiRichtig] of richtigeDaten) {
    assertAlmostEquals(bmi(kg, m), bmiRichtig, 0.1);
  }
});
