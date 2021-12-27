/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
    var boxesLoaded = 0, unitsLoaded = 0;
    boxTypes.sort((a, b) => b[1] - a[1]);
    
    for (var i = 0; i < boxTypes.length; i++) {
        while (boxesLoaded < truckSize && boxTypes[i][0] > 0) {
            boxTypes[i][0]--;
            boxesLoaded++;
            unitsLoaded += boxTypes[i][1];
        }
        if (boxesLoaded == truckSize) break;
    }
    return unitsLoaded;
};

// [[0,3],[0,2],[0,1]], truckSize = 4
// unitsLoaded = 8
// boxesLoaded = 4