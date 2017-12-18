/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    var degree = 1;
    var maxDegreeNums = [];
    var firstAppearances = {};
    var lastAppearances = {};
    var counts = {};
    var len = nums.length;
    for (var i = 0; i < len; i++) {
        if (firstAppearances[nums[i]] === undefined) {
            firstAppearances[nums[i]] = i;
        }
        else {
            lastAppearances[nums[i]] = i;
        }
        var appreances = (counts[nums[i]] || 0) + 1;
        counts[nums[i]] = appreances;
        if (appreances > degree) {
            maxDegreeNums = [nums[i]];
            degree = appreances;
        }
        else if (appreances === degree) {
            maxDegreeNums.push(nums[i]);
        }
    }
    var distances = maxDegreeNums
        .map(function (num) {
        return lastAppearances[num] !== undefined
            ? lastAppearances[num] - firstAppearances[num] + 1
            : 1;
    })
        .sort(function (a, b) { return a - b; });
    return distances[0];
};
