function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints);
    let sumOfScores = classPoints.reduce((total, currentElement) => {
      return total += currentElement;
    }, 0);
    return sumOfScores / classPoints.length < yourPoints ? true : false;
}
  