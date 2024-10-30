console.log("Session 1------>");


function twoSumInSortedArray(n, arr, target_sum) {
   
    let i=0;
    let j=n-1;
    while(i<j){
        let sum=arr[i]+arr[j];
            if(sum==target_sum){
                return true;
            }else if(sum>target_sum){
                j--;
            }else {
                i++;
            }


    }
    return false;
}
let arr=[1 ,8 ,12 ,14 ,20, 24 ,29 ,30 ,32 ,41 ,44, 46, 47, 48 ,49, 50, 54, 55, 57, 59, 60, 61 ,63, 68 ,69, 70 ,71, 74 ,75 ,76 ,79 ,81 ,83 ,88, 90 ,92, 94 ,96];

//console.log(twoSumInSortedArray(38,arr,16));

// Time complexity is O(nlongn--> bcz of sort)
function twoSum(nums, target) {
    let duplicateArr=[...nums];
    let left=0;
    let right=nums.length-1;
    nums.sort((a,b)=>a-b);
    while(left<right){
        const sum=nums[left]+nums[right];
        if(sum==target){
            break;
        }else if(sum>target){
            right--;
        }else{
            left++;
        }
    }

    let firtsIdx=duplicateArr.indexOf(nums[left]);
    let secondIdx=duplicateArr.indexOf(nums[right]);

    return [firtsIdx,secondIdx];

}

console.log(twoSum([2, 4, 5, 9, 8],7));