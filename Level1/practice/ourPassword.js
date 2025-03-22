function solution(s, skip, index) {
  let answer = [...s];
  for (let i = 0; i < answer.length; i++) {
    let count = 0;
    while (count < index) {
      let nextAlpha = String.fromCharCode(answer[i].charCodeAt(0) + 1);
      nextAlpha.charCodeAt(0) === 123 ? (nextAlpha = "a") : null;
      answer[i] = nextAlpha;
      if (!skip.includes(nextAlpha)) {
        count += 1;
      }
    }
  }

  return answer.join("");
}
