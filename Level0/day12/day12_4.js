// 정수 배열 arr가 주어집니다. 배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열을 return 하는 solution 함수를 완성해 주세요.

// 단, arr에 2가 없는 경우 [-1]을 return 합니다.

function solution(arr) {
  var answer = [...arr];
  var checkTwo = [];
  answer.forEach((num, idx) => {
    num === 2 ? checkTwo.push(idx) : null;
  });

  return checkTwo.length > 1
    ? answer.slice(checkTwo[0], checkTwo[checkTwo.length - 1] + 1)
    : checkTwo.length === 1
    ? answer.slice(checkTwo[0], checkTwo[0] + 1)
    : [-1];
}

// indexOf와 lastIndexOf 메서드를 쓰면 접근이 쉬워짐..
