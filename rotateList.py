# Rotate List problem from Leetcode https://leetcode.com/problems/rotate-list/
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def rotateRight(self, head: ListNode, k: int) -> ListNode:
        def rightRotateOnce(head: ListNode):
            if(head == None):
                return None
            if(head.next == None):
                return head
            current = head
            while(current.next.next != None):
                current = current.next
            current.next.next = head
            head = current.next
            current.next = None
            return head
        def getLength(head):
            if(head == None):
                return 0
            if(head.next == None):
                return 1
            return 1 + getLength(head.next)
        listLen = getLength(head)
        if listLen == 0: return None
        while(k % listLen > 0):
            head = rightRotateOnce(head)
            k -= 1
        return head