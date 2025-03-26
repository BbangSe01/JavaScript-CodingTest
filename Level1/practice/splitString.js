// lv1 연습문제_문자열 나누기
function solution(s) {
  let sameCount = 0;
  let diffCount = 0;
  let key;
  let answer = 0;
  [...s].forEach((alpha, idx) => {
    if (sameCount === 0 && diffCount === 0) {
      key = alpha;
    }
    key === alpha ? (sameCount += 1) : (diffCount += 1);
    if (sameCount === diffCount) {
      answer += 1;
      sameCount = 0;
      diffCount = 0;
    }
    if (sameCount !== diffCount && idx === s.length - 1) {
      answer += 1;
    }
  });

  return answer;
}
