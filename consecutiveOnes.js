/*
given integer n, return an arr of all bin strings of length n that dont contain consecutive ones

Input: 3
Output: [ 000, 010, 101, 100, 001 ]

Input: 0
Output: [  ]
*/

function consecutiveOnes(n){
  const result = []
  
  function helper(cur){
    if(cur.length === n){
      result.push(cur)
      return 
    }
    if(cur[cur.length - 1] === '1'){
      helper(cur + '0')
    }
    else{
      helper(cur + '1')
      helper(cur + '0')
    }
  }
  
  helper('')
  return result
}

