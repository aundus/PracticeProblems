# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

#solution to addTwoNumbers question from leetcode, runs in O(n) time. 
class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        s1 = '';
        s2 = '';
        while(l1 != None):
            s1 += str(l1.val) 
            l1 = l1.next
        while(l2 != None):
            s2 += str(l2.val)
            l2 = l2.next
        s1 = s1[::-1]
        s2 = s2[::-1]
        n1 = int(s1)
        n2 = int(s2)
        ans = str(n1+n2)
        l1 = None
        for c in ans:
            node = ListNode(int(c))
            node.next = l1
            l1 = node
        return l1
            