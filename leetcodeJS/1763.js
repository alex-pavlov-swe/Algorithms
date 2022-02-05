/**
 * @param {string} s
 * @return {string}
 */
 var longestNiceSubstring = function(s) {
    console.log(s);
    if (s.length < 2) return '';
    var map = {};
    for (var i = 0; i < s.length; i++) {
        map[s[i]] = 1;
    }
    for (var i = 0; i < s.length; i++) {
        if (!map[s[i].toLowerCase()] || !map[s[i].toUpperCase()]) {
            var s1 = longestNiceSubstring(s.slice(0, i));
            var s2 = longestNiceSubstring(s.slice(i + 1, s.length));
            return s2.length > s1.length ? s2 : s1;
        }
    }
    return s;
};

console.log(longestNiceSubstring("YazaAay"));