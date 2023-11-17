function saleHotdogs(n){
    let pricePerUnit = 0;
    if(n < 5){
      pricePerUnit = 100;
      return n * pricePerUnit;
    }else if(n >= 5 && n < 10){
      pricePerUnit = 95;
      return n * pricePerUnit;
    }else if(n >= 10){
      pricePerUnit = 90;
      return n * pricePerUnit;
    }
  }