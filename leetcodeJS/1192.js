const criticalConnections = (n, connections) => {
    const graph = createGraph(n, connections);
    const visited = new Set();
    let rank = 0;
    const output = [];
    function dfs(node, parent) {
        visited.add(node.val);
        node.rank = rank;
        node.minObs = rank;
        rank++;
        node.children.forEach((child) => {
            if (child === parent) { return; }
            if (visited.has(child)) {
                node.minObs = Math.min(node.minObs, graph[child].minObs);
                return;
            } else {
                node.minObs = Math.min(node.minObs, dfs(graph[child], node.val));
            }
            if (node.rank < graph[child].minObs) output.push([node.val, child]);
        });
        return node.minObs;
    };
    dfs(graph[connections[0][0]], connections[0][0]);
    return output;
};

function createGraph(n, connections) {
    const output = {};
    for (let i = 0; i < n; i++) {
        output[i] = { val: i, children: [], rank: -Infinity, minObs: Infinity };
    }
    connections.forEach((connection) => {
        output[connection[0]].children.push(connection[1]);
        output[connection[1]].children.push(connection[0]);
    });
    return output;
}