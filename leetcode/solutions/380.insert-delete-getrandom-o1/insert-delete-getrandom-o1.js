var RandomizedSet = /** @class */ (function () {
    /**
     * Initialize your data structure here.
     */
    function RandomizedSet() {
        this.hashMap = new Map();
        this.dataList = [];
    }
    /**
     * Inserts a value to the set. Returns true if the set did not already contain the specified element.
     * @param {number} val
     * @return {boolean}
     */
    RandomizedSet.prototype.insert = function (val) {
        var index = this.hashMap.get(val);
        if (index === undefined) {
            this.hashMap.set(val, this.dataList.length);
            this.dataList.push(val);
            return true;
        }
        return false;
    };
    /**
     * Removes a value from the set. Returns true if the set contained the specified element.
     * @param {number} val
     * @return {boolean}
     */
    RandomizedSet.prototype.remove = function (val) {
        var index = this.hashMap.get(val);
        if (index !== undefined) {
            var tail = this.dataList.pop();
            if (index < this.dataList.length) {
                this.dataList[index] = tail;
                this.hashMap.set(tail, index);
            }
            this.hashMap.delete(val);
            return true;
        }
        return false;
    };
    /**
     * Get a random element from the set.
     * @return {number}
     */
    RandomizedSet.prototype.getRandom = function () {
        var length = this.dataList.length;
        if (length > 0) {
            var index = Math.floor(Math.random() * length);
            if (index === length) {
                index = 0;
            }
            return this.dataList[index];
        }
        return null;
    };
    return RandomizedSet;
}());
/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
