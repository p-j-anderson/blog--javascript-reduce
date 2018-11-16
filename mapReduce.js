// Example people
const people = [
  { name: 'Brutus', age: 48 },
  { name: 'Remus',  age: 26 },
  { name: 'Pollux', age: 33 },
  { name: 'Nero',   age: 17 }
]

/**
 * Adjusts an array of people to heroes
 */
const reduceMap = people.reduce((acc, cur) => {
  acc.push({ hero: cur.name, yearsYoung: cur.age })
  return acc
}, [])

// Run and log the output
console.log("\nreduceMap:", reduceMap, "\n\n")