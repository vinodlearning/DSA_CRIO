console.log("Session 1---bbb--->");


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

console.log(twoSumInSortedArray(5,[2 ,4 ,5 ,8 ,9],7));