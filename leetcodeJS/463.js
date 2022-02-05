var islandPerimeter = function(grid) {
    var m = grid.length,
        n = grid[0].length,
        perimeter = 0;
    var bfs = function(x, y) {
        console.log(x,y);
        if (grid[x,y] === 0) return;
        if (x - 1 >= 0)  {
            if (grid[x - 1][y] === 1) {
                bfs(x - 1, y);
            } else {
                perimeter += 1;
            }
        } else { perimeter += 1; }
        if (x + 1 < m)  {
            if (grid[x + 1][y] === 1) {
                bfs(x + 1, y);
            } else {
                perimeter += 1;
            }
        } else { perimeter += 1; }
        if (y - 1 >= 0)  {
            if (grid[x][y - 1] === 1) {
                bfs(x, y - 1);
            } else {
                perimeter += 1;
            }
        } else { perimeter += 1; }
        if (y + 1 < n)  {
            if (grid[x][y + 1] === 1) {
                bfs(x, y + 1);
            } else {
                perimeter += 1;
            }
        } else { perimeter += 1; }
    }

    var i = 0, j = 0;
    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            if (grid[i][j] == 1) break;
        }
        if (grid[i][j] === 1) break;
    }
    bfs(i, j);
    return perimeter;
};

console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]));