function findDifference(a, b) {
    let volumeOfA = a.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
    let volumeOfB = b.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
    
    return volumeOfA > volumeOfB ? volumeOfA - volumeOfB : volumeOfB - volumeOfA;
}