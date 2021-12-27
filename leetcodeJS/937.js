var reorderLogFiles = function(logs) {
    var digitLogs = logs.filter(item => item.split(" ")[1][0] >= 0 && item.split(" ")[1][0] <= 9);
    var letterLogs = logs.filter(item => item.split(" ")[1][0] >= 'a' && item.split(" ")[1][0] <= 'z');
    letterLogs.sort((a,b) => {
        const aBody = a.split(" ").slice(1, a.split(" ").length).join(" ");
        const bBody = b.split(" ").slice(1, b.split(" ").length).join(" ");
        var compare = aBody.localeCompare(bBody);
        if (compare != 0) return compare;
        return a.localeCompare(b);
    });
    logs = letterLogs.concat(digitLogs);

    return logs;
};

// var input = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"];
// var input = ["1 n u", "r 527", "j 893", "6 14", "6 82"];
// var input = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo","a2 act car"];
var input = ["j mo", "5 m w", "g 07", "o 2 0", "t q h"]
console.log(reorderLogFiles(input));