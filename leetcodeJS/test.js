var maxHeap = function(k) {
    this.length = k;
    this.items = [];

    this.addItem = function(item) {
        this.items.push(item);
    }
}

var heap = new maxHeap(3);
heap.addItem(3);

console.log(heap);