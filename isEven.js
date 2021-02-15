function isEven(number) {
  if (number < 0) {
    return isEven(-number);
  }

  return (number >= 2 ?
    isEven(number - 2) :
    number === 0);
 }

console.table({0: isEven(0), 1: isEven(1), 10: isEven(10), 13: isEven(13), m9: isEven(-9)});
