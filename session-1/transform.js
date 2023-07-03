function square(n) {
  return n * n;
}

function transform(nums) {
  squaredArray = nums.map((n) => square(n));
  return squaredArray.sort(function (a, b) {
    return a - b;
  });
}

const nums = [4, 9, 5, 3, 8];
const sortedSquaredNums = transform(nums);
console.log(sortedSquaredNums); // [9,16,25,64,81]
