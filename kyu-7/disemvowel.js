// 7 kyu https://www.codewars.com/kata/disemvowel-trolls

function disemvowel(str) {
  // create a set to check for the presence of a letter in O(1)
  // object can be used

  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const arrayFromStr = str.split("");

  const stringWithoutVowels = [];

  for (let symbol of arrayFromStr) {
    if (!vowels.has(symbol.toLowerCase())) {
      stringWithoutVowels.push(symbol);
    }
  }

  return stringWithoutVowels.join("");
}

// Variant using RegExp
function disemvowel2(str) {
  return str.replace(/[aeiou]/gi, "");
}
