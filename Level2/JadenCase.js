// lv2 JadenCase 문자열 만들기

function solution(s) {
  let pieces = s.toLowerCase().split(" ");
  console.log(pieces);
  pieces = pieces.map((str) => {
    // 문자열이 없을 경우 처리
    if (str.length === 0) return "";
    let arrStr = [...str];
    if (!isNaN(arrStr[0])) {
      return str;
    } else {
      arrStr[0] = arrStr[0].toUpperCase();
      return arrStr.join("");
    }
  });
  return pieces.join(" ");
}
