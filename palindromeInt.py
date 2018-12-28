class Solution:
    #Palindrome int problem form leetcode. 
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        if x < 0:
            return False
        s = str(x);
        i = 0
        j =len(s) - 1
        while i <= j:
            if not s[i] == s[j]:
                return False
            i += 1
            j -= 1
        return True
        