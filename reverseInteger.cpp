class Solution {
public:
    //reverse any 32bit. Problem from leetcode.
    int reverse(int x) {
        std::string s = std::to_string(x);
        std::string r = "";
        for(int i = s.length()-1; i >= 0; --i){
            if(s.at(i) == '-'){
                break;
            }
            r += s.at(i);
        }
        int rev = 0;
        try{
            rev = std::stoi(r);
        }catch(...){
            return 0;
        }
        if(x<0){
            return rev *-1;
        }
        return rev;
    }
};