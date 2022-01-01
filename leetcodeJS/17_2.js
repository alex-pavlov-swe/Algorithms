var letterCombinations = function(digits) {
    var keyMap =  {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "0"],
        "7": ["p", "q", "r"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    },
    combinations = [...keyMap[digits[0]]];
    console.log(combinations);

    for (var i = 1; i < digits.length; i++) {
        var options = keyMap[digits[i]];
        var combinationsCopy = [...combinations];

        combinations = [];
        for (var j = 0; j < options.length; j++) {
            for (var k = 0; k < combinationsCopy.length; k++) {
                // console.log(combinationsCopy, options[j]);
                combinations.push(combinationsCopy[k] + options[j]);
            }
        }
    }

    return combinations;
};


console.log(letterCombinations('23'));