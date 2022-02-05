var trieNode = function(char = '') {
    this.char = char;
    this.children = {};
    this.endOfWord = false;
};

var Trie = function() {
    this.root = new trieNode();
};

Trie.prototype.getIndex = function(char) {
    return char.charCodeAt() - 'a'.charCodeAt();
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    var head = this.root;
    for (var i = 0; i < word.length; i++) {
        let index = this.getIndex(word[i]);
        if (!head.children[index]) {
            head.children[index] = new trieNode(word[i]);
        }
        head = head.children[index];
    }
    head.endOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    var head = this.root,
        isFound = true;
    for (var i = 0; i < word.length; i++) {
        let index = this.getIndex(word[i]);
        if (head && head.children[index]) {
            head = head.children[index];
        } else {
            isFound = false;
            break;
        }
    }
    if (!head || !head.endOfWord) return false;
    return isFound;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    var head = this.root,
    isFound = true;
    for (var i = 0; i < prefix.length; i++) {
        let index = this.getIndex(prefix[i]);
        if (head && head.children[index]) {
            head = head.children[index];
        } else {
            isFound = false;
            break;
        }
    }
    return isFound;
};

Trie.prototype.printDFS = function() {
    console.log('DFS');
    var helper = function(head) {
        if (!head) return;
        if (head.char) console.log(head.char);
        if (head.children) {
            for (var i = 0; i < Object.values(head.children)?.length; i++ ) {
                helper(Object.values(head.children)[i]);
            }
        }
    }
    helper(this.root);
}

Trie.prototype.printBFS = function() {
    var queue = [this.root],
        result = [];

    while (queue.length) {
        var length = queue.length,
            level = [];
        for (var i = 0; i < length; i++) {
            var node = queue.shift();
            level.push(node.char);
            for (var j = 0; j < Object.values(node.children).length; j++) {
                queue.push(Object.values(node.children)[j]);
            }
        }
        result.push(level);
    }
    console.log('BFS', result);
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

var trie = new Trie();
trie.insert('apple');
// trie.insert('world');
// trie.insert('worst');
// trie.printDFS();
trie.printBFS();
console.log(trie.search('apple'));
console.log(trie.startsWith('appe'));