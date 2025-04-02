// 탐욕법 lv2 큰 수 만들기

function solution(number, k) {
  let ans = [];
  let key = k;
  for (let Num of number) {
    while (ans.length > 0 && key > 0 && ans[ans.length - 1] < Num) {
      ans.pop();
      key -= 1;
    }
    ans.push(Num);
  }

  return key === 0 ? ans.join("") : ans.slice(0, ans.length - key).join("");
}
