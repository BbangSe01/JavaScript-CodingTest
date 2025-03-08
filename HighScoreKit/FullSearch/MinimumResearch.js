// 완전탐색_최소직사각형

function solution(sizes) {
  let width = [];
  let height = [];
  sizes.forEach((arr) => {
    if (arr[0] >= arr[1]) {
      width.push(arr[0]);
      height.push(arr[1]);
    } else {
      width.push(arr[1]);
      height.push(arr[0]);
    }
  });
  return Math.max(...width) * Math.max(...height);
}
