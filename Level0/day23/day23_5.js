// 정수 배열 date1과 date2가 주어집니다.
// 두 배열은 각각 날짜를 나타내며 [year, month, day] 꼴로 주어집니다. 각 배열에서 year는 연도를, month는 월을, day는 날짜를 나타냅니다.

// 만약 date1이 date2보다 앞서는 날짜라면 1을, 아니면 0을 return 하는 solution 함수를 완성해 주세요.

function solution(date1, date2) {
  if (date1[0] !== date2[0]) {
    return Math.max(date1[0], date2[0]) === date1[0] ? 0 : 1;
  } else if (date1[1] !== date2[1]) {
    return Math.max(date1[1], date2[1]) === date1[1] ? 0 : 1;
  } else {
    return Math.max(date1[2], date2[2]) === date1[2] ? 0 : 1;
  }
}

// 다른 사람의 풀이를 보니, Date 메서드를 이용하여 번거롭게 배열의 각 요소들을 둘러보지 않아도
// 쉽게 날짜 크기를 판별할 수 있었다...

// function solution(date1, date2) {
//     let D1 = new Date(date1);
//     let D2 = new Date(date2);

//     return D1<D2 ? 1 : 0;
// }
