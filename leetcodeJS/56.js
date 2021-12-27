/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length < 2) return intervals;
    var result = [];

    intervals.sort((a, b) => a[0] - b[0]);

    result.push(intervals[0]);

    for (var i = 1; i < intervals.length; i++) {
        if (result[result.length - 1][1] >= intervals[i][0]) {
            result[result.length - 1][1] = Math.max(intervals[i][1], result[result.length - 1][1]);
        } else {
            result.push(intervals[i]);
        }
    }
    return result;
};