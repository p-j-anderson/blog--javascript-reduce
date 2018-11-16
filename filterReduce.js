// Array for testing
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * Filters numbers that are even
 */
const reduceEven = numbers.reduce((acc, cur) => {
  if (cur % 2 === 0) acc.push(cur)
  return acc
}, [])

// Run and log the output
console.log("\nreduceEven:", reduceEven, "\n\n")

/**
 * Filters numbers that are greater than 6
 */
const reduceGreaterThan = numbers.reduce((acc, cur) => {
  if (cur > 6) acc.push(cur)
  return acc
}, [])

// Run and log the output
console.log("reduceGreaterThan:", reduceGreaterThan, "\n\n")