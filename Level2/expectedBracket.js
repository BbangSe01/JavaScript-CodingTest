// lv2 예상 대진표
function solution(n, a, b) {
  let round = 1;
  while (true) {
    // a가 앞대진이면서 a와b가 만난 경우
    if (a % 2 === 1 && b - a === 1) {
      break;
    }
    // b가 앞대진이면서 a와b가 만난 경우
    else if (b % 2 === 1 && a - b === 1) {
      break;
    }
    a = a % 2 === 0 ? a / 2 : (a + 1) / 2;
    b = b % 2 === 0 ? b / 2 : (b + 1) / 2;
    round += 1;
  }
  return round;
}
