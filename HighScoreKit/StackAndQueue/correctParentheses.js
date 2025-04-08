// 고득점 kit 스택/큐_올바른 괄호

function solution(s) {
  let copyS = [...s];
  let queue = [];

  for (let i of copyS) {
    queue.push(i);
    if (queue[0] === ")") return false;
    if (queue[queue.length - 2] + queue[queue.length - 1] === "()") {
      queue.splice(queue.length - 2, 2);
    }
  }
  return queue.length === 0 ? true : false;
}
