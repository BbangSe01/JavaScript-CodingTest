function solution(a, b, c, d) {
  const array = [a, b, c, d];
  const numSet = [...new Set(array)];

  // 네 숫자가 모두 같은 경우
  if (numSet.length === 1) {
    return 1111 * numSet[0];
  }
  // 세 주사위가 같거나 두 개씩 같은 경우
  else if (numSet.length === 2) {
    let equalSet1 = 0;
    let equalSet2 = 0;

    for (let i = 0; i < array.length; i++) {
      if (numSet[0] === array[i]) {
        equalSet1 += 1;
      } else if (numSet[1] === array[i]) {
        equalSet2 += 1;
      }
    }

    if (equalSet1 === 3 && equalSet2 === 1) {
      return (10 * numSet[0] + numSet[1]) ** 2;
    } else if (equalSet1 === 2 && equalSet2 === 2) {
      return (numSet[0] + numSet[1]) * Math.abs(numSet[0] - numSet[1]);
    } else if (equalSet1 === 1 && equalSet2 === 3) {
      return (10 * numSet[1] + numSet[0]) ** 2;
    }
  }
  // 두 주사위가 같고 나머지 두 주사위는 다를 경우
  else if (numSet.length === 3) {
    let countNumset = [0, 0, 0];
    let answer = 1;

    for (let i = 0; i < array.length; i++) {
      if (array[i] === numSet[0]) {
        countNumset[0]++;
      } else if (array[i] === numSet[1]) {
        countNumset[1]++;
      } else if (array[i] === numSet[2]) {
        countNumset[2]++;
      }
    }

    for (let j = 0; j < countNumset.length; j++) {
      countNumset[j] === 2 ? null : (answer *= numSet[j]);
    }
    return answer;
  } else if (numSet.length === 4) {
    return Math.min(...numSet);
  }
}
