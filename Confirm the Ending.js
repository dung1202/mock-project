// //cach 1
// function confirmEnding(str, target) {
//   let ok = str.endsWith(target)
//   return ok;
// }

//cach 2
function confirmEnding(str, target) {
  let ok = true;
  for (let i = str.length - 1, j = target.length - 1; i >= 0, j >= 0; i--, j--) {
    if (str[i] != target[j]) {
      ok = false
      break
    }
  }
  return ok;
}

console.log(confirmEnding("Bastian", "n"))