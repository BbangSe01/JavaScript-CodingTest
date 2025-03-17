// 고득점 kit 정렬_가장 큰 수
function solution(numbers) {
  let ans = numbers
    .map((num) => String(num))
    .sort((a, b) => b + a - (a + b))
    .join("");
  return ans[0] === "0" ? "0" : ans;
}
