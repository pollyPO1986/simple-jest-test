const add = (int) => {
  return Array(int)
    .fill(0)
    .map((item, index) => {
      return foo(index + 1);
    })
    .join(' ');
};

const foo = (int) => {
  if (int % 15 === 0) {
    return 'fizzbuzz';
  } else if (int % 3 === 0) {
    return 'fizz';
  } else if (int % 5 === 0) {
    return 'buzz';
  } else {
    return int;
  }
};

module.exports = {
  add,
};
