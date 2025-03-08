// 완전탐색_모의고사
function solution(answers) {
  let a1 = [1, 2, 3, 4, 5];
  let a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let check = [0, 0, 0];

  answers.forEach((ans, idx) => {
    if (ans === a1[idx % a1.length]) check[0] += 1;
    if (ans === a2[idx % a2.length]) check[1] += 1;
    if (ans === a3[idx % a3.length]) check[2] += 1;
  });
  let maxPoint = Math.max(...check);
  return check
    .map((point, idx) => (point === maxPoint ? idx + 1 : null))
    .filter((mp) => mp !== null);
}
