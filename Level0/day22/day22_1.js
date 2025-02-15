// 정수로 이루어진 문자열 n_str이 주어질 때, n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(n_str) {
  var answer = [...n_str];
  let tfCheck = false;
  let checkInx = 0;
  if (answer[0] === "0") {
    ftCheck = true;
    while (true) {
      if (answer[checkInx] === "0") {
        checkInx += 1;
      } else {
        break;
      }
    }
    return answer.slice(checkInx, answer.length).join("");
  }
  return answer.join("");
}

// 다른 사람의 풀이를 보니 그냥 정수형으로 바꿔주면 끝이었음...0부분은 알아서 지워질테니...현타왔따..
