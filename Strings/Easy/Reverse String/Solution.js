/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    n = s.length - 1;
    for(let i =0; i< Math.floor(s.length/2);i++)
    {
        let temp = s[i]; 
        s[i] = s[n];       
        s[n] = temp;
        n--;
    }
};
