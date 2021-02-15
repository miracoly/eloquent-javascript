// 3.1 minimum
function minimum(a, b) {
  return (a <= b ? a : b);
}

console.log("\n3.1 minimum");
console.table({
  "1 & 1": minimum(1, 1),
  "1 & 2": minimum(1, 2),
  "3 & 2": minimum(3, 2),
  "-1 & 2": minimum(-1, 2),
});

// 3.2 recursion
function isEven(number) {
  if (number < 0) {
    return isEven(-number);
  }

  return (number >= 2 ?
    isEven(number - 2) :
    number === 0);
 }

console.log("\n3.2 isEven");
console.table({
  0: isEven(0),
  1: isEven(1),
  10: isEven(10),
  13: isEven(13),
  m9: isEven(-9),
});

// 3.3 count Bs 
function countBs(word) {
  bCount = 0;
  for (i=0; i < word.length; i++) {
    if (word[i] === "B") {
      bCount++;
    }
  }
  return bCount;
}

console.log("\n3.3 countBs");
console.table({
  Hallo: countBs("Hallo"),
  Bello: countBs("Bello"),
  biBobaBu: countBs("biBobaBu"),
});

// 3.3 count char 
function countChar(word, char) {
  count = 0;
  for (i=0; i < word.length; i++) {
    if (word[i] === char) {
      count++;
    }
  }
  return count;
}

console.log("\n3.3 countChar");
console.table({
  "Hallo; l": countChar("Hallo", "l"),
  "Bello; B": countChar("Bellob", "B"),
  "biBobaBu; B": countChar("biBobaBu", "B"),
});
