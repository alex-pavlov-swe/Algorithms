/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
 class Heap {
    constructor(k) {
        this.length = k;
        this.data = [];
    }
    insert(item) {
        this.data.push(item);
        this.data.sort((a, b) => b[0] - a[0]);
        if (this.data.length > this.length) this.data.shift();
    }
    pop() {
        return this.data.pop();
    }
    print() {
        console.log(this.data);
    }
}

var kClosest = function(points, k) {
    var distances = [], minHeap = new Heap(k), result = [];

    for (var i = 0; i < points.length; i++) {
        var distance = points[i][0] * points[i][0] + points[i][1] * points[i][1];
        distances.push(distance);
    }

    for (var i = 0; i < distances.length; i++) {
        minHeap.insert([distances[i], points[i]]);
    }
    minHeap.print();

    for (var i = 0; i < k; i++) {
        result.push(minHeap.pop()[1]);
    }
    return result;
};

console.log(kClosest([[1,3],[-2,2]], k = 1));

// n points

// 1) calculate distances

// time - n + nlogn = O(nlogn)
// space - n + n = O(n)

// 2) find k closest

// time - n + n + klogk = O(max(n, klogk))
// space - n + k = O(max(n,k))