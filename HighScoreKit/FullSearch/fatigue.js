// 고득점kit 완전탐색_피로도

function solution(k, dungeons) {
  // 최대 탐험횟수
  let count = 0;

  const routeDungeon = (P, D, eachCount) => {
    // 현재 횟수와 최대 탐험횟수 비교
    count = Math.max(count, eachCount);
    for (let i = 0; i < D.length; i++) {
      let cutD = D[i];
      // 던전입장 가능하면
      if (P >= cutD[0]) {
        let copyD = [...D];
        copyD.splice(i, 1);
        // 횟수와 피로도 변경한 상태로 다음 던전으로
        routeDungeon(P - cutD[1], copyD, eachCount + 1);
      }
    }
  };
  routeDungeon(k, dungeons, 0);
  return count;
}
