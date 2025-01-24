export function pythagoras() {
    const a = 16;
    const aa = a * a;
    const upper = 1e8;
    // check wheter math works
    //for (let i = 1; i <= upper; i++) {
    //    const square = i * i;
    //    assertEquals(Math.sqrt(square), i);
    //}
    // it does
    const rv = [];
    for (let x = 1; x <= upper; x++) {
        const square = x * x;
        const yreal = Math.sqrt(aa + square);
        const y = Math.round(yreal);
        const yy = y * y;
        if (yy === aa + square) {
            console.log(`a: ${a}, x: ${x}, y: ${y}`);
            rv.push(x);
        }
    }
    return rv;
}

if (import.meta.main) {
    pythagoras();
}
