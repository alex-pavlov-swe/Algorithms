//
 var orangesRotting = function(grid) {
    var queue = [], fresh = 0,
        n = grid.length, m = grid[0].length,
        minutes = -1;

    for (var x = 0; x < n; x++) {
        for (var y = 0; y < m; y++) {
            if (grid[x][y] == 2) queue.push([x,y]);
            if (grid[x][y] == 1) fresh += 1;
        }
    }
    console.log(grid, queue, minutes);
    while (queue.length) {
        var queueLength = queue.length;
        for (var i = 0; i < queueLength; i++) {
            var [x,y] = queue.shift();
            if (x + 1 < n && grid[x + 1][y] == 1) {
                queue.push([x + 1, y]);
                grid[x + 1][y] = 2;
                fresh -= 1;
            }
            console.log(x,y);
            if (x - 1 >= 0 && grid[x - 1][y] == 1) {
                queue.push([x - 1, y]);
                grid[x - 1][y] = 2;
                fresh -= 1;
            }
            if (y + 1 < m && grid[x][y + 1] == 1) {
                queue.push([x, y + 1]);
                grid[x][y + 1] = 2;
                fresh -= 1;
            }
            if (y - 1 >= 0 && grid[x][y - 1] == 1) {
                queue.push([x, y - 1]);
                grid[x][y - 1] = 2;
                fresh -= 1;
            }
        }
        minutes += 1;
        console.log(grid, queue, minutes);
    }
    if (fresh > 0) return -1;
    if (minutes == -1) return 0;
    return minutes;
};
// var matrix = [2,1,1],[1,1,0],[0,1,1]];
// var matrix = [[0]];
var matrix = [[1,2]];

console.log(orangesRotting(matrix));

// 2 1 1
// 1 1 0
// 0 1 1

// 2 2 2
// 2 2 0
// 0 2 1

// 2 2 2
// 2 2 0
// 0 2 1