const isAnagram = require("./validAnagrams")

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

assertEqual(isAnagram("anagram", "nagaram"), true, "example true")
assertEqual(isAnagram("rat", "car"), false, "example false")
assertEqual(isAnagram("", ""), true, "empty strings")
assertEqual(isAnagram("a", "a"), true, "single char same")
assertEqual(isAnagram("a", "b"), false, "single char different")
assertEqual(isAnagram("ab", "ba"), true, "two chars swapped")
assertEqual(isAnagram("ab", "abc"), false, "different lengths")