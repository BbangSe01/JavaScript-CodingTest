// 두 정수 a, d와 길이가 n인 boolean 배열 included가 주어집니다.
//  첫째항이 a, 공차가 d인 등차수열에서 included[i]가 i + 1항을 의미할 때,
//   이 등차수열의 1항부터 n항까지 included가 true인 항들만 더한 값을
//    return 하는 solution 함수를 작성해 주세요.

function solution(a, d, included) {
  var answer = 0;
  // 항이 늘어날 때마다 등차수열 값 갱신할 변수수
  let sequenceCheck = a;

  for (let i = 0; i < included.length; i++) {
    if (included[i] === true) {
      answer += sequenceCheck;
    }
    // 항 증가에 따른 등차수열 값 증가
    sequenceCheck += d;
  }
  return answer;
}
