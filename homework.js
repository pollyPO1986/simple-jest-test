const calculator = (range, divisor) => {
  let newArray = [];

  for (let i = 1; i <= range; i++) {
    if (i % divisor === 0) {
      newArray.push(i);
    }
  }

  return newArray;
};

const getMagicNumber = (range, factor1, factor2) => {
  let factorA = calculator(range, factor1);
  let factorB = calculator(range, factor2);
  let bothFactorArray = factorA
    .filter((itemA) => {
      return factorB.indexOf(itemA) === -1;
    })
    .concat(
      factorB.filter((itemB) => {
        return factorA.indexOf(itemB) === -1;
      })
    );

  return bothFactorArray.sort((a, b) => {
    return a - b;
  });
};

module.exports = {
  calculator,
  getMagicNumber,
};
