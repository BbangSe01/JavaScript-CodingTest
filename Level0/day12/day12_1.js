// 정수 n과 정수 3개가 담긴 리스트 slicer 그리고 정수 여러 개가 담긴 리스트 num_list가 주어집니다. slicer에 담긴 정수를 차례대로 a, b, c라고 할 때, n에 따라 다음과 같이 num_list를 슬라이싱 하려고 합니다.

// n = 1 : num_list의 0번 인덱스부터 b번 인덱스까지
// n = 2 : num_list의 a번 인덱스부터 마지막 인덱스까지
// n = 3 : num_list의 a번 인덱스부터 b번 인덱스까지
// n = 4 : num_list의 a번 인덱스부터 b번 인덱스까지 c 간격으로
// 올바르게 슬라이싱한 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(n, slicer, num_list) {
  var answer = [];

  switch (n) {
    case 1:
      for (let i = 0; i <= slicer[1]; i++) {
        answer.push(num_list[i]);
      }
      break;
    case 2:
      for (let i = slicer[0]; i <= num_list.length; i++) {
        answer.push(num_list[i]);
      }
      break;
    case 3:
      for (let i = slicer[0]; i <= slicer[1]; i++) {
        answer.push(num_list[i]);
      }
      break;
    case 4:
      for (let i = slicer[0]; i <= slicer[1]; i += slicer[2]) {
        answer.push(num_list[i]);
      }
      break;
  }
  return answer;
}

// 위처럼 일일이 push해주는 방식이 아니라 slice 메소드를 사용하면 훨씬 코드가 간결하고 편해짐.
// function solution(n, slicer, num_list) {
//     var answer = [];

//     switch(n) {
//         case 1:
//             return num_list.slice(0,slicer[1]+1);
//         case 2:
//             return num_list.slice(slicer[0],);
//         case 3:
//             return num_list.slice(slicer[0],slicer[1]+1);
//         case 4:
//              return num_list.slice(slicer[0],slicer[1]+1).filter((_, idx) => !(idx % slicer[2]));

//     }
//     return answer;
// }
