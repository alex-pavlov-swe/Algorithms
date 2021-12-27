/**
 * @param {number[][]} intervals
 * @return {number}
 */
// optimal without a heap
var minMeetingRooms = function(intervals) {
    var starts = intervals
        .concat()
        .map(interval => interval[0])
        .sort((a, b) => a - b);

    var ends = intervals
        .map(interval => interval[1])
        .sort((a, b) => a - b);

    var room = 0;
    var endIndex = 0;

    for (let i = 0; i < intervals.length; i++) {
        if (starts[i] < ends[endIndex]) {
            room += 1;
        } else {
            endIndex += 1;
        }
    }
    return room;
};

// not a optimal sollution without using a heap
var minMeetingRooms = function(intervals) {
    var rooms = [];
    intervals.sort((a, b) => a[0] - b[0]);
    rooms.push([intervals[0]]);

    for (var i = 1; i < intervals.length; i++) {
        var roomFound = false
        for (var j = 0; j < rooms.length; j++) {
            if (rooms[j][rooms[j].length - 1][1] <= intervals[i][0]) {
                rooms[j].push(intervals[i]);
                roomFound = true;
                break;
            }
        }
        if (!roomFound) {
            rooms.push([intervals[i]]);
        }
    }
    return rooms.length;
};