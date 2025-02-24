class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const mySet = new Set();
        for(let num of nums)
        {
            mySet.add(num)
        }
        if(mySet.size !== nums.length)
        {
            return true;
        }
        return false;
    }
}
