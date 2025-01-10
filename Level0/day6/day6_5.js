// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.

// 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 k보다 크면서 가장 작은 arr[i]를 찾습니다.

// 각 쿼리의 순서에 맞게 답을 저장한 배열을 반환하는 solution 함수를 완성해 주세요.
// 단, 특정 쿼리의 답이 존재하지 않으면 -1을 저장합니다.

function solution(arr, queries) {
  var answer = [];

  queries.forEach(([s, e, k]) => {
    let checkArr = -1;
    // 가장 처음의 arr[i]를 구분하기 위함.
    let isFind = false;

    for (let i = s; i <= e; i++) {
      if (arr[i] > k) {
        if (isFind) {
          arr[i] < checkArr ? (checkArr = arr[i]) : "";
        } else {
          checkArr = arr[i];
          isFind = true;
        }
      }
    }
    answer.push(checkArr);
  });
  return answer;
}

// 다른 사람의 풀이

// function solution(arr, queries) {
//     return queries.map(([s, e, k]) => {
//         const result = arr.slice(s, e + 1).filter(num => num > k);
//         return result.length > 0 ? Math.min(...result) : -1;
//     });
// }

// map , slice , filter 등 다양한 JS 메서드를 활용할 줄 알아야 복잡한 로직도 단순하게 만들 수 있음을 크게 느꼈다.
