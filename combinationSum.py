# Combination Sum problem from leetcode, recursive solution.
class Solution(object):
    def combinationSum(self, candidates, target):
        """
        :type candidates: List[int]
        :type target: int
        :rtype: List[List[int]]
        """
        def combHelper(candidates, target, current):
            if sum(current) == target:
                return [current]
            elif sum(current) > target:
                return []
            elif candidates == []:
                return []
            use = combHelper(candidates,target, current + [candidates[0]])
            lose = combHelper(candidates[1:],target, current)
            return use + lose
        
        def sum(lst):
            s = 0
            for n in lst:
                s += n
            return s
        return combHelper(candidates,target, [])