// lv2 롤케이크 자르기

function solution(topping) {
  // 1. 전체 topping의 각 개수 파악
  // 2. topping 순회하면서 좌측 우측 set으로 +-
  // 3. 만약 전체 topping 요소 중 개수가 0이되면 set에서 삭제
  let total = {};
  let left = new Set();
  let right = new Set();
  let answer = 0;

  topping.forEach((top) => {
    if (total[top]) total[top] += 1;
    else {
      total[top] = 1;
      right.add(top);
    }
  });

  topping.forEach((top) => {
    if (!left[top]) left.add(top);
    total[top] -= 1;

    if (total[top] === 0) right.delete(top);

    // 양측 set의 size가 같으면 공평하게 나눈 것이므로 +1
    if (left.size === right.size) answer += 1;
  });
  return answer;
}
