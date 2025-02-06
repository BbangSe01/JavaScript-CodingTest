// 문자열 myString과 pat이 주어집니다.
// myString에서 pat이 등장하는 횟수를 return 하는 solution 함수를 완성해 주세요.

function solution(myString, pat) {
  let ans = myString;
  let count = 0;
  for (let i = 0; i < ans.length - pat.length + 1; i++) {
    ans.slice(i, i + pat.length) === pat ? (count += 1) : null;
  }
  return count;
}
