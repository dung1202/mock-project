function findLongestWordLength(str) {
  let vitri = 0, k = 0, max = 0
  while (vitri < str.length) {
    k = 0
    while (str[vitri] != ' ' && vitri < str.length) {
      k++
      vitri++
    }
    vitri++
    if (max < k) max = k
  }
  return max;
}

console.log(findLongestWordLength("May the force be with you"))