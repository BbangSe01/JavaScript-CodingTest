// lv2 할인 행사

function solution(want, number, discount) {
  var answer = 0;

  for (let i = 0; i <= discount.length - 10; i++) {
    let tenDays = new Array(number.length).fill(0);
    for (let j = i; j < i + 10; j++) {
      tenDays[want.indexOf(discount[j])] += 1;
    }
    if (JSON.stringify(number) === JSON.stringify(tenDays)) {
      answer += 1;
    }
  }
  return answer;
}
