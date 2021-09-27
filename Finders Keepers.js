function findElement(arr, func) {
  let kt = undefined
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      kt = arr[i]
      break
    }

  }
  return kt
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))