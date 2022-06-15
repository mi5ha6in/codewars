// https://www.codewars.com/kata/highest-and-lowest

function highAndLow(numbers){

  // make an array of strings from a string   
  const arrayNumbers = numbers.split(' ');

  // Initial values before loop  
  let minNumber = arrayNumbers[0];
  let maxNumber = arrayNumbers[0];
  
  // loops through the array and compares
  // the current number with the maximum and minimum
  for (let i = 0; i < arrayNumbers.length; i++) {
    
    // converts string to number 
    const currentNumber = Number(arrayNumbers[i]);
    
    if (currentNumber < minNumber) {
      minNumber = currentNumber;
    }
    
    if (currentNumber > maxNumber) {
      maxNumber = currentNumber
    }
  }
  
  return `${maxNumber} ${minNumber}`
}

// Variant using Math
function highAndLow2(numbers) {
  const arrayNumbers = numbers.split(' ');

  // Math independently translates strings to numbers
  return `${Math.max(...arrayNumbers)} ${Math.min(...arrayNumbers)}`;
}