function truncateString(str, num) {
  let a = str.slice(0,num)
  if (a.length < str.length) a = a + '...'
 a
  return a;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))