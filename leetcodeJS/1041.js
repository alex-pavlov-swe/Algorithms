/**
 * @param {string} instructions
 * @return {boolean}
 */
 var isRobotBounded = function(instructions) {
    var x = 0, y = 0, dir = 0;

    for (var i = 0; i < instructions.length; i++) {
        if (instructions[i] == "G") {
            if (dir === 0) {
                y += 1;
            } else if (dir === 1) {
                x -= 1;
            } else if (dir === 2) {
                y -= 1;
            } else if (dir === 3) {
                x += 1;
            }
        } else if (instructions[i] == "L") {
            dir = (dir + 1) % 4;
        } else if (instructions[i] == "R") {
            dir = dir === 0 ? 3 : dir -1;
        }
        console.log(instructions[i], x, y, dir);
    }
    if (x === 0 && y === 0) return true;
    if (dir !== 0) return true;
    return false;
};

console.log(isRobotBounded("RLLGGLRGLGLLLGRLRLRLRRRRLRLGRLLLGGL"));

// G: (0,0) -> (0,1) -> (0,2) -> (0,3) ...
// L: (0,0) -> (1,0) -> (2,0) -> (3,0) -> (0,0)


//     . . . . .
//   ^ . . . . .
//   | . . . . .
//   y . . . . .
//     -> x

// 0 - North
// 1 - East
// 2 - South
// 3 - West

