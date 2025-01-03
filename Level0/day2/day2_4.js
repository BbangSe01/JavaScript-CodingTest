// 홀짝 구분하기

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  n = Number(input[0]);
  // 2로 나눈 나머지 값이 0인지 아닌지로 홀/짝 체크
  if (n % 2 === 0) {
    console.log(n, "is even");
  } else {
    console.log(n, "is odd");
  }
});
