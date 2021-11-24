let av = 0;
let sum = 0;
let ele = 0;
function average(...nums) {
  for (const num of nums) {
    sum += num;
  }
  ele = nums.length;
  av = sum / ele;
  return av;
}
console.log(average());
console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
