// 2025 프로그래머스 코드챌린지 2차 예선_택배 상자 꺼내기

function solution(n, w, num) {
  var answer = 1;
  let totalFloor = Math.floor((n - 1) / w + 1);
  let curFloor = 0;
  let nextNum = num;

  num % w === 0 ? (curFloor = num / w) : (curFloor = Math.floor(num / w) + 1);

  while (curFloor < totalFloor) {
    if (curFloor % 2 === 0) {
      nextNum =
        nextNum + (curFloor * w - nextNum) + (curFloor * w - nextNum + 1);
      if (n >= nextNum) {
        answer += 1;
      }
    } else {
      nextNum =
        nextNum + (curFloor * w - nextNum) + (curFloor * w - nextNum + 1);
      if (n >= nextNum) {
        answer += 1;
      }
    }
    curFloor += 1;
  }
  return answer;
}
