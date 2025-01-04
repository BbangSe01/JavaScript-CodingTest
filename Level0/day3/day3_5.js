// 두 수의 연산값 비교하기

function solution(a, b) {
  var answer = 0;
  // a⊕b 연산
  let atob = String(a) + String(b);
  // 2ab 연산산
  let doubleAB = 2 * Number(a) * Number(b);

  // 두 값중 큰 값을 answer에 할당
  Number(atob) > doubleAB ? (answer = Number(atob)) : (answer = doubleAB);
  return answer;
}
