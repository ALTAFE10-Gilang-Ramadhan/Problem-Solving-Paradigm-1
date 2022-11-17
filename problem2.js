function moneyChange(money) {
  const coins = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000];
  let sortedArr = coins.sort((a, b) => {
    return b - a;
  });
  let result = [];

  for (const coin of sortedArr) {
    while (money >= coin) {
      result.push(coin);
      money = money - coin;
    }
  }
  return `${result}`;
}

console.log(moneyChange(123)); // [100 20 1 1 1]
console.log(moneyChange(432)); // [200 200 20 10 1 1]
console.log(moneyChange(543)); // [500, 20, 20, 1, 1, 1]
console.log(moneyChange(7752)); // [5000, 2000, 500, 200, 50, 1, 1]
console.log(moneyChange(15321)); // [10000 5000 200 100 20 1]
