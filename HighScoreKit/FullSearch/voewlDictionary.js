// 고득점 kit 완전탐색_모음사전

function solution(word) {
  let checkWord = ["A", "E", "I", "O", "U"];
  // 각각 자리별로 모음이 올라갈 때 가중치
  let wordPoint = [781, 156, 31, 6, 1];
  let wordLen = word.length;
  var answer = wordLen;

  for (let i = 0; i < wordLen; i++) {
    for (let j = 0; j < checkWord.length; j++) {
      let isSame = false;
      if (word[i] === checkWord[j]) {
        // 가중치 * 올라간 정도
        answer += wordPoint[i] * j;
        isSame = true;
      }
      if (isSame) {
        break;
      }
    }
  }
  return answer;
}
