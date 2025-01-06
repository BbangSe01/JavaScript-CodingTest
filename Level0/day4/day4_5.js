// 두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.

function solution(a, b, flag) {
  var answer = 0;
  // flag 변수 자체가 true/false 이므로 굳이 flag===true 를 적지 않아도 아래처럼 간략하게 작성 가능
  flag ? (answer = a + b) : (answer = a - b);
  return answer;
}
