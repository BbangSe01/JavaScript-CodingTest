// 문자열 my_string과 정수 s, e가 매개변수로 주어질 때,
// my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을
// return 하는 solution 함수를 작성해 주세요.

function solution(my_string, s, e) {
  let changePart = [];
  let answer = [...my_string];
  for (let i = e; i >= s; i--) {
    changePart.push(my_string[i]);
  }
  for (let i = s; i <= e; i++) {
    answer[i] = changePart[i - s];
  }

  return answer.join("");
}

// 다른 사람의 풀이

// function solution(my_string, s, e) {
//     var answer = '';
//     var str = my_string.substring(s,e+1);
//     var newStr = str.split('').reverse().join('');

//     answer = my_string.replace(str,newStr);
//     return answer;
// }
