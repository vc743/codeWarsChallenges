function abbrevName(name){
    let arrName = name.split(" ");
    
    for(let i = 0; i < arrName.length; i++){
      arrName[i] = arrName[i][0].toUpperCase();
    }
    
    return arrName.join(".");
  }