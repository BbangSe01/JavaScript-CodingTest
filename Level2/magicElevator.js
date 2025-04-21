// lv2 마법의 엘리베이터

function solution(storey) {
  let stack = [...String(storey)];
  let count = 0;
  let w = 0; // 가중치

  if (storey < 10) {
    return storey > 5 ? 10 - storey + 1 : storey;
  }

  while (true) {
    let outNum = parseInt(stack.pop()) + w;
    if (outNum >= 5) {
      if (outNum === 5) {
        if (parseInt(stack[stack.length - 1]) >= 5) {
          count += 10 - outNum;
          w = 1;
        } else {
          count += outNum;
          w = 0;
        }
      } else {
        count += 10 - outNum;
        w = 1;
      }
    } else {
      count += outNum;
      w = 0;
    }
    if (stack.length === 0) {
      if (w === 1) count += 1;
      break;
    }
  }

  return count;
}
