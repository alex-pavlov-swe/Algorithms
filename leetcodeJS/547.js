/**
 * @param {number[][]} isConnected
 * @return {number}
 */
 var findCircleNum = function(isConnected) {
    var numCities = isConnected.length,
        visited = Array(numCities).fill(0),
        provinces = 0;
            
    var dfs = function(i) {
        for (var j = 0; j < numCities; j++) {
            if (isConnected[i][j] === 1 && visited[j] === 0) {
                visited[j] = 1;
                dfs(j);
            }
        }
    }
    
    for (var i = 0; i < numCities; i++) {
        if (visited[i] === 0) {
            visited[i] = 0;
            dfs(i);
            provinces += 1;
        }
    }
    return provinces;
};