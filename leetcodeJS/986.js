/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    var result = [],
        i = 0,
        j = 0;
    
    while (i < firstList.length && j < secondList.length) {
        if ((firstList[i][0] <= secondList[j][0] && secondList[j][0] <= firstList[i][1]) ||
        (secondList[j][0] <= firstList[i][1] && firstList[i][0] <= secondList[j][1])) {
            result.push([Math.max(firstList[i][0], secondList[j][0]), Math.min(firstList[i][1], secondList[j][1])]);   
        }
        if (firstList[i][1] < secondList[j][1]) {
            i += 1;
        } else {
            j += 1;
        }
    }
    return result;
};