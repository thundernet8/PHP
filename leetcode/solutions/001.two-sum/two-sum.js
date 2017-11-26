/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var result = [0, 0];
    var map = {};
    for (var i=0; i<nums.length; i++) {
        if(map.hasOwnProperty(nums[i])) {
            result[0] = map[nums[i]];
            result[1] = i;
            return result;
        }else{
            map[target-nums[i]] = i;
        }
    }
    return result;
};