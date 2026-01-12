function topKFrequent(nums, k) {
    // Step 1: Build frequency map
    // This map will store each unique number as key and its count as value
    const freqMap = new Map();
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    
    // Step 2: Create a min-heap structure
    // JavaScript doesn't have a built-in heap, so we use an array
    // Each element is [number, frequency]
    const heap = [];
    
    // Step 3: Process each number-frequency pair
    for (const [num, freq] of freqMap) {
        // Add the current element to our heap
        heap.push([num, freq]);
        
        // Sort to maintain min-heap property (smallest frequency first)
        // a[1] and b[1] access the frequency part of each pair
        heap.sort((a, b) => a[1] - b[1]);
        
        // If we have more than k elements, remove the one with smallest frequency
        if (heap.length > k) {
            heap.shift(); // Removes the first element (which has smallest frequency)
        }
    }
    
    // Step 4: Extract just the numbers from our heap
    // We don't need the frequencies anymore, just the numbers themselves
    return heap.map(pair => pair[0]);
}

module.exports = topKFrequent;