// 대소문자 바꿔서 출력하기

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let transinput = "";
rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  // 문장 알파벳 하나하나를 체크해야 하므로 문자열로 할당
  str = input[0];

  for (let i = 0; i < str.length; i++) {
    //자바스크립트에서 문자열은 배열처럼 인덱스로 접근 가능
    if (str[i] == str[i].toUpperCase()) {
      transinput += str[i].toLowerCase();
    } else if (str[i] == str[i].toLowerCase()) {
      transinput += str[i].toUpperCase();
    }
  }
  console.log(transinput);
});
