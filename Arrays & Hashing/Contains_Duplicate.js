/*
Psuedo-code

1. Init a new hash map
2. Iterate through the array:
    a. If the element is already in the map:
        1. return true
    b. else:
        2. add the number to the map
3. return false
*/

class Solution {
    hasDuplicate(nums) {
        let numSet = new Map()

        for (let num of nums) {
            if (numSet.has(num)) return true
            else numSet.set(num, 1)
        }
        return false
    }
}
