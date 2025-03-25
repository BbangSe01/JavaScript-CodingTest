// 가장 가까운 같은 글자
function solution(s) {
  let dict = {};
  var answer = [];
  [...s].forEach((alpha, idx) => {
    if (dict[alpha] === undefined) {
      dict[alpha] = idx;
      answer.push(-1);
    } else {
      answer.push(idx - dict[alpha]);
      dict[alpha] = idx;
    }
  });
  return answer;
}
