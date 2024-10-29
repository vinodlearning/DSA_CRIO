/* console.log(" This is for DSA 101 practice ----------------->");

let n1=0;
console.log(n1);

n1=10;

console.log(n1);

let str="647539281";

//let rev=str.split("").reverse().join("");
let sortStr =str.split("").sort().join("");
console.log(`The sort  of the ${str} is : ${sortStr}`);


function capitalizaeFirstLetter(str){
// slice ---> it will be iteration internally for loop so 1 to n-1 
// returning one string means, new string created based on input string 
//if input string is N characters then return string N characters 
   return str[0].toUpperCase()+str.slice(1,str.length); //T(c)= O(n).... S(c)=O(n)
}
console.log(capitalizaeFirstLetter("hello "));

console.log(capitalizaeFirstLetter("world ")); */

function capitaliseBasic(paragraph){

 let result=   paragraph.split(" ").map(elmt=> elmt[0].toUpperCase()+elmt.slice(1,elmt.length)).join(" ");

 return result;

}

//console.log(capitaliseBasic("the quick Brown fox jumps over The lazy dog."));


function reverseString(str) {
    //implement this function

    // Time--O(n)-- reverse function is iterate the entire array a from last to first.
    // so example: N elements 
    //Space O(n)


    return str.split("").reverse().join("");
}

//console.log(reverseString("abc"));


function stringPalindrome(str) {
    //implement this function
    // T(C)== O(n)
    // S(C)== O(n)
let rev=str.split("").reverse().join("");
   
   if(str=== rev) return true;
    else return false;
}

//console.log(stringPalindrome("crio"));


function isSorted(arr){
   for(let i=0;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){                 
                 if(arr[i]>arr[j]){
                    return false;
                 }
            }
   }
   return true;
}

//console.log(isSorted([1,2,3,4,5]));//true
//console.log(isSorted([1,2,3,5,4]));//false
//instead of copmparing all elements why can't we compare side by side elements 
//then we can reduce the time complexity
function isSorted2Try(arr){
    for(let i=0;i<arr.length;i++){                          
                  if(arr[i]>arr[i+1])
                     return false;                     
                }    
                return true;        
    }
    
 

// console.log(isSorted([1,7,3,4,5]));
//console.log(isSorted([1,2,3,5,4]));

function pointer2(arr){
 let left=0;
 let right=1;
 while(right<arr.length){
    if(arr[left]>arr[right]){
        return false;
    }
    
        left+=1;
        right+=1;


 }
 return true;
}
/* console.log(pointer2([1,2,3,4,5]));
console.log(pointer2([1,2,3,5,4])); */

function stringPalindrome2Pointer(str) {
        // two pointers approach    
     let left=0;
     let right=str.length-1;      
     while(left<right){
         if(str[left]!=str[right]){
            return "Not Palindrom";
         }
         left++;
         right--;
           
     }   

     return "Palindrom";
    }

    //console.log(stringPalindrome2Pointer("ndugrpfxrduxuafiyriffiryifauxudrxfprgudn"));

    function countVowels(str) {
        // Define the set of vowels (both lowercase and uppercase)
        let vowels = 'aeiouAEIOU';
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            // Check if the character is a vowel
            if (vowels.includes(str[i])) {
                count++;
            }
        }
    
        // Output the total count of vowels
        console.log(count);
    }
    
    // Sample input
    let input = "language";
    //countVowels(input);  // Output: 4

    const matrix=[
        //3*4 matrix-- 2D aray 
        [1,2,3],
        [5,6,7],
        [9,10,11]
    ];
    //console.log(matrix);
// iterate the matrix 
    for(let i=0;i<matrix.length;i++){
          for(let j=0;j<matrix[i].length;j++){
            //console.log(matrix[i][j]);
          }

    }





    function iterateMatrx(matrx){
        for(let i=0;i<matrx.length;i++){
            for(let j=0;j<matrx[i].length;j++){
              console.log(matrix[i][j]);
            }
  
      }

    }

    //iterateMatrx(matrix);


function iterRow(matrx,rowNo){
    for(let j=0;j<matrx[rowNo].length;j++){
        console.log(matrix[rowNo][j]);
      }


}
//iterRow(matrix,2);
 

function iterCol(matrx,colNo){
    for(let j=0;j<matrx.length;j++){
        console.log(matrx[j][colNo]);
      }


}

//iterCol(matrix,2);

function iterDiag(matrx){
    let col=0;
    for(let j=0;j<matrx.length;j++){
        console.log(matrx[j][j]);
      }


}
iterDiag(matrix);

function iterDiag1(matrx){
    let col=matrx.length-1;
    for(let j=0;j<matrx.length;j++){
        console.log(matrx[j][col--]);
      }


}
iterDiag1(matrix);


