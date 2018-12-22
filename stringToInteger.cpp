class Solution {
    #include <climits>
public:

    //String to Integer Problem from leetcode. 
    int myAtoi(string str) {
        bool negative = false;
        bool sign = false;
        string num = "0";
        for(int i =0; i<str.length(); ++i){
            char c = str.at(i);
            if(c == ' ' && !sign){
                continue;
            }
            else if(c == '-' && !sign){
                negative =true;
                sign = true;
            }
            else if(c == '+' && !sign){
                sign = true;
            }
            else if(c >= '0' && c <= '9'){
                num += c;
                sign = true;
            }
            else{
                break;
            }
        }
        int n;
        if(negative){
            try{
                n = stoi(num) * -1;
            }catch(...){
                return INT_MIN;
            } 
        }else{
            try{
                n = stoi(num);
            }catch(...){
                return INT_MAX;
            }
        }
        return n;
    }
};