// 2차원 정수 배열 board와 정수 k가 주어집니다.

// i + j <= k를 만족하는 모든 (i, j)에 대한 board[i][j]의 합을 return 하는 solution 함수를 완성해 주세요.

function solution(board, k) {
  var answer = 0;
  board.forEach((arr, idx) => {
    for (let i = 0; i < arr.length; i++) {
      idx + i <= k ? (answer += board[idx][i]) : null;
    }
  });
  return answer;
}
