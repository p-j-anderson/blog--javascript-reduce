// Many numbers for counting occurrences
const manyNumbers = [1, 1, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 6, 7, 7, 7, 7]

/**
 * Count the occurrences of numbers (beginner)
 */
const reduceOccurrencesBeginner = manyNumbers.reduce((accumulator, current, index) => {
    console.log(`loop ${index}`)
    if (accumulator[current]) {
        console.log(`${current} exists. Incrementing count from ${accumulator[current]} to ${accumulator[current] + 1}`)
        accumulator[current]++
    } else {
        console.log(`${current} does not exist. Setting ${current}`)
        accumulator[current] = 1
    }
    return accumulator
}, {})

// Log the output
console.log("\nreduceOccurrencesBeginner:", reduceOccurrencesBeginner, "\n\n")

/**
 * Count the occurrences of numbers
 */
const reduceOccurrences = manyNumbers.reduce((acc, cur) => {
    if (acc[cur] ? acc[cur]++ : acc[cur] = 1)
    return acc
}, {})

// Log the output
console.log("reduceOccurrences:", reduceOccurrences, "\n\n")