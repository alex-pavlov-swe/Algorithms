var minDeletions = function(s) {
    var map = {}, alreadySeen = {}, deletions = 0;

    for (var i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 1;
        } else {
            map[s[i]] += 1;
        }
    }
    map = Object.entries(map).sort((a, b) => b[1] - a[1]);
    console.log(map);

    for (var i = 0; i < map.length; i++) {
        if (!alreadySeen[map[i][1]]) {
            alreadySeen[map[i][1]] = 1;
        } else {
            while (alreadySeen[map[i][1]]) {
                map[i][1] -= 1;
                deletions += 1;
            }
            if (map[i][1] > 0) alreadySeen[map[i][1]] = 1;
        }
        console.log(alreadySeen);
    }
    return deletions;
};

console.log(minDeletions("bbcebab"));

4
0
0
0

// aaaa bbb ccc dd
// 4     3   3  2

// a, 4
// b, 3
// c, 2
// d, 2
// f, 2