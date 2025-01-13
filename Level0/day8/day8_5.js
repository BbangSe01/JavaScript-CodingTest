// 문자열 my_string과 이차원 정수 배열 queries가 매개변수로 주어집니다.
// queries의 원소는 [s, e] 형태로, my_string의 인덱스 s부터 인덱스 e까지를 뒤집으라는 의미입니다.
//  my_string에 queries의 명령을 순서대로 처리한 후의 문자열을
//  return 하는 solution 함수를 작성해 주세요.

function solution(my_string, queries) {
  let answer = [...my_string];
  // 복사본 배열을 하나 더 만들어서, 인덱스 e-> s 각각의 요소를 원본에 역순으로 추가해 줌.
  let copyAns = [...answer];

  queries.forEach(([s, e]) => {
    // 원본 순서는 s 인덱스부터
    let j = s;
    // 복사본의 순서는 e 인덱스부터
    for (let i = e; i >= s; i--) {
      answer[j] = copyAns[i];
      // 원본의 다음 인덱스에 접근하기 위해 ++
      j++;
    }
    // 반복문이 종료되면 복사본 배열에 변경된 원본을 갱신해줌.
    copyAns = [...answer];
  });

  return answer.join("");
}
