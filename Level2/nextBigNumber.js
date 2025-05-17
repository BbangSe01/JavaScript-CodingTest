// lv2 다음 큰 숫자
function solution(n) {
  let oneCount = [...n.toString(2)].filter((e) => e !== "0").length;

  while (true) {
    n += 1;
    let nextCount = [...n.toString(2)].filter((e) => e !== "0").length;
    if (oneCount === nextCount) return n;
  }
}
