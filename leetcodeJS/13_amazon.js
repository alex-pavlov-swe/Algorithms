var romanToInt = function(s) {
    var map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    var result = map[s[s.length - 1]];

    for (var i = s.length - 2; i >= 0; i--) {
        if (map[s[i]] < map[s[i + 1]]) {
            result -= map[s[i]];
        } else {
            result += map[s[i]];
        }
    }
    return result;
};

// MCMXCIV
// I-1
// V-5     IV-4
// X-10    IX-9
// L-50    XL-40
// C-100   XC-90
// D-500   CD-400
// M-1000  CM-900