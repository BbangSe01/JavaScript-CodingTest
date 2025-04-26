// lv2 방문길이

// set 자료구조 이용
// a-b / b-a를 둘 다 답안에 넣어서 방향 다를 시 대처
// set/2로 답 도출
function solution(dirs) {
  let ans = new Set();
  let cur = [0, 0];
  [...dirs].forEach((dir) => {
    if (dir === "U" && cur[1] < 5) {
      cur[1] += 1;
      ans.add(`${cur[0]}${cur[1] - 1}-${cur[0]}${cur[1]}`);
      ans.add(`${cur[0]}${cur[1]}-${cur[0]}${cur[1] - 1}`);
    } else if (dir === "D" && cur[1] > -5) {
      cur[1] -= 1;
      ans.add(`${cur[0]}${cur[1] + 1}-${cur[0]}${cur[1]}`);
      ans.add(`${cur[0]}${cur[1]}-${cur[0]}${cur[1] + 1}`);
    } else if (dir === "L" && cur[0] > -5) {
      cur[0] -= 1;
      ans.add(`${cur[0] + 1}${cur[1]}-${cur[0]}${cur[1]}`);
      ans.add(`${cur[0]}${cur[1]}-${cur[0] + 1}${cur[1]}`);
    } else if (dir === "R" && cur[0] < 5) {
      cur[0] += 1;
      ans.add(`${cur[0] - 1}${cur[1]}-${cur[0]}${cur[1]}`);
      ans.add(`${cur[0]}${cur[1]}-${cur[0] - 1}${cur[1]}`);
    }
  });

  return ans.size / 2;
}
