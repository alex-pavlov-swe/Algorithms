var prisonAfterNDays = function(cells, n) {
    var prev = cells.concat(),
        length = cells.length;

    for (var i = 1; i <= n; i++) {
        var next = [prev[0]];
        for (var j = 1; j <= 6; j++ ) {
            if (prev[j - 1] == prev[j + 1]) {
                next.push(1);
            } else {
                next.push(0);
            }
        }
        next.push[prev[7] === prev[6] ? prev[7] : (prev[7] + 1) % 2];
        prev = next.concat();
        console.log(prev.join(""));
    }
    return prev;
};

prisonAfterNDays([0,1,0,1,1,0,0,1], 7);


Day 0: [0, 1, 0, 1, 1, 0, 0, 1]
Day 1: [0, 1, 1, 0, 0, 0, 0, 0]
Day 2: [0, 0, 0, 0, 1, 1, 1, 0]
Day 3: [0, 1, 1, 0, 0, 1, 0, 0]
Day 4: [0, 0, 0, 0, 0, 1, 0, 0]
Day 5: [0, 1, 1, 1, 0, 1, 0, 0]
Day 6: [0, 0, 1, 0, 1, 1, 0, 0]
Day 7: [0, 0, 1, 1, 0, 0, 0, 0]

0110000
0000110
0110000
0000110
0110000
0000110
0110000