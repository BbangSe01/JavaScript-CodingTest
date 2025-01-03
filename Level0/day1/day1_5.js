const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("close", function () {
  // 백슬레시가 ' " 등을 만나면 누락되기 때문에 하나를 더 추가해주어 \' 형태로 출력될 수 있게 만들어준다.
  let answer = `!@#$%^&*(\\'"<>?:;`;
  console.log(answer);
});
