function solution(n, wires) {
  let ans = Infinity;
  // 트리 생성. 각각의 전력망에 연결된 전력망 번호 기입입
  let tree = Array.from(Array(n + 1), () => []);
  wires.forEach(([v1, v2]) => {
    tree[v1].push(v2);
    tree[v2].push(v1);
  });

  const searchTree = (root, exceptNum) => {
    let count = 0;
    let visit = new Array(n + 1).fill(false);
    let queue = [root];
    visit[root] = true;
    // queue가 없을 때까지, 즉 더 연결된 전력망이 없을 때까지
    while (queue.length) {
      let idx = queue.shift();
      tree[idx].forEach((element) => {
        if (!visit[element] && element !== exceptNum) {
          visit[element] = true;
          queue.push(element);
        }
      });
      count += 1;
    }

    return count;
  };
  wires.forEach(([a, b]) => {
    ans = Math.min(ans, Math.abs(searchTree(a, b) - searchTree(b, a)));
  });
  return ans;
}
