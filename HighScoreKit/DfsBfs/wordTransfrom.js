// lv3 단어 변환
function solution(begin, target, words) {
  var answer = [];
  let visit = new Array(words.length).fill(false);
  let cur = begin;
  if (!words.includes(target)) {
    return 0;
  }

  // 현재 상태
  const checkWords = (cur, num) => {
    // console.log(cur,num);

    if (cur === target) {
      answer.push(num);
      return;
    }

    // 전체 배열을 다 돌아봄
    words.forEach((word, idx) => {
      let sameCount = 0;
      // 하나 빼고 다 같은지 파악
      for (let i = 0; i < cur.length; i++) {
        if (cur[i] === word[i]) {
          sameCount += 1;
        }
      }

      if (sameCount === word.length - 1 && !visit[idx]) {
        visit[idx] = true;
        checkWords(word, num + 1);
        visit[idx] = false; // 백트래킹!
      }
    });
  };

  checkWords(begin, 0);
  if (answer.length === 0) {
    return 0;
  }
  return Math.min(...answer);
}
