// 7 kyu https://www.codewars.com/kata/isograms
function isIsogram(str) {
  const setFromStr = new Set(str.toLowerCase());
  
  return str.length === setFromStr.size
}
