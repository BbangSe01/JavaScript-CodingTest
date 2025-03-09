// 고득점kit 완전탐색_소수찾기

function solution(numbers) {
  // 소수인지 검증하는 함수수
  const isPrime = (num) => {
    if (num === 1) return false;
    else if (num === 2) return true;
    else {
      const sqrt = parseInt(Math.sqrt(num));
      for (let i = 2; i <= sqrt; i++) {
        if (num % i === 0) return false;
      }
    }
    return true;
  };
  // split을 이용하여 조각 배열 만듦
  var answer = numbers.split("");
  // 소수 개수
  let count = 0;
  // 중복되는 경우의 수를 제외하기 위한 set 객체
  let source = new Set();

  const getPrime = (arr, cur) => {
    // 첫 조각이 "0"인 경우 숫자로 취급할 수 없으므로 아예 함수 종료.
    if (cur[0] === "0") return;

    if (cur.length > 0) {
      // set 객체가 현재 숫자를 가지고 있찌 않을 경우
      if (!source.has(cur)) {
        // 경우의 수 추가
        source.add(cur);
        // 소수라면 카운트 업
        if (isPrime(Number(cur))) {
          count += 1;
        }
      }
    }

    // 사용할 수 있는 숫자 조각이 있는 경우우
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        // 복사본 1개 생성, splice를 이용해 현재 선택한 숫자 조각은 삭제
        let copyArr = [...arr];
        copyArr.splice(i, 1);
        // 재귀함수를 수행하여 전체 조합 순회 가능
        getPrime(copyArr, cur + arr[i]);
      }
    }
  };
  getPrime(answer, "");
  return count;
}
