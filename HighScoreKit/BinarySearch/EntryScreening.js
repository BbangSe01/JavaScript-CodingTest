// 고득점kit 이분탐색_입국심사

function solution(n, times) {
  let answer;
  let leftT = 1;
  let rightT = Math.max(...times) * n;
  while (leftT <= rightT) {
    let mid = Math.floor((leftT + rightT) / 2);
    let person = 0;

    times.forEach((t) => {
      person += Math.floor(mid / t);
    });
    if (person >= n) {
      rightT = mid - 1;
      answer = mid;
    } else if (person < n) leftT = mid + 1;
  }
  return answer;
}
