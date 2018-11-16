// Numbers for testing
const numbers = [1, 2, 3, 4, 5]

/**
 * Add two to numbers
 */
const plusTwoReducer = (acc, cur) => {
  acc.push(cur + 2)
  return acc
}

/**
 * Add six to numbers
 */
const plusSixReducer = (acc, cur) => {
  acc.push(cur + 6)
  return acc
}

// Run and log the output
console.log("\nNumbers plus two:", numbers.reduce(plusTwoReducer, []), "\n\n")
console.log("Numbers plus six:", numbers.reduce(plusSixReducer, []), "\n\n")
