// 알파벳 대소문자로만 이루어진 문자열 my_string이 주어질 때,
// my_string에서 'A'의 개수, my_string에서 'B'의 개수,..., my_string에서 'Z'의 개수, my_string에서 'a'의 개수, my_string에서 'b'의 개수,..., my_string에서 'z'의 개수를
// 순서대로 담은 길이 52의 정수 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string) {
  let Alphabets = [];
  for (let i = 65; i <= 90; i++) {
    Alphabets.push(String.fromCharCode(i));
  }
  for (let i = 97; i <= 122; i++) {
    Alphabets.push(String.fromCharCode(i));
  }
  let answer = new Array(Alphabets.length).fill(0);
  for (let i = 0; i < my_string.length; i++) {
    if (Alphabets.includes(my_string[i])) {
      answer[Alphabets.indexOf(my_string[i])] += 1;
    }
  }
  return answer;
}
