function solution(today, terms, privacies) {
  let todayD = new Date(today);
  let term = terms.map((ter)=> ter.split(" "));
  // 약관 종류
  let termCate = term.map((arr)=>arr[0]);
  // 유효 기간
  let termDate = term.map((arr)=>Number(arr[1]));

  let answer = privacies.map((arr,idx)=> {
      let eachD =new Date(arr.split(" ")[0].replace(/\./g, "-"));
      let eachC  = arr.split(" ")[1];
      
      let changeMonth = termDate[termCate.indexOf(eachC)];
      eachD.setMonth(eachD.getMonth()+changeMonth);
      if(eachD.getDate()===1) {
          eachD.setMonth(eachD.getMonth()-1)
          eachD.setDate(28);
      }else {
          eachD.setDate(eachD.getDate()-1);
      }
      if(eachD<todayD) {
          return idx+1
      }
  })
  return answer.filter((boo)=>boo!==undefined);
  
}