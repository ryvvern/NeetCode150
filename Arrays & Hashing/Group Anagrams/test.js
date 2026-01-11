const groupAnagrams = require("./Group_Anagrams")

function normalize(groups) {
    return groups
        .map((g) => g.slice().sort())
        .sort((a, b) => a.join("|").localeCompare(b.join("|")))
}

function assertEqual(actual, expected, name) {
    const a = JSON.stringify(normalize(actual))
    const e = JSON.stringify(normalize(expected))
    if (a !== e) {
        console.error(`FAIL: ${name}`)
        console.error(" expected:", e)
        console.error(" actual:  ", a)
        process.exitCode = 1
    } else {
        console.log(`PASS: ${name}`)
    }
}

assertEqual(
    groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]),
    [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
    "example"
)

assertEqual(groupAnagrams([""]), [[""]], "single empty string")
assertEqual(groupAnagrams(["a"]), [["a"]], "single char")
assertEqual(groupAnagrams(["ab", "ba", "abc", "bca"]), [["ab", "ba"], ["abc", "bca"]], "mixed")
