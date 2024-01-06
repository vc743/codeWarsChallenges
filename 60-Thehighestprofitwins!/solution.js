function minMax(arr){
    let result = [];
    result.push(Math.min(...arr));
    result.push(Math.max(...arr));
    return result;
}