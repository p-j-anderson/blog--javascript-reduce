// String for testing
const example = "In case I don't see you, good afternoon, good evening and good night"

/**
 * Reverses a string using a for loop
 */
const forReverse = str => {
  let newStr = ''
  for (i = str.length; i >= 0; i--) {
    newStr += str.charAt(i)
  }
  return newStr
}

// Run and log the output
const forOutput = forReverse(example)
console.log("\nforReverse:", forOutput, "\n\n")

/**
 * Reverses a string using reduce (beginner)
 */
const reduceReverseBeginner = str => {
  // Convert the string to an array
  const letters = str.split('')

  // Reduce the array
  return letters.reduceRight((newSentence, letter, index) => {
    console.log(`Adding letter "${letter}" from index: ${index}`)
    return newSentence += letter
  }, '')
}
// Run and log the output - Uncomment to run
// const reduceReverseBeginnerOutput = reduceReverseBeginner(example)
// console.log("reduceReverseBeginner:", reduceReverseBeginnerOutput, "\n\n")

/**
 * Reverses a string using reduce
 */
const reduceReverse = str => {
  return str.split('').reduceRight((sentence, letter) => sentence += letter)
}

// Run and log the output
const reduceOutput = reduceReverse(example)
console.log("reduceReverse:", reduceOutput, "\n\n")

/**
 * Reverses individual words using reduceReverse (beginner)
 */
const reduceWordsBeginner = str => {
  // Convert the words to arrays
  const words = str.split(' ')

  return words.reduce((newSentence, word) => {
    console.log(`Sending "${word}" to be reversed`)
    return newSentence += reduceReverseBeginner(word) + ' '
  }, '')
}
// Run and log the output - Uncomment to run
// const reduceWordsBeginnerOutput = reduceWordsBeginner(example)
// console.log("reduceWordsBeginner:", reduceWordsBeginnerOutput, "\n\n")

/**
 * Reverses individual words using reduceReverse
 */
const reduceWords = str => {
  return str.split(' ')
    .reduce((newSentence, word) => newSentence += reduceReverse(word) + ' ', '')
}

// Run and log the output
const reduceWordsOutput = reduceWords(example)
console.log("reduceWords:", reduceWordsOutput, "\n\n")
