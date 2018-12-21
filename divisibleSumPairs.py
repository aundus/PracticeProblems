#!/bin/python3

import math
import os
import random
import re
import sys

# Divisible Sum Pairs problem from hackerrank
def divisibleSumPairs(n, k, ar):
    total = 0
    for i in range(len(ar)):
        for j in range(len(ar)):
            if (ar[i] + ar[j]) % k == 0 and i != j:
                total += 1
    return total//2

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    nk = input().split()

    n = int(nk[0])

    k = int(nk[1])

    ar = list(map(int, input().rstrip().split()))

    result = divisibleSumPairs(n, k, ar)

    fptr.write(str(result) + '\n')

    fptr.close()
