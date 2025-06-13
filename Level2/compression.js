// 2018 KAKAO BLIND RECRUITMENT [3차] 압축

function solution(msg) {
  const dir = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };

  let answer = [];
  let maxLen = 1;
  let curInx = 0;
  let nextValue = 27;

  while (curInx < msg.length) {
    let checkLen = maxLen;
    for (let i = checkLen; i > 0; i--) {
      let check = [...msg].slice(curInx, curInx + i).join("");
      if (dir[check]) {
        answer.push(dir[check]);
        let addDict = [...msg].slice(curInx, curInx + i + 1).join("");
        if (!dir[addDict]) {
          dir[addDict] = nextValue;
          nextValue += 1;
          maxLen = Math.max(maxLen, addDict.length);
        }
        curInx += i;
        break;
      }
    }
  }
  return answer;
}
