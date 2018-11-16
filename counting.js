// Array for testing
const numbers = [3, 4, 5]

/**
 * Counts array values using a for loop
 */
const forCount = numbersArr => {
  let sum = 0
  for (i = 0; i < numbersArr.length; i++) {
    sum += numbersArr[i]
  }
  return sum
}

// Run and log the output
const total = forCount(numbers)
console.log("\nforCount total:", total, "\n\n")

/**
 * Beginner reduce for couting values
 */
console.log('START reducing')
const reduceLog = numbers.reduce((accumulator, current, index) => { 
  console.log(`start loop ${index} | accumulator is:`, accumulator)
  console.log(`add accumulator + current (${accumulator} + ${current})`)
  return accumulator + current
}, 0)

// Log the output
console.log('FINISHED - reduceLog total:', reduceLog, "\n\n")

/**
 * Advanced reduce for counting values
 */
const reduceCount = numbers.reduce((acc, cur) => acc + cur)

// Log the output
console.log('reduceCount total:', reduceCount, "\n\n")