const Solution = require("./containsDuplicate")

function assertEqual(actual, expected, name) {
    if (actual !== expected) {
        console.error(`FAIL: ${name}`)
        console.error(" expected:", expected)
        console.error(" actual:  ", actual)
        process.exitCode = 1
    } else {
        console.log(`PASS: ${name}`)
    }
}

const sol = new Solution()

assertEqual(sol.hasDuplicate([1, 2, 3, 1]), true, "example with duplicate")
assertEqual(sol.hasDuplicate([1, 2, 3, 4]), false, "example without duplicate")
assertEqual(sol.hasDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true, "multiple duplicates")
assertEqual(sol.hasDuplicate([]), false, "empty array")
assertEqual(sol.hasDuplicate([1]), false, "single element")