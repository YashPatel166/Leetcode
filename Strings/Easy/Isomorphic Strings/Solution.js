/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    
       const map = new Map();

       if(s.length !== t.length)
       {
        return false;
       }

        if(new Set(s).size !== new Set(t).size)
        {
         return false;
        }
       for(let i = 0; i <= s.length; i++)
       {
        if(map.has(s[i]) && map.get(s[i]) !== t[i])
        {
            return false;
        }
        map.set(s[i],t[i]);
       }
       return true;
};
