// lv1 연습문제_명예의 전당(1)

function solution(k, score) {
  // 전당 배열
  let Mlist = [];
  // 답 배열
  let answer = [];
  // k를 넘어가는 순간 체크
  let checkK = 0;
  score.forEach((num) => {
    // k보다 작으면 그냥 배열에 넣기
    if (checkK < k) {
      Mlist.push(num);
      answer.push(Math.min(...Mlist));
    } else {
      // 그렇지 않고 전당배열의 최소값보다 num값이 크면 전당배열 교체한 후 최소값을 답 배열에 넣어줌
      if (num > Math.min(...Mlist)) {
        let minIdx = Mlist.indexOf(Math.min(...Mlist));
        Mlist.splice(minIdx, 1);
        Mlist.push(num);
        answer.push(Math.min(...Mlist));
        // 그렇지 않고 전당배열의 최소값보다 크지 않으면 전당배열을 교체하지 않고 최소값을 답 배열에 넣어줌
      } else {
        answer.push(Math.min(...Mlist));
      }
    }
    checkK += 1;
  });

  return answer;
}
