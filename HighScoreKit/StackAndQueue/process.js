// 고득점 kit 스택/큐_프로세스
function solution(priorities, location) {
  let queue = [...priorities];
  // 목표 인덱스 추적을 위한 변수
  let locIdx = location;
  // 큐 내부에서 가장 큰 수를 담을 변수
  let aim = Math.max(...queue);
  // 프로세스 실행 횟수를 담을 변수
  let count = 0;
  while (true) {
    let getQ = queue[0];
    queue.splice(0, 1);

    if (getQ < aim) {
      queue.push(getQ);
      if (locIdx === 0) locIdx = queue.length - 1;
      else locIdx -= 1;
    } else {
      count += 1;
      aim = Math.max(...queue);
      if (locIdx === 0) break;
      else locIdx -= 1;
    }
  }
  return count;
}
