// 고득점 kit 스택/큐_주식가격
function solution(prices) {
  var answer = [];

  prices.forEach((num, idx) => {
    let checkP = num;
    let count = 0;
    for (let i = idx + 1; i < prices.length; i++) {
      count += 1;
      if (checkP > prices[i]) break;
    }
    answer.push(count);
  });
  return answer;
}
