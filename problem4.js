function binarySearch(array, x) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (array[middle] == x) {
      return middle;
    } else if (array[middle] < x) {
      start = middle + 1;
      return start;
    } else {
      end = middle - 1;
      return end;
    }
  }
  return -1;
}

console.log(binarySearch([1, 1, 3, 5, 5, 6, 7], 3)); // 2
console.log(binarySearch([1, 2, 3, 5, 6, 8, 10], 5)); // 3
console.log(binarySearch([12, 15, 15, 19, 24, 31, 53, 59, 60], 53)); // 6
console.log(binarySearch([12, 15, 15, 19, 24, 31, 53, 59, 60], 100)); // -1
