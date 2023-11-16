function maps(x){
    let result = [];
    x.forEach(element => {
      result.push(element + element);
    })
    return result;
  }