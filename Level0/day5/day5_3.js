// 주사위 게임2

function solution(a, b, c) {
  var answer = 0;

  // 세 숫자가 모두 다를 경우
  if (a !== b && b !== c && c !== a) {
    answer = a + b + c;
  }
  // 세 숫자 중 어느 두 숫자는 같고 나머지 두 숫자는 다른 경우
  else if (
    (a === b && b !== c) ||
    (b === c && c !== a) ||
    (c === a && a !== b)
  ) {
    answer = (a + b + c) * (a * a + b * b + c * c);
  }
  // 세 숫자가 모두 같은 경우
  else if (a === b && b === c && c === a) {
    answer =
      (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);
  }
  return answer;
}
