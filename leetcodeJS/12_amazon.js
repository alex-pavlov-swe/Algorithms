var intToRoman = function(num) {
    var map = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    var result = '';
    var curr;

    Object.keys(map).forEach(key => {
        curr = parseInt(num / map[key]);
        if (curr >= 1) {
            for (var i = 0; i < curr; i++) {
                result += key;
            }
            num -= curr * map[key];
        }
    });
    return result;
};