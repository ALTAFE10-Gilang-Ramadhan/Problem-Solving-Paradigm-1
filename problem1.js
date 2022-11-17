function simpleEquations(a, b, c) {
  for (let i = 0; i <= a; i++) {
    for (let j = 0; j <= b; j++) {
      for (let k = 0; k <= c; k++) {
        if (i + j + k === a && i * j * k === b && i * i + j * j + k * k === c) {
          hasil = [i, j, k];
          // console.log(i, j, k);
          return hasil.join(' ');
        }
      }
    }
  }
  let no = 'no solution';
  return no;
}

console.log(simpleEquations(1, 2, 3)); // no solution
console.log(simpleEquations(6, 6, 14)); // 1 2 3

module.exports = simpleEquations;
