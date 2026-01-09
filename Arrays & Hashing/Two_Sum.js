/*
Algorithm:
1. Create a new hash map
2. Iterate throught the input array:
    a. Init a variable called complement to store the difference between the target and the current number.
    b. If the complement is present in the hash map:
        i. Return the current index & the index of the complement.
    c. Else:
        i. Add the current number to the hash map.
3. Return an empty array
*/

function twoSum(nums, target) {

    let numMap = new Map()

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        let complement = target - num

        if (numMap.has(complement)) {
            return [i, numMap.get(complement)]
        } else {
            numMap.set(num, i)
        }
    }

    return []
}