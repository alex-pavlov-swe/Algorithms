// 1.Check if repetition
//  if yes - move tail
// 2. Calculate longest
// 3. Update map with current character

var lengthOfLongestSubstring = function(s) {
    var map = {};
    var tail = -1;
    var longest = 0;

    for (var head = 0; head  < s.length; head++) {
        if (s[head] in map) {
            tail = Math.max(tail, map[s[head]]);
        }

        longest = Math.max(longest, head - tail);
        map[s[head]] = head;
    }
    return longest;
};

// console.log(lengthOfLongestSubstring("efabcadwd"));
// console.log(lengthOfLongestSubstring(" "));
// console.log(lengthOfLongestSubstring("au"));
// console.log(lengthOfLongestSubstring("aab"));
console.log(lengthOfLongestSubstring("abba"));