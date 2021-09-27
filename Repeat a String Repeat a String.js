// // cach 1
// function repeatStringNumTimes(str, num) {
//   if (num>0) str = str.repeat(num)
//   else str = ''
//   return str;
// }

// cach 2
function repeatStringNumTimes(str, num) {
  let a = str
  if (num > 0)
    for (let i = 1; i < num; i++)
    {
      str = str + a
    }
  else str = ''
  return str;
}