/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, newColor) {
    var m = image.length,
        n = image[0].length,
        startColor = image[sr][sc];

    var bfs = function(image, sr, sc, newColor) {
        if (image[sr][sc] === startColor) {
            image[sr][sc] = newColor;
            if (sr - 1 >= 0)  {
                bfs(image, sr - 1, sc, newColor);
            }
            if (sr + 1 < m) {
                bfs(image, sr + 1, sc, newColor);
            }
            if (sc - 1 >= 0) {
                bfs(image, sr, sc - 1, newColor);
            }
            if (sc + 1 < n) {
                bfs(image, sr, sc + 1, newColor);
            }
        }

    }
    if (startColor !== newColor) {
        bfs(image, sr, sc, newColor);
    }
    return image;
};

console.log(floodFill([[0,0,0],[0,1,1]],1,1,1));