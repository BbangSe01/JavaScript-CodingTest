// readline 모듈은 Node.js에서 표준 입력과 출력을 처리하기 위한 모듈임.
const readline = require("readline");
// createInterface로 입출력 인터페이스 생성성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 입력할 데이터를 저장할 배열
let input = [];

// 입력한 한 줄의 데이터가 line이라는 매개변수로 전달. (Enter로 구분됨.)
rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  console.log(str);
});
