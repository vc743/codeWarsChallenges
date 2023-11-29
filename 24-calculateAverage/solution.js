function findAverage(array) {
    if(array.length === 0){
      return 0;
    }
    const average = array.reduce((total, item) => {
      return total += item;
    })
    return average / array.length;
}