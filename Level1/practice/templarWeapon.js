// lv1 연습문제 기사단원의 무기

function solution(number, limit, power) {
  var answer = 0;
  for (let i = 1; i <= number; i++) {
    let mCount = 0;
    let sqrtI = Math.sqrt(i);
    for (let j = 1; j <= sqrtI; j++) {
      if (i % j === 0) {
        mCount += 1;
        if (j !== i / j) mCount += 1;
      }
    }
    if (mCount <= limit) answer += mCount;
    else answer += power;
  }
  return answer;
}
