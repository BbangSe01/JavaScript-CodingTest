// 두 정수 q, r과 문자열 code가 주어질 때,
// code의 각 인덱스를 q로 나누었을 때 나머지가 r인 위치의 문자를
// 앞에서부터 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(q, r, code) {
  // q로 나누었을 때 나머지가 r인 인덱스일 경우만 return해주는 조건의 filter 함수 사용
  return [...code]
    .filter((char, idx) => {
      return idx % q === r;
    })
    .join("");
}
