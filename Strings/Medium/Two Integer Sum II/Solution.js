class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let s = new Map();
        for (let i = 0; i < numbers.length; i++){
            let rem = target - numbers[i];
            if(s.has(rem)){
                return[s.get(rem),i+1]
            }
            s.set(numbers[i],i+1);
        }
    }
}
