// lv2 n*2배열 자르기

function solution(n, left, right) {
  let results = [];

  for (let i = left; i <= right; i++) {
    let share = Math.floor(i / n);
    let remain = i % n;
    let value = Math.max(share, remain) + 1;
    results.push(value);
  }
  return results;
}
