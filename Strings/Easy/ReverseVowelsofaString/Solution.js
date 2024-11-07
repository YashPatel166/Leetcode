/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];

    let stri = [];
    let vq =[];
    let str = s.split('');
    let m = 0;
    let new_s = s;
    let temp = '';
    for(let i = 0; i < s.length; i++)
    {
        for(let j = 0; j < vowels.length; j++)
    {
        if(s[i] === vowels[j])
        {
            stri.push(i);
            vq.push(s[i]);
        }
    }
    }
    
    for (let i = 0; i < stri.length; i++) {
        let pos = stri[i];  
        str[pos] = vq.pop(); 
    }

    return str.join('');
};
