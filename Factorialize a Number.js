function factorialize(num) {
  let giai_thua = 1
  for (let i = 1; i<=num; i++)
  {
      giai_thua = giai_thua * i
  }
  return giai_thua;
}

console.log(factorialize(20))