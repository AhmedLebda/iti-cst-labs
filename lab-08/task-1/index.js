let arr = [1, 5, 2, 7, 3, 6, 0, 10, 100, 510, 30, 53];
let asc = [...arr].sort((a, b) => a - b);
let dec = [...arr].sort((a, b) => b - a);
let largerThanFifty = arr.filter((num) => num > 50);
let max = Math.max(...arr);
let min = Math.min(...arr);

console.log("Original Array:", arr);

console.log("Ascending Order:", asc);

console.log("Descending Order:", dec);

console.log("Numbers greater than 50:", largerThanFifty);

console.log("Maximum number:", max);

console.log("Minimum number:", min);
