var LRUCache = function(capacity) {
    let map = {};
    let head = new Node();
    let tail = new Node();
    this.cap = capacity;
    this.size = 0;
    var connect = function(a,b,c = null) {
        a.next = b;
        b.prev = a;
        if(c) {
            c.prev = b;
            b.next = c;
        }
    }
    connect(head, tail);
    this.moveToHead = function(node) {
        if(node.next) {
            connect(node.prev, node.next);
        }
        connect(head, node, head.next);
    }
    this.removeTail = function() {
        let node = tail.prev;
        connect(node.prev, tail);
        delete map[node.key];
    }
    this.map = map;
};
var Node = function(key = 0, val = 0) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let map= this.map;
    if(key in map) {
        let res = map[key].val;
        this.moveToHead(map[key]);
        return res;
    } else {
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let map = this.map;
    if(key in map) {
        this.moveToHead(map[key]);
        map[key].val = value; 
    } else {
        let node = new Node(key, value);
        this.moveToHead(node);
        map[key] = node;
        if(this.size === this.cap) {
            this.removeTail();
        } else {
            this.size++;
        }
    }
};
