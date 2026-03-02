/*
Algorithm:

1. Create a new hash map to store the annagram groups
2. Iterate through each word of the input array of strings:
    a. Take the current word, split it in individual letters
    b. Sort the letters
    c. Join them back to form the sorted signature.
    d. If the signature is already in the hash map, grab the existing array and add the current word to it.
    e. If the signature is not in the hash map, create a new list with the current word.
3. Extract only the value arrays from the map
3. Return these arrays.
*/

function groupAnagrams(strs) {
    let groupMap = new Map()

    for (let str of strs) {
        let sortedStr = str.split('').sort().join('')
        if (groupMap.has(sortedStr)) {
            groupMap.get(sortedStr).push(str)
        } else {
            groupMap.set(sortedStr, [str])
        }
    }
    // Convert the map values to an array
    // We only need the group values, not he keys
    return Array.from(groupMap.values())
}

module.exports = groupAnagrams