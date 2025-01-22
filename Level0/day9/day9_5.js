// 문자열 my_string과 is_suffix가 주어질 때,
//  is_suffix가 my_string의 접미사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, is_suffix) {
  // is_suffix가 접미사라면 endswith가 반드시 true일 것.
  // endswith는 my_string이 is_suffix로 끝나는지 판단해주는 함수
  return my_string.endsWith(is_suffix) ? 1 : 0;
}
