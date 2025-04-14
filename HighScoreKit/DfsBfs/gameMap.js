// 고득점 kit DFS/BFS_게임 맵 최단거리

function solution(maps) {
  let n = maps.length; // 행
  let m = maps[0].length; // 열
  let direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]; // 이동 방향

  const bfs = () => {
    maps[0][0] = 0; // 이미 왔던 곳은 0 처리
    let queue = [[0, 0, 1]];

    while (queue.length) {
      [x, y, count] = queue.shift();

      if (x === n - 1 && y === m - 1) return count;

      for (let eachD of direction) {
        var nextRow = x + eachD[0];
        var nextCol = y + eachD[1];

        if (
          nextRow >= 0 &&
          nextRow < n &&
          nextCol >= 0 &&
          nextCol < m &&
          maps[nextRow][nextCol] === 1
        ) {
          queue.push([nextRow, nextCol, count + 1]);
          maps[nextRow][nextCol] = 0;
        }
      }
    }
    return -1;
  };
  return bfs();
}
