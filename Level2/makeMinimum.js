// lv2 최솟값 만들기

function solution(A, B) {
  let ans = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  A.forEach((a, idx) => {
    ans += a * B[idx];
  });
  return ans;
}
