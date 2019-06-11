#Author:Adam Undus
#Solution to multiply strings problem from leetcode

class Solution:
        
    def multiply(self, num1: str, num2: str) -> str:
        def getInt(string):
            result = 0
            for i in range(len(string),0,-1):
                result += int(string[i-1]) * 10 ** (len(string) - i)
            return result
        int1 = getInt(num1)
        int2 = getInt(num2)
        return str(int1*int2)
    
    