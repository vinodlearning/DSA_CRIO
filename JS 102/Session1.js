console.log("Session 1--------->");

// find the two numbers sum equals to target (sorted )
function twoSumInSortedArray(n, arr, target_sum) {
    console.log("twoSumInSortedArray---------------")
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

//console.log(twoSumInSortedArray(38,arr,16));
// find the two numbers sum equals to target (unsorted )
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

//console.log(twoSum([2, 4, 5, 9, 8],7));

/**
 * 
 * Merge Two sorted arrays
 * 
 * Problem Description
Given two sorted arrays of size M and N, merge the two arrays and return the final array, sorted.
 */
function mergeSortedArray(n, nums1, m, nums2) {
    let result=[];
    let left=0;
    let right=nums2.length-1;

    while(left<=nums1.length-1 || right>=0){
        if(left<=nums1.length-1)
        result.push(nums1[left]);
        if(right<=nums2.length-1)
        result.push(nums2[right]);
        left++;
        right--;

    }

    /* let temp=[...nums1]+[...nums2];
    console.log(temp) */

    //return result.sort((a,b)=>a-b);


    // altearnative approach to skip the sort operation 

    let i=0;
    let j=0;
    let resultArr=[];
    while(i<n&&j<m){
        if(nums1[i]<=nums1[j])
            resultArr.push(nums1[i++]);
        else
        resultArr.push(nums2[j++]);
    }

    //if any uncompared values in nums1

    while(i<n){
        resultArr.push(nums1[i++]);
    }

    //if any uncompared values in nums2

    while(j<m){
        resultArr.push(nums2[j++]);
    }
   return resultArr;
}

//console.log(mergeSortedArray(3,[1,2,3],3,[2, 5, 6]));

/**
 * Remove duplicates such that each element occurs at most twice
 * 
 * Problem Description
Given a sorted array, remove the duplicates in-place, such that each element in the array appears at most twice, and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 */

function removeDuplicatesFromSortedArrayII(n, arr) {

}

//console.log(removeDuplicatesFromSortedArrayII(7,[2, 2, 2, 3, 4, 4, 9]));



/**
 * Remove duplicates such that each element occurs at most twice
 * 
 * Problem Description
Given a sorted array, remove the duplicates in-place, such that each element in the array appears at most twice, and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 */

function removeDuplicatesFromSortedArrayII(n, arr) {

    let j=0// last freez index

   // let i=0;//for increment 
        for(let i=0;i<n;i++){
            if(j>=2&&arr[i]==arr[j-1]&&arr[i]==arr[j-2])
                continue;
            arr[j++]=arr[i];
            
        }
        

        return j;

}
console.log(removeDuplicatesFromSortedArrayII(7,[2, 2 ,2, 3 ,4, 4,9]));




/**
 * 
 * 
 * 
 * Find Triplet with Maximum Sum in Unsorted Array [Pattern Introduction]
 * Problem Description
Given an array nums, you need to find the maximum sum of triplet (nums[i] + nums[j] + nums[k])
 such that 0 <= i < j < k and nums[i] < nums[j] < nums[k]. 
If no such triplet exists print 0.
 * 
 * 
 */

function maxSumTriplet(n, nums) {
    let ans = 0;
    return ans;
}