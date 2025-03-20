// lv1 연습문제_카드 뭉치
function solution(cards1, cards2, goal) {
  let c1Count = 0;
  let c2Count = 0;

  for (let i = 0; i < goal.length; i++) {
    if (cards1[c1Count] === goal[i] && c1Count <= cards1.length) {
      c1Count++;
    } else if (cards2[c2Count] === goal[i] && c2Count < cards2.length) {
      c2Count++;
    } else {
      return "No";
    }
  }
  return "Yes";
}
