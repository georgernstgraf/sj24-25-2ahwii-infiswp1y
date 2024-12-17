export function bmi(kg: number, m: number): number {
  return kg / (m * m);
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", bmi(2, 3));
}
