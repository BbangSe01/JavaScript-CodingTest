// 알파벳 소문자로 이루어진 문자열 myString이 주어집니다.
// 알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 return 하는 solution 함수를 완성해 주세요.

function solution(myString) {
  var answer = [...myString];
  return answer.map((str) => (str < "l" ? "l" : str)).join("");
}

// 배열로 변경하지 않고 replace함수를 써서 문자열에서 바로 수정하고 return할 수도 있었다.

// function solution(myString) {
//     return myString.replace(/[a-k]/g,'l');
// }
