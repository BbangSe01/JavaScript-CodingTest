// lv2 연습문제 귤 고르기

function solution(k, tangerine) {
  let answer = 0;
  let checkbox = 0;
  let set = [...new Set(tangerine.sort((a, b) => a - b))];
  let setCount = new Array(set.length).fill(0);
  tangerine.forEach((num) => {
    setCount[set.indexOf(num)] += 1;
  });
  setCount.sort((a, b) => b - a);
  for (let eachC of setCount) {
    if (checkbox < k) {
      checkbox += eachC;
      answer += 1;
    } else {
      break;
    }
  }
  return answer;
}
// 기존 내 코드의 문제점은 set을 중복을 걸러내는 용도로만 사용하고 배열로 계산하려고 해서
// indexOf라는 함수를 사용하는데, 이게 O(n)의 시간복잡도를 가짐.
// 그래서 객체(Dictionary)를 사용하여 위 과정을 없앴음.

// 수정한 코드
function solution(k, tangerine) {
  let answer = 0;
  let checkbox = 0;
  let dict = {};
  tangerine.forEach((num) => {
    dict[num] = (dict[num] || 0) + 1;
  });
  let dictCount = Object.values(dict).sort((a, b) => b - a);
  for (let eachC of dictCount) {
    if (checkbox < k) {
      checkbox += eachC;
      answer += 1;
    } else {
      break;
    }
  }
  return answer;
}
