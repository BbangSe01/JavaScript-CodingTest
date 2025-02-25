// 양의 정수 n이 매개변수로 주어집니다.
// n × n 배열에 1부터 n2 까지 정수를 인덱스 [0][0]부터 시계방향 나선형으로 배치한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(n) {
  var answer = Array.from({ length: n }, (_, i) => new Array(n));
  let leftP = 0;
  let rightP = n - 1;
  let numCheck = 1;
  if (n === 1) {
    answer[0][0] = 1;
    return answer;
  }
  while (numCheck < n * n) {
    for (let i = leftP; i < rightP; i++) {
      answer[leftP][i] = numCheck;
      numCheck += 1;
    }
    for (let j = leftP; j < rightP; j++) {
      answer[j][rightP] = numCheck;
      numCheck += 1;
    }
    for (let k = rightP; k > leftP; k--) {
      answer[rightP][k] = numCheck;
      numCheck += 1;
    }
    for (let l = rightP; l > leftP; l--) {
      answer[l][leftP] = numCheck;
      numCheck += 1;
    }
    if (numCheck === n * n) {
      answer[(n - 1) / 2][(n - 1) / 2] = n * n;
    }
    leftP += 1;
    rightP -= 1;
  }
  return answer;
}
