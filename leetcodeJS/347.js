/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 class Heap {
    constructor(k) {
        this.length = k;
        this.data = [];
    }
    insert(item) {
        this.data.push(item);
        this.data.sort((a,b) => a[1] - b[1]);
        if (this.data.length > this.length) this.data.shift();
    }  
    pop() {
        return this.data.pop();
    }
}

var topKFrequent = function(nums, k) {
    var maxHeap = new Heap(k),
        frequencyMap = {},
        result = [];
    
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] in frequencyMap) {
            frequencyMap[nums[i]] += 1;
        } else {
            frequencyMap[nums[i]] = 1;
        }
    }
    
    Object.entries(frequencyMap).forEach(entry => {
        maxHeap.insert(entry);
    });
    
    for (var i = 0; i < k; i++) {
        result.push(maxHeap.pop()[0]);
    }
    
    return result;
};

// time  - nlog + n + nlog => O(nlogn)
// space - n + n + n => O(n)

// Heap

// time - n + n + n + klogk = O(max(n, klogk))
// space - n + k - O(max(n,k))