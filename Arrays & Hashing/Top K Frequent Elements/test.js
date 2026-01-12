const topKFrequent = require("./topK")

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

assertEqual(topKFrequent([1,1,1,2,2,3], 2), [1,2], "example")
assertEqual(topKFrequent([1], 1), [1], "single element")
assertEqual(topKFrequent([1,2,2,3,3,3,4,4], 3), [2,3,4], "different frequencies")
assertEqual(topKFrequent([1,1,2,2,3,3,4,5], 2), [1,2], "tie for top frequencies")
assertEqual(topKFrequent([5,5,5,5,5], 1), [5], "all same element")
assertEqual(topKFrequent([1,2,2,3,3,3], 1), [3], "most frequent only")
assertEqual(topKFrequent([1,1,1,2,2,3,3,4,5,6,7,8,9,10], 3), [1,2,3], "large array with clear top frequencies")