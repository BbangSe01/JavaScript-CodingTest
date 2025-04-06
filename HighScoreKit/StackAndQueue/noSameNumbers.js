// 고득점kit 스택/큐_같은 숫자는 싫어

function solution(arr) {
  var answer = [];
  arr.forEach((num, idx) => {
    if (answer[answer.length - 1] === num) {
      answer.pop();
    }
    answer.push(num);
  });
  return answer;
}
