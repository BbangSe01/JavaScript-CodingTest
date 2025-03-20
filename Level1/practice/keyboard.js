// 연습문제 lv1 대충 만든 자판

function solution(keymap, targets) {
  var answer = [];

  targets.forEach((sentence) => {
    // 해당 타겟의 길이
    let senLength = sentence.length;
    let isUnable = false;
    // 타겟별 횟수
    let eachCount = 0;
    for (let i = 0; i < senLength; i++) {
      // targets의 알파벳을 가지고 있는 keymap 추출
      let haveMap = keymap.filter((eachKey) => eachKey.includes(sentence[i]));
      // keymap이 없다면
      if (haveMap.length === 0) {
        isUnable = true;
      }
      // keymap이 하나라면
      else if (haveMap.length === 1) {
        eachCount += haveMap[0].indexOf(sentence[i]) + 1;
      }
      // keymap이 여러개라면, 각 key별로 발생하는 클릭의 최소값 추출
      else {
        let countBox = haveMap.map((eachKey) => {
          return eachKey.indexOf(sentence[i]);
        });
        eachCount += Math.min(...countBox) + 1;
      }
    }
    isUnable ? answer.push(-1) : answer.push(eachCount);
  });
  return answer;
}
