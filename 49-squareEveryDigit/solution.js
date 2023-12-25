function squareDigits(num){
    return Number(String(num).split("").map(e => Number(e) ** 2).join(""));
}