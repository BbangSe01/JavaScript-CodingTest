// 프로그래머스 lv1 연습문제_덧칠하기

function solution(n, m, section) {
  let secArr = [...section];
  var count = 0;
  while (secArr.length > 0) {
    let startNum = secArr[0];
    let drawing = startNum + m - 1;
    if (drawing >= secArr[1]) {
      secArr = secArr.filter((num) => num > drawing);
    } else {
      secArr = secArr.slice(1);
    }
    count += 1;
  }
  return count;
}

// 다른 사람의 풀이
// function solution(n, m, sections) {
//     var answer = 0;
//     var painted = 0;
//     for(var section of sections) {
//         if(painted < section) {
//             answer++;
//             painted = section+m-1;
//         }
//     }
//     return answer;
// }

// 나의 풀이의 경우, filter와 slice를 사용햐여 계속해서 매번 새로운 배열을 생성하므로 시간복잡도가 O(n*2)
// 다른 사람의 풀이의 경우, 단순히 for문으로 순회하면서 체크하기 때문에 시간복잡도가 O(n)
// 어떻게 코드를 짜야 시간복잡도를 낮출 수 있을지 고민하는 연습을 많이 해야할 것 같다.
