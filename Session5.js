

function rowsC(matrx){
    let sum=iterRow(matrx,0);

    for(let j=1;j<matrx.length;j++){
    let sumJ=iterRow(matrx,j);
 
        if(sum!==sumJ)
        return -1;
    }
return sum;
}
function iterRow(matrx,rowNo){
    let sum=0;
   
    for(let j=0;j<matrx[rowNo].length;j++){
        sum+=(matrx[rowNo][j]);
      }

return sum;
}

function iterCol(matrx,colNo){
     let sum=0;
    for(let j=0;j<matrx.length;j++){
         sum+=(matrx[j][colNo]);
      }
      return sum;
}
function colsC(matrx){
    let sum=iterCol(matrx,0);
    for(let j=1;j<matrx.length;j++){
    let sumJ=iterCol(matrx,0);
        if(sum!==sumJ)
        return -2;
    }
    return sum;
}

function iterDiag(matrx){
  
     let sum=0;
    for(let j=0;j<matrx.length;j++){
       sum+=(matrx[j][j]);
      }
      return sum;
}

function iterDiag1(matrx){
     let sum=0;
    let col=matrx.length-1;
    for(let j=0;j<matrx.length;j++){
       sum+=(matrx[j][col--]);
      }

  return sum;
}
// TODO: Implement this method
function checkMagicSquare(n, matrix) {
     let rows=rowsC(matrix);
    let cols=colsC(matrix);

    let leDiag=iterDiag(matrix);

    let riDiag=iterDiag1(matrix);
   
    if (rows===cols&&leDiag=== riDiag&&riDiag===rows)
    return true;
    else return false;

}
/* console.log(checkMagicSquare(8,[[60, 53 ,44 ,37 ,4, 13 ,20 ,29],
    [3, 14, 19 ,30 ,59 ,9, 43,38],
    [58 ,55, 42 ,39, 2, 15 ,18 ,31],
    [1, 16, 17, 32 ,57 ,56, 41 ,40],
    [61, 52, 45 ,36, 5, 12 ,21 ,28],
    [6 ,11 ,22, 27, 62, 51, 46 ,35],
    [63 ,50 ,47, 34 ,7 ,10, 23, 26],
    [8, 9, 24, 25 ,64, 49, 48, 33]])); */


    function searchTarget(N,A,X) {
        //implement this function
            let left =0;
            let right=N-1;
    
            while(left<=right){
                    let mid= Math.ceil((left+right)/2);

                    if(A[mid]===X){
                        return mid;
                    }else if(A[mid]>X){
                        right=mid-1;
                    }else{
                        left=mid+1;
                    }
    
    
            }
            return -1;
    
    }

    //console.log(searchTarget(5,[1 ,3, 5 ,7 ,13],7));
    
    function rotateImage(n, matrix) {
        console.log(matrix);

        for (let i = 0; i < matrix.length; i++) {
            for (let j = i; j < matrix.length; j++) {               
                    let val = matrix[i][j];
                   
                    //console.log(val+"----"+val1);
                    matrix[i][j]=matrix[j][i];
                    matrix[j][i] = val;
            }
        }
        console.log(matrix);
        for(let i=0;i<n;i++){
            matrix[i].reverse();

        }
        console.log(matrix);
   /*      console.log(matrix);
        for(let i=0,j=0;i<matrix.length;i++){
          let temp=  matrix[i][j];
          matrix[i][j]=matrix[i][matrix.length-1];
          matrix[i][matrix.length-1]=temp;
        }
        console.log(matrix); */

    }
/*     console.log(rotateImage(3,[[1, 2,3],
        [4, 5 ,6],        
        [7, 8 ,9]])); */



        function patternPrintingI(n) {
            let arr=[];
                for(let i=1;i<=n;i++){  
                    let temp="";
                    temp+="*".repeat();

                    /* for(let j=0;j<i;j++){
                         temp+="*"+" ";

                    } */
                    arr.push(temp);

                }
                console.log(arr);
        }

// console.log(patternPrintingI(4));


 function rightMove(matrix,steps,row,col){
    // row same but column increment

      let res=[];
       for(let i=1;i<=steps;i++){              
                let val=matrix[row][++col]
                if(val){                    
                    res.push(val);
                }else{
                    return -1;
                }
       }
       return res;
 }

 function downMove(matrix,steps,row,col){
    // row same but column increment

      let res=[];
       for(let i=1;i<=steps;i++){ 
           let val=matrix[++row][col]
                if(val){                    
                    res.push(val);
                }else{
                    return -1;
                }
       }
       return res;
 }

 function leftMove(matrix,steps,row,col){
    // row same but column increment

      let res=[];
       for(let i=1;i<=steps;i++){ 
           let val=matrix[row][--col]
                if(val){                    
                    res.push(val);
                }else{
                    return -1;
                }
       }
       return res;
 }

 function upMove(matrix,steps,row,col){
    // row same but column increment

      let res=[];
       for(let i=1;i<=steps;i++){ 
           let val=matrix[--row][col]
                if(val){                    
                    res.push(val);
                }else{
                    return -1;
                }
       }
       return res;
 }

function matrixTraversal(matrix, currPosRow, currPosCol, dirToMove, stepsToMove) {
    const M = matrix.length;
    const N = matrix[0].length;
    /* if(stepsToMove>matrix.length ||  stepsToMove>matrix[0].length)
        return -1; */

    
    let temp=[];
    for(let i =0;i<stepsToMove;i++){
        // Check if we go out of bounds
        
    /* if(dirToMove==1){
        temp=rightMove(matrix,stepsToMove,currPosRow,currPosCol);
    }
    if(dirToMove==2){
        temp=downMove(matrix,stepsToMove,currPosRow,currPosCol);
    }
    if(dirToMove==3){
        temp=leftMove(matrix,stepsToMove,currPosRow,currPosCol);
    }
    if(dirToMove==4){
        temp=upMove(matrix,stepsToMove,currPosRow,currPosCol);
    } */
       

        if(dirToMove==1){
           currPosCol++;
        }
        else if(dirToMove==2){
            console.log("-----"+i);
           currPosRow++;
        }
        else if(dirToMove==3){
           currPosCol--;
        }
       else {
            currPosRow--;
        }

        if (currPosRow < 0 || currPosRow >= M || currPosCol < 0 || currPosCol >= N) {
            temp=[];
            temp.push(-1);
            return temp;
        }
       
        temp.push(matrix[currPosRow][currPosCol]);
}
return temp;
}

/* console.log(matrixTraversal([[1, 2, 3, 4],

    [5 ,6 ,7 ,8],
    
    [9 ,10, 11, 12]],0,2,2,5)); */


    // search on matrix


    function searchingTarget(matrix, target) {
      
        let result=[];
        for(let i=0;i<matrix.length;i++){
            matrix[i].sort((a,b)=>a-b);

        }
       
            let val=searchEntire(matrix,target);
            if(val){
        result.push(true);
    }
        else {
            result.push(false);
        }

       
    
    return result;
    
    }

    function searchEntire(matrix,target){
        let result=false;
        for(let i=0;i<matrix.length;i++){
            let temp=searchElement(matrix[i],target);
         
                if(temp>0){
                  return true;
                }


        }
        return result;
    }
    function searchElement(arr,target){
      
            let left=0;
            let right=arr.length-1;
    
            while(left<=right){
                let mid= Math.floor((left+right)/2);
                 
                  if(arr[mid]===target){
                    return arr[mid];
    
                  }else if (arr[mid]>target){
                    right=mid-1;

                  }else {
                    left=mid+1;

                  }
    
            }
            return -1;
    
    
    }

    function  searchElement(matrix,target){

        let rows=matrix.length;
        let cols=matrix[0].length;

        let row = 0;
        let col = cols - 1;

        while (row < rows && col >0) {
            if (matrix[row][col] === target) {
                return true;
            } else if (matrix[row][col] > target) {
                col--;  // Move left
            } else {
                row++;  // Move down
            }
        }
        return false;


    }

    /* console.log(searchingTarget(
        [[1 ,4 ,7, 11 ,15],
        
        [2, 5,8 ,12, 19],
        
        [3, 6 ,9 ,16, 22],
        
        [10, 13, 14, 17 ,24],
        
        [18 ,21, 23 ,26, 30]],20));
 */
        /* console.log(searchElement(
            [[1 ,4 ,7, 11 ,15],
            
            [2, 5,8 ,12, 19],
            
            [3, 6 ,9 ,16, 22],
            
            [10, 13, 14, 17 ,24],
            
            [18 ,21, 23 ,26, 30]],20)); */
    


            //session 6 activities


function reverseWordsInAString(arr) {
    console.log(arr.trim());
    let strs=arr.trim().split(" ");
  let left=0;
  let right=strs.length-1;
  
  console.log(strs[right]);
  while(left<=right){
    if(strs[left]===strs[right]){
         return strs;

    }else{
        let temp=strs[left];
        strs[left]=strs[right];
        strs[right]=temp;
        left++;
        right--;
    }
  }
  return strs;
}

console.log(reverseWordsInAString("hello      world"));