function findMultiples(integer, limit) {
    let multiples = [];
    for(let i = 1; i <= limit; i++){
      if(i % integer === 0){
        multiples.push(i);
      }
    }
    return multiples;
}