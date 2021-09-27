function reverseString(str) {
  let woa=''
  for (let i=str.length-1; i>=0; i--)
  {
      woa = woa + str[i]
  }
  return woa;
}

console.log(reverseString("hello"))