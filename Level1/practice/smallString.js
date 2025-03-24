// lv1 연습문제_크기가 작은 부분 문자열

function solution(t, p) {
  var answer = 0;
  let pLen = p.length;
  for (let i = 0; i < t.length - pLen + 1; i++) {
    let checkNum = Number(t.slice(i, i + pLen));
    if (checkNum <= Number(p)) {
      answer += 1;
    }
  }
  return answer;
}
