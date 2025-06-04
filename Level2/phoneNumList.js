// lv2 전화번호 목록

function solution(phone_book) {
  var answer = true;
  // 문자열은 사전순으로 정렬
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++) {
    // 사전순으로 정렬하였으므로 인접한 요소들끼리 비교하는 게 접두어 찾기 효율적
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }
  return answer;
}
