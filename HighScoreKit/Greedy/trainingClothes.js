// 고득점 kit 탐욕법_체육복

function solution(n, lost, reserve) {
  // 여벌이 있지만 도둑맞아 진짜 제공해줄 수 없는 사람
  let canGive = reserve.filter((per) => !lost.includes(per));
  // 여벌도 없는 진짜 체육복이 없는 학생.
  // 이 때 오름차순 정렬을 해서 양옆 모두가 나에게 체육복을 전해줄 수 있다면 앞사람거를 가져가도록 설정
  let realLost = lost
    .filter((per) => !reserve.includes(per))
    .sort((a, b) => a - b);
  // 가져오지 않은 사람 수.
  let noHave = realLost.length;
  realLost.forEach((per) => {
    let isCan = false;
    if (canGive.includes(per - 1) && !isCan) {
      isCan = true;
      noHave -= 1;
      canGive.splice(canGive.indexOf(per - 1), 1);
    } else if (canGive.includes(per + 1) && !isCan) {
      noHave -= 1;
      canGive.splice(canGive.indexOf(per + 1), 1);
    }
  });

  return n - noHave;
}
