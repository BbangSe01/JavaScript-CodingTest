// 2019 카카오 개발자 겨울 인턴십_크레인 인형뽑기 게임

function solution(board, moves) {
  var answer = 0;
  let stack = [];
  for (let num of moves) {
    for (let arr of board) {
      if (arr[num - 1] !== 0) {
        stack.push(arr[num - 1]);
        arr[num - 1] = 0;
        break;
      }
    }
    if (
      stack.length > 0 &&
      stack[stack.length - 1] === stack[stack.length - 2]
    ) {
      stack.splice(stack.length - 2, 2);

      answer += 2;
    }
  }
  return answer;
}
