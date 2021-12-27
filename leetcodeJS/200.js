/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var numIslands = 0;
    var xLength = grid.length;
    var yLength = grid[0].length;

    var dfs = function(x, y) {
        grid[x][y] = 0;
        if (x + 1 < xLength && grid[x + 1][y] == 1) dfs(x + 1, y);
        if (y + 1 < yLength && grid[x][y + 1] == 1) dfs(x, y + 1);
        if (x - 1 >= 0 && grid[x - 1][y] == 1) dfs(x - 1, y);
        if (y - 1 >= 0 && grid[x][y - 1] == 1) dfs(x, y - 1);
    }

    for (var i = 0; i < xLength; i++) {
        for (var j = 0; j < yLength; j++) {
            if (grid[i][j] == 1) {
                numIslands += 1;
                dfs(i, j);
            }
        }
    }
    return numIslands;
    
};