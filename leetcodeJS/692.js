class Heap {
    constructor(k) {
        this.length = k;
        this.data = [];
    }
    insert(item) {
        this.data.push(item);
        this.data.sort((a, b) => {
            if(a[1] === b[1]) {
                if(a[0] === b[0]) return 0;
                if(a[0] < b[0]) return 1;
                return -1;
            }

            return a[1] - b[1];
        });
        if (this.data.length > this.length) {
            this.data.shift();
        }
    }
    peek() {
        return this.data.length > 0 ? this.data[this.data.length - 1] : null;
    }
    pop() {
        return this.data.pop();
    }
    print() {
        console.log(this.data);
    }
}

var topKFrequent = function(words, k) {
    var frequencyMap = {};

    for (var i = 0; i < words.length; i++) {
        if (words[i] in frequencyMap) {
            frequencyMap[words[i]] += 1;
        } else {
            frequencyMap[words[i]] = 1;
        }
    }

    var maxHeap = new Heap(k);
    Object.entries(frequencyMap).forEach(entry => {
        maxHeap.insert(entry);
    });

    var result = [];

    for (var i = 0; i < k; i++) {
        result.push(maxHeap.pop()[0]);
    }

    return result;
};

var str = ["i", "love", "leetcode", "i", "love", "coding"], k = 2;
console.log(topKFrequent(str, k));

// maxHeap = new Heap(3);
// [10, -10, 2, 3, 0]
// maxHeap.insert(10);
// maxHeap.insert(-10);
// maxHeap.insert(2);
// maxHeap.insert(3);
// maxHeap.insert(0);
// maxHeap.insert(20);
// maxHeap.print();