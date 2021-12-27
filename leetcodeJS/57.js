/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if (newInterval.length === 0) return intervals;
    if (intervals.length === 0) return [newInterval];

    var merged = [];
    
    if (newInterval[0] > intervals[intervals.length - 1][0]) {
        intervals.push(newInterval);
    } else {
        for (var i = 0; i < intervals.length; i++) {
            if (newInterval[0] <= intervals[i][0]) {
                intervals.splice(i, 0, newInterval);
                break;
            }
        }   
    }
    
    merged.push(intervals[0]);
    
    for (var i = 1; i < intervals.length; i++) {
        if (merged[merged.length - 1][1] >= intervals[i][0]) {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], intervals[i][1]);
        } else {
            merged.push(intervals[i]);
        }
    }
    
    return merged;
};
