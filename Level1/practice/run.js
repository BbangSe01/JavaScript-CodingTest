// level1 연습문제_달리기 경주

// 내 코드
// function solution(players, callings) {
//     var answer = [...players];
//     callings.forEach((who)=> {
//         let box = answer[answer.indexOf(who)-1];
//         answer[answer.indexOf(who)-1] = who;
//         answer[answer.indexOf(who)+1] = box;
//     })
//     return answer;
// }

// 로직은 맞았지만, 시간 초과 오류가 발생했다. 찾아보니 자료구조 중 map을 사용하면 이 문제를 해결할 수 있었다.
// 위 코드는 who의 index를 찾기 위해 일일이 탐색하기 때문에 최악의 경우 배열의 끝까지 탐색을 진행해야 하는 반면,
// map함수를 이용 시, key값을 통해 훨씬 빠르게 탐색을 할 수 있었다.

function solution(players, callings) {
  let answer = [...players];
  let map = new Map();
  answer.forEach((who, idx) => map.set(who, idx));
  callings.forEach((who) => {
    let boxKey = map.get(who);
    let box = answer[boxKey - 1];
    answer[boxKey - 1] = who;
    answer[boxKey] = box;
    map.set(box, boxKey);
    map.set(who, boxKey - 1);
  });
  return answer;
}
