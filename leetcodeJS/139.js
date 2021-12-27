/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
    var wordMap = {};

    for (var i = 0; i < wordDict.length; i++) {
        wordMap[wordDict[i]] = -1;
    }

    var left = 0, right = 0, wordsEndings = [], splitFound = false;

    while(!splitFound && right < s.length) {
        var substring = s.slice(left, right + 1);
        if (substring in wordMap) {
            if (right == s.lenghth - 1) splitFound = true;
            wordsEndings.push([left, right]);
            left = right + 1;
        } else {
            if (right == s.length - 1) {
                if (wordsEndings.length > 0) {
                    moveBack = wordsEndings.shift();
                    left = moveBack[0];
                    right = moveBack[1];
                } else break;
            }
        }
        right += 1;
        console.log(left,right, wordsEndings);
    }
    return splitFound;
};
var str = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab";
// var str = "aaaaaaaaaa";
var wordDict = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"];

console.log(wordBreak(str, wordDict));

// 10-00

// howareyourdogs

// [how, are your, dogs]

// wordMap = [how: -1, are: -1, your: -1, dogs: -1]
// wordsEndings = [[0,2]]

// O(n*k) time
// O(2k) space = O(k)
