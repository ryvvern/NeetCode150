const twoSum = require("./twoSum")

function assertEqual(actual, expected, name) {
    const a = JSON.stringify(actual.sort())
    const e = JSON.stringify(expected.sort())
    if (a !== e) {
        console.error(`FAIL: ${name}`)
        console.error(" expected:", e)
        console.error(" actual:  ", a)
        process.exitCode = 1
    } else {
        console.log(`PASS: ${name}`)
    }
}

assertEqual(twoSum([2, 7, 11, 15], 9), [0, 1], "classic example")
assertEqual(twoSum([3, 2, 4], 6), [1, 2], "middle elements")
assertEqual(twoSum([3, 3], 6), [0, 1], "duplicate elements")
assertEqual(twoSum([1, 2, 3, 4, 5], 10), [], "no solution")
assertEqual(twoSum([-1, -2, -3, -4, -5], -8), [2, 4], "negative numbers")