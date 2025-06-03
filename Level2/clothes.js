// lv2 의상(해시)
function solution(clothes) {
  let dict = {};
  var answer = 1;

  clothes.forEach((c) => {
    if (dict[c[1]]) dict[c[1]] += 1;
    else dict[c[1]] = 1;
  });

  Object.values(dict).forEach((num) => {
    answer *= num + 1;
  });

  return answer - 1;
}
