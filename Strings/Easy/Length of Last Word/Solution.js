/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count = 0;
    let foundChar = false;
    for(let i=s.length-1;i>=0;i--)
    {
        if(s[i] === ' ')
        {
            if (foundChar) {
                break; 
            }
        }
        else{
            foundChar = true;
            count++;
        }
        
    }
    return count;
};
