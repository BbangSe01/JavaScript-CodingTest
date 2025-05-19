// lv2 피보나치 수
function solution(n) {
  let Farr = [0, 1];
  for (let i = 2; i <= n; i++) {
    // 수가 너무 커져 자료형의 범위를 넘어가 오버플로우가 일어날 것을 방지
    let nextF = (Farr[i - 1] + Farr[i - 2]) % 1234567;
    Farr.push(nextF);
  }
  return Farr[n];
}
