// lv2 숫자의 표현

// 처음 내 코드는 효율성 검사에서 불통과
// function solution(n) {
//     var answer = 0;
//     let halfN = 0;
//     halfN= n%2===1 ?Math.floor(n/2)+1 : halfN=n/2;

//     for(let i=1; i<halfN; i++) {
//         let checkN = i;
//         let plusN = i;
//         while(true) {
//             checkN = checkN+(plusN+1);
//             plusN++;
//             if(checkN===n) {
//                 answer+=1;
//                 break;
//             }
//             else if(checkN>n) {
//                 break;
//             }
//         }
//     }
//     return answer+1;
// }

// 등차수열의 합을 이용한 코드
function solution(n) {
  let answer = 0;

  for (let k = 1; (k * (k - 1)) / 2 < n; k++) {
    const numerator = n - (k * (k - 1)) / 2;
    if (numerator % k === 0) {
      answer++;
    }
  }

  return answer;
}
