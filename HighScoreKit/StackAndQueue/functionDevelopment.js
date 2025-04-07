function solution(progresses, speeds) {
  let answer = [];
  // 소요일수를 담을 배열
  let costDays = [];
  //소요일수를 배열에 담는 과정정
  progresses.forEach((num, idx) => {
    let eachCost = 0;
    if ((100 - num) % speeds[idx] === 0) {
      eachCost = (100 - num) / speeds[idx];
    } else eachCost = (100 - num) / speeds[idx] + 1;
    costDays.push(Math.floor(eachCost));
  });

  // 한번에 반영할 작업들을 담을 큐
  let deleteQ = [];
  // 기준이 될 첫번째 작업
  let checkPoint;

  costDays.forEach((num, idx) => {
    //큐에 아무것도 없을 경우 기준을 잡는다.
    if (deleteQ.length === 0) {
      deleteQ.push(num);
      checkPoint = num;
    } else {
      // 기준(첫번째 작업)이 그 뒤 작업보다 더 늦게 마무리 될 경우
      if (checkPoint >= num) {
        deleteQ.push(num);
        // 그렇지 않을 경우 큐에 쌓아둔 작업들을 없애고 큐의 길이를 답이 될 배열에 넣는다.
      } else {
        answer.push(deleteQ.length);
        deleteQ = [];
        deleteQ.push(num);
        checkPoint = num;
      }
    }
    // 순회가 끝났을 때 큐가 비어있지 않으면 그 길이를 답이 될 배열에 넣는다.
    if (idx === progresses.length - 1) answer.push(deleteQ.length);
  });
  return answer;
}
