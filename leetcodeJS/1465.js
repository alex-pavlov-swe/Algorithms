/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
 var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    var maxX = 0, maxY = 0;
    horizontalCuts.sort((a, b) => a - b);
    verticalCuts.sort((a, b) => a - b);

    for (var i = 1; i < horizontalCuts[i]; i++) {
        maxY = Math.max(maxY, horizontalCuts[i] - horizontalCuts[i - 1]);
    }
    maxY = Math.max(maxY, horizontalCuts[0]);
    maxY = Math.max(maxY, h - horizontalCuts[horizontalCuts.length - 1]);

    for (var i = 1; i < verticalCuts[i]; i++) {
        maxX = Math.max(maxX, verticalCuts[i] - verticalCuts[i - 1]);
    }
    maxX = Math.max(maxX, verticalCuts[0]);
    maxX = Math.max(maxX, w - verticalCuts[verticalCuts.length - 1]);

    return maxY * maxX % (Math.pow(10, 9) + 7);
};