class Solution {
    topKFrequent(nums, k) {
        // Step 1: Build frequency map - same as before
        const freqMap = new Map();
        for (let num of nums) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }
        
        // Step 2: Create buckets where index = frequency
        // bucket[i] will contain all numbers that appear i times
        // We need nums.length + 1 buckets because a number could appear nums.length times
        const bucket = Array(nums.length + 1).fill(null).map(() => []);
        
        // Step 3: Place each number in its frequency bucket
        for (let [num, freq] of freqMap) {
            bucket[freq].push(num);
        }
        
        // Step 4: Collect the top k frequent elements
        // Start from the highest frequency and work backwards
        const result = [];
        for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
            if (bucket[i].length > 0) {
                // Add all numbers from this frequency bucket
                result.push(...bucket[i]);
            }
        }
        
        // Return only k elements (in case the last bucket had more than needed)
        return result.slice(0, k);
    }
}