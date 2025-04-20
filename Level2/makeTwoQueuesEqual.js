// lv2 두 큐 합 같게 만들기

// 기존의 내 코드는 로직은 맞지만 두 가지 문제 때문에 런타임 에러
// while 무한루프에 빠질 가능성 + splice의 비효율성

// function solution(queue1, queue2) {
//   let q1Sum = 0;
//   let q2Sum = 0;
//   let answer = 0;
//   queue1.forEach((num) => (q1Sum += num));
//   queue2.forEach((num) => (q2Sum += num));
//   let checkP = (q1Sum + q2Sum) / 2;
//   if (Math.max(...queue1) > checkP || Math.max(...queue2) > checkP) return -1;

//   while (true) {
//     if (q1Sum > q2Sum) {
//       q1Sum -= queue1[0];
//       q2Sum += queue1[0];
//       queue2.push(queue1[0]);
//       queue1.splice(0, 1);
//       answer += 1;
//     } else if (q1Sum < q2Sum) {
//       q1Sum += queue2[0];
//       q2Sum -= queue2[0];
//       queue1.push(queue2[0]);
//       queue2.splice(0, 1);
//       answer += 1;
//     } else {
//       break;
//     }
//   }

//   return answer;
// }

// 두 queue를 하나의 배열로 합쳐서 투포인터를 활용한 풀이
function solution(queue1, queue2) {
  let n = queue1.length;
  let totalQ = [...queue1, ...queue2];
  let q1Sum = queue1.reduce((a, b) => a + b, 0);
  let q2Sum = queue2.reduce((a, b) => a + b, 0);
  let checkP = (q1Sum + q2Sum) / 2;

  if ((q1Sum + q2Sum) % 2 === 1) return -1;

  let left = 0;
  let right = n;
  let sum = q1Sum;
  let answer = 0;
  for (let i = 0; i < n * 3; i++) {
    if (sum === checkP) return answer;

    if (sum < checkP) {
      sum += totalQ[right];
      answer += 1;
      right += 1;
    } else {
      sum -= totalQ[left];
      left += 1;
      answer += 1;
    }
  }

  return -1;
}
