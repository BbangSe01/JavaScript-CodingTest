// 이차원 정수 배열 arr이 매개변수로 주어집니다. arr의 행의 수가 더 많다면 열의 수가 행의 수와 같아지도록 각 행의 끝에 0을 추가하고,
// 열의 수가 더 많다면 행의 수가 열의 수와 같아지도록 각 열의 끝에 0을 추가한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(arr) {
  let hLen = arr[0].length;
  let yLen = arr.length;
  var answer = [...arr];
  if (hLen > yLen) {
    let arrBox = new Array(hLen).fill(0);
    for (let i = yLen; i < hLen; i++) {
      answer.push(arrBox);
    }
  } else if (hLen < yLen) {
    answer.forEach((arr) => {
      for (let i = hLen; i < yLen; i++) {
        arr.push(0);
      }
    });
  }
  return answer;
}
