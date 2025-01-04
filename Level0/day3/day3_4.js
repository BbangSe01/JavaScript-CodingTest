function solution(a, b) {
  var answer = 0;
  atob = String(a) + String(b);
  btoa = String(b) + String(a);

  if (Number(atob) > Number(btoa)) {
    answer = Number(atob);
  } else {
    answer = Number(btoa);
  }

  return answer;
}

// 다른이의 답안

// function solution(a, b) {
//     return Math.max(Number(`${a}${b}`),Number(`${b}${a}`));
// }

// 백틱을 활용하여 위처럼 코드를 최소화 하는 게 좋은 아이디어 같음.
