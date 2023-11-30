function checkExam(array1, array2) {
    let finalScore = 0;
    for (let i = 0; i < array1.length; i++) {
      if (array2[i] === "") {
        finalScore += 0;
      }else if(array1[i] === array2[i]){
        finalScore += 4;
      }else if(array1[i] !== array2[i]){
        finalScore -= 1;
      }
    }
    
    return finalScore < 0 ? 0 : finalScore;
  }