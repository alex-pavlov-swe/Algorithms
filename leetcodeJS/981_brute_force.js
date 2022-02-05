
var TimeMap = function() {
    this.map = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.map[key]) this.map[key] = {};
    this.map[key][timestamp] = value;
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    let arr = Object.entries(this.map[key]),
        minTime = [-1, -1];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] <= timestamp) {
            if (arr[i][0] > minTime[0]) {
                minTime[0] = arr[i][0];
                minTime[1] = i;
            }
        }
    }
    if (minTime[0] !== -1) {
        return this.map[key][minTime[0]];
    }
    return "";
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */