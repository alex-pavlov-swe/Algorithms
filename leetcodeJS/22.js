/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    const result = [];

    var helper = function(left, right, str) {
        if (left + right === 2 * n) {
            result.push(str);
            return;
        }

        if (left < n) {
            helper(left + 1, right, str + '(');
        }
        if (right < left) {
            helper(left, right + 1, str + ')');
        }
    }
    helper(0, 0, '');
    return result;
};
