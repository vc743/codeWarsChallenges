function countSheeps(arrayOfSheep) {
    let result = 0;
    for(let i = 0; i < arrayOfSheep.length; i++){
      if(arrayOfSheep[i] === true){
        result += 1;
      }
    }
    return result;
}