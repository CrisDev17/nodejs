//Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s) {
   let set = new Set();
   let left = 0;
   let right = 0;
   let max = 0;
   
   while (right < s.length) {
       if (!set.has(s.charAt(right))) {
           set.add(s.charAt(right));
           max = Math.max(max, set.size);
           right++;
       } else {
           set.delete(s.charAt(left));
           left++;
       }
   }
   return max;
}
const result = lengthOfLongestSubstring('ffdfmd');
console.log(result)

