class Solution {
    public int[] findErrorNums(int[] nums) {
        HashSet<Integer> set = new HashSet<Integer>();
        int missingNumber = -1;
        int repeatingNumber = -1;
        for(int item: nums){
            if(set.contains(item)){
                repeatingNumber = item;
            }
            set.add(item);
        }

        for(int i=1; i<=nums.length; i++){
            if(!set.contains(i)){
                missingNumber = i;
            }
            else{
                set.remove(i);
            }
        }
        
        return new int[]{repeatingNumber, missingNumber};
    }
}