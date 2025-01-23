// 문자열 my_string과 두 정수 m, c가 주어집니다.
// my_string을 한 줄에 m 글자씩 가로로 적었을 때
// 왼쪽부터 세로로 c번째 열에 적힌 글자들을 문자열로 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, m, c) {
  let strArray = [];
  let standardCount = c - 1;

  while (true) {
    strArray.push(my_string[standardCount]);
    standardCount += m;
    if (standardCount > my_string.length) {
      break;
    }
  }

  return strArray.join("");
}
