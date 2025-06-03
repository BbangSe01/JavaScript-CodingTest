// lv2 연속 부분 수열 합의 개수

function solution(elements) {
  // set은 중복을 허용하지 않으므로 set을 활용하여 중복 처리를 효율적으로.
  const set = new Set();
  const len = elements.length;

  for (let i = 1; i <= len; i++) {
    // 부분 수열 길이
    for (let j = 0; j < len; j++) {
      // 시작 인덱스
      let sum = 0;
      for (let k = 0; k < i; k++) {
        // i 길이만큼 합산
        sum += elements[(j + k) % len]; // 원형 처리
      }
      set.add(sum);
    }
  }

  return set.size;
}
