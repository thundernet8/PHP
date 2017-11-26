/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var result = [];
    var carry = 0;
    
    do {
        var node1 = l1 ? l1.val : 0;
        var node2 = l2 ? l2.val : 0;
        var sum = node1 + node2 + carry;
        if (sum >= 10){
            carry = 1;
        }else{
            carry = 0;
        }
        result.push(sum%10);
        
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }while(l1 || l2);

    if (carry){
        result.push(1);
    }

    return result;
};