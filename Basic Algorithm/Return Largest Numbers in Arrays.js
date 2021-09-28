function largestOfFour(arr) {
  let a = []
  for (let i = 0; i < 4; i++) {
    arr[i].sort((a,b) => a - b)
    a.push(arr[i][3])
  }
  return a;
}

console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]))