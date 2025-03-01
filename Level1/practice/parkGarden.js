// lv1 연습문제_공원 산책
function solution(park, routes) {
  let loc = [0, 0];
  let parkLen = park.length;
  let EachLen = park[0].length;
  let isFind = false;
  // 1. S의 위치를 찾는다.
  outer: for (let i = 0; i < parkLen; i++) {
    for (let j = 0; j < EachLen; j++) {
      if (park[i][j] === "S") {
        loc = [i, j];
        break outer; // 이중 루프 탈출
      }
    }
  }

  routes.forEach((dir) => {
    let [whatD, num] = dir.split(" ");
    num = Number(num);
    let isBlock = false;
    if (whatD === "E") {
      for (let j = loc[1] + 1; j <= loc[1] + num; j++) {
        // 계속 런타임 에러가 뜬 부분이 여기인데,
        // EachLen보다 큰지를 먼저 검사하지 않고 뒷부분을 먼저 검사하면 배열 범위를 벗어나는 참조가 발생할 수 있다고 한다.
        // 이 문제를 방지하려면, 길이를 검사해서 범위에 속하는지부터 검사하는 게 안전하다고 한다.
        if (j >= EachLen || park[loc[0]][j] === "X") {
          isBlock = true;
          break;
        }
      }
      if (!isBlock) {
        loc[1] = loc[1] + num;
      }
    } else if (whatD === "W") {
      for (let j = loc[1] - 1; j >= loc[1] - num; j--) {
        if (j < 0 || park[loc[0]][j] === "X") {
          isBlock = true;
          break;
        }
      }
      if (!isBlock) {
        loc[1] = loc[1] - num;
      }
    } else if (whatD === "S") {
      for (let j = loc[0] + 1; j <= loc[0] + num; j++) {
        if (j >= parkLen || park[j][loc[1]] === "X") {
          isBlock = true;
          break;
        }
      }
      if (!isBlock) {
        loc[0] = loc[0] + num;
      }
    } else if (whatD === "N") {
      for (let j = loc[0] - 1; j >= loc[0] - num; j--) {
        if (j < 0 || park[j][loc[1]] === "X") {
          isBlock = true;
          break;
        }
      }
      if (!isBlock) loc[0] -= num;
    }
  });
  return loc;
}
