// 연습문제 lv1 햄버거 만들기

function solution(ingredient) {
  let stack = [];
  let count = 0;
  for (let num of ingredient) {
    stack.push(num);
    if (stack.length >= 4) {
      if (stack.slice(-4).join("") === "1231") {
        stack.splice(-4);
        count += 1;
      }
    }
  }
  return count;
}
