// 단어가 공백 한 개로 구분되어 있는 문자열 my_string이 매개변수로 주어질 때,
// my_string에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

// 나의 풀이
function solution(my_string) {
  let question = [...my_string];
  let ans = [];
  let box = [];

  question.forEach((str, idx) => {
    if (str === " ") {
      ans.push(box.join(""));
      box = [];
    } else {
      if (idx === question.length - 1) {
        box.push(str);
        ans.push(box.join(""));
      } else box.push(str);
    }
  });
  return ans;
}

{
  /* 다른 사람들의 풀이 => split 함수 사용이 핵심!
    split 함수는 문자열을 특정 문자를 기준으로 나누어 이를 배열로 반환시킴.
    */
}
// function solution(my_string) {
//     return my_string.split(' ');
// }
