// 문자 리스트를 문자열로 변환하기

function solution(arr) {
  var answer = "";

  for (let i = 0; i < arr.length; i++) {
    //join 메소드는 배열의 모든 요소를 연결
    answer = arr.join("");
  }
  return answer;
}
