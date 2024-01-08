function countPositivesSumNegatives(input) {
    let countPositives = 0;
    let sumNegatives = 0;
    let result = [];
    
    if(input === null || input.length === 0){
      return [];
    }
    
    for(let i = 0; i < input.length; i++){
      if(input[i] > 0){
        countPositives++;
      }else if(input[i] < 0){
        sumNegatives += input[i];
      }
    }
    
    result.push(countPositives);
    result.push(sumNegatives);
    return result;
}