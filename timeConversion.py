#!/bin/python3


import os
import sys

#
# Time conversion problem from hackerrank
#
def timeConversion(s):
    if(s[-2] == "A"):
        if s[:2]  == "12":
            return "00" + s[2:8]
        return s[:-2]
    else:
        if s[:2] == "12":
            return s[:-2]
        h = (int(s[:2]) +12) % 24
        return str(h) + s[2:8]

if __name__ == '__main__':
    f = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = timeConversion(s)

    f.write(result + '\n')

    f.close()
