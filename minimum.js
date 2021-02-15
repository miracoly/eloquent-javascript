function minimum(a, b) {
  return (a <= b ? a : b);
}

console.table({"1 & 1": minimum(1,1), "1 & 2": minimum(1, 2), "3 & 2": minimum(3, 2), "-1 & 2": minimum(-1, 2)});
