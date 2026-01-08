/*
Algorithm:
1. If the length of string s is not equal to the length of string t, return false
2. Init a new hash map.
3. Iterate through the string s:
    a. Increment the char's count by 1 in the hash map.
4. Iterate through the string t:
    a. Decrement the char's count by 1 in the hash map.
    b. If the count becomes negative, return false
5. Return true
*/

function isAnagram(s, t) {
    if (s.length != t.length) return false
    let freqMap = new Map()

    for (let char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1)
    }

    for (let char of t) {
        if (!freqMap.has(char)) return false
        freqMap.set(char, freqMap.get(char) - 1)
        if (freqMap.get(char) < 0) return false
    }
    return true
}