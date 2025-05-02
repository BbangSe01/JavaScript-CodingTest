// lv2 최댓값과 최솟값

function solution(s) {
  let numArr = [];
  let box = "";
  [...s].forEach((str, idx) => {
    if (str !== " ") box += str;
    else {
      numArr.push(parseInt(box));
      box = "";
    }

    if (idx === [...s].length - 1) numArr.push(parseInt(box));
  });
  console.log(numArr);
  let min = Math.min(...numArr);
  let max = Math.max(...numArr);

  return `${min} ${max}`;
}
