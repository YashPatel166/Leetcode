class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        
        let data = new Set(nums);
        let maxCount = 0;

        for (let num of nums) {
            if (!data.has(num - 1)) {
                let currentNum = num;
                let count = 1;

                while (data.has(currentNum + 1)) {
                    currentNum++;
                    count++;
                }

                maxCount = Math.max(maxCount, count);
            }
        }

        return maxCount;
    }
}
