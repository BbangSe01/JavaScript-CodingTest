// lv2 이진 변환 반복하기
function solution(s) {
  let ans = [0, 0];
  let arrS = [...s];
  while (arrS.length > 1) {
    arrS = arrS
      .map((n) => {
        if (n === "0") {
          ans[1] += 1;
          return "";
        } else if (n === "1") {
          return n;
        }
      })
      .filter((n) => n !== "");
    arrS = [...parseInt(arrS.length).toString(2)];
    ans[0] += 1;
  }
  return ans;
}
