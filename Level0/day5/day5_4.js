// 정수가 담긴 리스트 num_list가 주어질 때,
// 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록
// solution 함수를 완성해주세요.

function solution(num_list) {
  let arraySum = 0;
  let arrayMul = 1;

  for (let i = 0; i < num_list.length; i++) {
    arraySum += num_list[i];
    arrayMul *= num_list[i];
  }

  return arrayMul < arraySum ** 2 ? 1 : 0;
}
