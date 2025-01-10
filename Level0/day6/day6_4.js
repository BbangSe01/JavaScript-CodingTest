// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [i, j] 꼴입니다.

// 각 query마다 순서대로 arr[i]의 값과 arr[j]의 값을 서로 바꿉니다.

// 위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.

function solution(arr, queries) {
  var answer = [...arr];

  // ([a, b])는 구조 분해 할당(destructuring assignment)을 사용하여 queries의 각 요소(배열 [a, b])에서 a와 b 값을 추출
  queries.forEach(([a, b]) => {
    [answer[a], answer[b]] = [answer[b], answer[a]];
  });
  return answer;
}
