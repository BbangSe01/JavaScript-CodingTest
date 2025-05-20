function solution(n) {
  let ans = 0;

  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      ans += 1;
      n = Math.floor(n / 2);
    }
  }
  ans += 1;
  return ans;
}
