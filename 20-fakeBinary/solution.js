function fakeBin(x){
    let result = "";
    for(let i = 0; i < x.length; i++){
      if(x[i] < 5 || x[i] === 0){
        result += "0";
      }else{
        result += "1";
      }
    }
    return result;
  }