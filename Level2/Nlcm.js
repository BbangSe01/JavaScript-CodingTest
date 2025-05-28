// lv2 n개의 최소공배수
function solution(arr) {
  var answer = checkLcm(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    answer = checkLcm(answer, arr[i]);
  }
  return answer;
}

const checkLcm = (a, b) => {
  let start = 2;
  let totalLcm = 1;
  let isDivide = false;
  let maxLine = Math.max(a, b);

  while (true) {
    for (let i = start; i <= maxLine; i++) {
      if (a % i === 0 && b % i === 0) {
        totalLcm *= i;
        a = a / i;
        b = b / i;
        isDivide = true;
        break;
      }
    }
    if (!isDivide) {
      return totalLcm * a * b;
    }
    isDivide = false;
  }
};
