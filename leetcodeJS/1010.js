/**
 * @param {number[]} time
 * @return {number}
 */
 var numPairsDivisibleBy60 = function(time) {
    var map = {},
        res = 0;

    for (var i = 0; i < time.length; i++) {
        const curr = time[i] % 60;
        const key = curr == 0 ? 60 : curr;
        if ((60 - curr) in map) {
            res += map[60 - curr];
        }
        if (key in map) {
            map[key] += 1;
        } else {
            map[key] = 1;
        }
    }
    return res;
};

