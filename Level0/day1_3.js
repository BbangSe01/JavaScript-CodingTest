const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  str = input[0];
  n = Number(input[1]);
  // repeat(count) => 문자열을 주어진 횟수만큼 반복해 붙인 문자열 출력
  console.log(str.repeat(n));
});
