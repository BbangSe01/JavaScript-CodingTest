// 문자열 곱하기
function solution(my_string, k) {
  var answer = "";

  answer = my_string.repeat(k);

  // 방법 2
  // for(let i=0;i<k;i++) {
  //     answer+=my_string;
  // }
  return answer;
}
