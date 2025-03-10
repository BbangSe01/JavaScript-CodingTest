function solution(brown, yellow) {
  let total = brown + yellow;

  for (let i = 1; i <= brown; i++) {
    for (let j = 1; j <= i; j++) {
      // 가로*세로가 전체 개수와 일치하고, x-2 * y-2 = yellow 여야 함.
      if (i * j === total && (i - 2) * (j - 2) === yellow) {
        return [i, j];
      }
    }
  }
}
