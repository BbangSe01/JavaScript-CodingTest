// 문자열 myString과 pat가 주어집니다.
// myString의 부분 문자열중 pat로 끝나는 가장 긴 부분 문자열을 찾아서 return 하는 solution 함수를 완성해 주세요.

function solution(myString, pat) {
  let ans = [];
  // lastIndexOf 메서드를 통해 문자열이 2개 이상일 경우 대응 가능
  // 가장 마지막 pat이 위치한 인덱스를 알려줌.
  for (let i = 0; i < myString.lastIndexOf(pat) + pat.length; i++) {
    ans.push(myString[i]);
  }
  return ans.join("");
}
