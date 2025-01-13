// 문자열 my_string과 정수 배열 index_list가 매개변수로 주어집니다.
// my_string의 index_list의 원소들에 해당하는 인덱스의 글자들을
// 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, index_list) {
  // map 함수로 index_list의 인덱스를 my_string에 넣은 값의 배열들을 새로 반환.
  // join을 통해 요소들을 붙여서 문자열로 반환
  return index_list.map((i) => my_string[i]).join("");
}
