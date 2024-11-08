/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let str = [];
 
for(let i = 0;i < strs.length; i++){
    if(/^\d+$/.test(strs[i]))
    {
        str.push(Number(strs[i]))
    }
    else{
        str.push(strs[i].length)
    }
}

return Math.max(...str);
};
