const reverseSeq = n => {
    let array = [];
    if(n > 0){
      for(let i = n; i >= 1; i--){
        array.push(i);
      }
      return array;
    }else{
      return [];
    }
  };