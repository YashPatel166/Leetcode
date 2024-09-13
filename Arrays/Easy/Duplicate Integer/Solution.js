class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const checker = new Set();
        for(const i of nums){
            if(checker.has(i))
            {
                return true;
            }
            checker.add(i);
        }
        return false;
    }
}
