function highAndLow(numbers){
    let newArray = numbers.split(" ").map(e => Number(e));
    return `${Math.max(...newArray)} ${Math.min(...newArray)}`
}