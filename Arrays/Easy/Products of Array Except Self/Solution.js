class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = [];
        let count = 0;
        for(let i = 0; i < nums.length;i++)
        {
            res[i] = 1;
            for(let j = 0;j < nums.length;j++)
            {
                if(count === j){
                    continue;
                }
                res[i] = res[i] * nums[j];
            }
            count++;
        }
        return res;
    }
}
