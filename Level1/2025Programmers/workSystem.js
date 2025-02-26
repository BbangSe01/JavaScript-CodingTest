function solution(schedules, timelogs, startday) {
  var answer = 0;

  schedules.forEach((time, idx) => {
    let checkDay = startday;
    let isLate = false;
    let limitTime = time + 10;
    if (limitTime % 100 >= 60) {
      limitTime =
        (Math.floor(limitTime / 100) + 1) * 100 + ((limitTime % 100) - 60);
    }

    for (let i = 0; i < 7; i++) {
      if (checkDay !== 6 && checkDay !== 7) {
        if (limitTime < timelogs[idx][i]) isLate = true;
      }
      checkDay = (checkDay % 7) + 1; // 1~7을 계속 순환
    }
    !isLate ? (answer += 1) : null;
  });

  return answer;
}
