/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var map = {};
    for (var i = 0; i < s.length; i++) {
        if (!(s[i] in map)) {
            map[s[i]] = 1;
        } else {
            map[s[i]] += 1;
        }
    }
    for (var i = 0; i < t.length; i++) {
        if (!(t[i] in map)) {
            return false;
        } else {
            map[t[i]] -= 1;
        }
    }
    for (key in map) {
        if (map[key] !== 0) {
            return false;
        }
    }
    return true;
};