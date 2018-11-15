const people = [
    { name: 'Brutus', age: 48 },
    { name: 'Remus',  age: 26 },
    { name: 'Pollux', age: 33 },
    { name: 'Nero',   age: 17 }
]

/**
 * Adjusts an array of objects to heroes
 */
const reduceMap = people.reduce((acc, cur) => {
    const hero = { hero: cur.name, yearsYoung: cur.age }
    acc.push(hero)
    return acc
}, [])

// Run and log the output
console.log("\nreduceMap:", reduceMap, "\n\n")