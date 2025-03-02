// lv1 연습문제_바탕화면 정리

function solution(wallpaper) {
  let xArr = wallpaper.map((arr) => (arr.includes("#") ? "#" : "x"));
  let startX = xArr.indexOf("#");
  let endX = xArr.lastIndexOf("#") + 1;

  let yStartArr = wallpaper
    .map((arr, idx) => (arr.includes("#") ? arr.indexOf("#") : null))
    .filter((num) => num !== null);
  let yEndArr = wallpaper
    .map((arr, idx) => (arr.includes("#") ? arr.lastIndexOf("#") : null))
    .filter((num) => num !== null);
  let startY = Math.min(...yStartArr);
  let endY = Math.max(...yEndArr) + 1;

  return [startX, startY, endX, endY];
}
