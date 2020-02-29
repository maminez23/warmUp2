// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.
//B.includes('b') && B.includes('a') && B.includes('l') && B.includes('o') && B.includes('n')

function ball(str){
   var B = str.toLowerCase();
   var arr =[];
   if(str === B){


      if(!B.includes('b') || !B.includes('a') || !B.includes('l') || !B.includes('o') || !B.includes('n')){
        return'0';

      }

      else{

      for (var i = 0; i < B.length; i++){
         if(/[balon]/.test(B[i])){
         arr.push(B[i]);
         }
      }
      var b = 0;
      var a = 0;
      var l = 0;
      var o = 0;
      var n = 0;
      for(var j = 0; j< arr.length; j++){
        if(arr[j] === 'b'){
        b += 1;
        }
        else  if(arr[j] === 'a'){
        a += 1;
        }
         else  if(arr[j] === 'l'){
        l += 1;
        }
         else  if(arr[j] === 'n'){
        n += 1;
        }
         else  if(arr[j] === 'o'){
        o += 1;
        }
      }
      var result = 0;
      while(b > 0 && a > 0 && l > 1 && o > 1 && n > 0){

      b = b - 1;
      l = l - 2;
      o = o -2;
      a = a - 1 ;
      n = n - 1;

      result += 1;

      }

   }
   }
   else{
      return '0';
   }
   return result;
}