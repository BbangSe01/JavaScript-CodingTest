// 문자열 배열 strArr이 주어집니다.
// strArr의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때 가장 개수가 많은 그룹의 크기를 return 하는 solution 함수를 완성해 주세요.

// 나의 초기 코드
function solution(strArr) {
  let count = new Array(30).fill(0);
  strArr.forEach((str) => {
    count[str.length - 1] += 1;
  });
  let ans = 0;

  count.forEach((num) => (ans < num ? (ans = num) : null));
  return ans;
}

// 다름 사람의 풀이를 찾아보니, Math 메서드 중 max를 사용하면 forEach구문을 통해 일일이 비교하지 않아도
// 배열에서 가장 큰 값을 쉽게 찾아낼 수 있었음.

// function solution(strArr) {
//     let count = new Array(30).fill(0);
//     strArr.forEach((str)=> {
//         count[str.length-1] +=1;
//     })

//     return Math.max(...count);
// }
