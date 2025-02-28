// lv1 연습문제_추억점수

function solution(name, yearning, photo) {
  var answer = [];
  photo.forEach((arr, idx) => {
    let score = 0;
    for (let i = 0; i < arr.length; i++) {
      name.includes(arr[i]) ? (score += yearning[name.indexOf(arr[i])]) : null;
    }
    answer.push(score);
  });
  return answer;
}
