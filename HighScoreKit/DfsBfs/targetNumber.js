// 고득점 kit dfs/bfs_타켓 넘버

function solution(numbers, target) {
  var answer = 0;

  const dfs = (cur, idx) => {
    if (idx === numbers.length) {
      if (cur === target) answer += 1;
      return;
    }

    dfs(cur + numbers[idx], idx + 1);
    dfs(cur - numbers[idx], idx + 1);
  };

  dfs(0, 0);
  return answer;
}
