/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var len = s.length;
    if (len % 2 === 1) {
        return false;
    }
    var isOpenTags = {
        "(": true,
        "[": true,
        "{": true,
        ")": false,
        "]": false,
        "}": false
    };
    var matchTags = {
        ")": "(",
        "]": "[",
        "}": "{"
    };
    var stack = [];
    for (var i = 0; i < len; i++) {
        if (isOpenTags[s[i]]) {
            stack.push(s[i]);
        }
        else {
            if (stack.pop() !== matchTags[s[i]]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
