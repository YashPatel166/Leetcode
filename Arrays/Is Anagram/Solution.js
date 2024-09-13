class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
   /* isAnagram(s, t) {
        if(s.length!=t.length)
        {
            return false;
        }

        let sorteds = s.split('').sort().join('');
        let sortedt = t.split('').sort().join('');

        if(sorteds === sortedt)
        {
            return true;
        }
    return false;
    }
}*/

isAnagram(s, t) {
        if(s.length!=t.length)
        {
            return false;
        }
        
        const CountS = {};
        const CountT = {};

        for(const char of s)
        {
            CountS[char] = (CountS[char] || 0) + 1;
        }

         for(const char of t)
        {
            CountT[char] = (CountT[char] || 0) + 1;
        }

        for(const char in CountS)
        {
        if(CountS[char] !== CountT[char])
        {
            return false;
        }
        }
    return true;
    }
}
