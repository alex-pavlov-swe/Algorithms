
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
        minTime = -1,
        left = 0, right = arr.length - 1;
    
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        let middleValue = arr[middle][0];
        if (middleValue <= timestamp) {
            left = middle + 1;
            if (middleValue > minTime) {
                minTime = middleValue;
            }
        } else {
            right = middle - 1;
        }
    }
    if (minTime !== -1) {
        return this.map[key][minTime];
    }
    return "";
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */