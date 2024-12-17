for (let x = 1; x <= 100; x++) {
  const durchDrei = x % 3 === 0;
  const durchFuenf = x % 5 === 0;
  const durchFuenfzehn = durchDrei && durchFuenf;
  if (durchFuenfzehn) {
    console.log("Fizzbuzz");
    continue; // Weiter mit nächstem Schleifendurchgang
  }
  if (durchDrei) {
    console.log("Fizz");
    continue; // Weiter mit nächstem Schleifendurchgang
  }
  if (durchFuenf) {
    console.log("Buzz");
    continue; // Weiter mit nächstem Schleifendurchgang
  }
  console.log(x);
}
