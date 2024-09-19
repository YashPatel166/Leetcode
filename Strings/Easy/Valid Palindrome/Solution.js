/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    let count = 0;
    let length = s.length;

    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (s[i] === s[length - i - 1]) {
            count++;
        } else {
            return false; 
        }
    }

    return count === Math.floor(length / 2); 
};
