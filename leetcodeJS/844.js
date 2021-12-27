/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    var sIndex = nextValidChar(S, S.length - 1);
    var tIndex = nextValidChar(T, T.length - 1);

    while (sIndex >= 0 && tIndex >= 0) {
        if (S[sIndex] !== T[tIndex]) return false;
        sIndex = nextValidChar(S, sIndex - 1);
        tIndex = nextValidChar(T, tIndex - 1);
    }

    if (sIndex !== tIndex) return false;
    return true;
};

var nextValidChar = function(str, index) {
    var backspaces = 0;
    while (index >= 0) {
        if (str[index] == "#") {
            backspaces += 1;
        } else if (backspaces > 0) {
            backspaces -= 1;
        } else {
            break;
        }
        index -= 1;
    }
    console.log(index);
    return index;
}

// console.log(backspaceCompare("bxj##tw", "bxo#j##tw"));
// console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("ba##", "dc##"));
// console.log(nextValidChar("ab##", 3));