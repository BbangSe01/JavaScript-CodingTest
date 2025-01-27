// 정수 리스트 num_list가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요.
// 음수가 없다면 -1을 return합니다.

function solution(num_list) {
  let i = 0;
  while (i < num_list.length) {
    if (num_list[i] < 0) break;
    i++;
  }
  return i === num_list.length ? -1 : i;
}
