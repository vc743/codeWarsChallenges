function oddOrEven(array) {
    const number = array.reduce((total, current) => total + current, 0)
    return number % 2 === 0 ? "even" : "odd";
}