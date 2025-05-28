// lv3_네트워크

function solution(n, computers) {
  //방문 여부를 꼭 체크해줘야 함.
  var visit = [false];
  var answer = 0;

  const dfs = (i) => {
    visit[i] = true;
    for (let j = 0; j < computers.length; j++) {
      if (computers[i][j] === 1 && !visit[j]) {
        dfs(j);
      }
    }
  };

  for (let i = 0; i < computers.length; i++) {
    if (!visit[i]) {
      dfs(i);
      answer += 1;
    }
  }

  return answer;
}
