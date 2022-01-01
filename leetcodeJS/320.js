var generateAbbreviations = function(word) {
    var output = [];

    var dfs = function(path, index, count) {
        if(index === word.length) {
            if(count > 0) {
                path += count.toString();
            }
            output.push(path);
            return;
        }
        //abbreviate the letter
        dfs(path, index + 1, count + 1);

        //not abbreviate the letter
        if(count > 0) {
            path+=count.toString();
            count = 0;
        }
        path += word[index];
        dfs(path, index + 1, count);
    }

    dfs('', 0, 0);
    return output;
};

