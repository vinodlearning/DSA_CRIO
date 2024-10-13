console.log("<------Session 6 practises------------>");
function reverseWordsInAString(strs) {
  let arr=  strs.trim().split(" ");
  let res=[];

  return arr.filter(el=>el!=="").reverse().join(" ");
  f/* or(let i=0;i<arr.length;i++){
     if(arr[i]!=="")
        res.push(arr[i]);
  }
   return res.reverse().join(" "); */
        //return strs.trim().split(/\s+/).reverse().join(" ");
}

//console.log(reverseWordsInAString("Hello                                World"));


function stringCompression(s) {
    let temp={};

     for(let i=0;i<s.length;i++){        
        if(temp[s[i]]){
            temp[s[i]]+=1;
        }else{
            temp[s[i]]=1;
        }
     }
     let result="";

     for(let key in temp){
        if(temp.hasOwnProperty(key)){
            result+=key+temp[key];

        }

     }
console.log(result);
      if(s.length>=result.length){
         return result;
      }
      else{
        return s;
      }  
}

//console.log(stringCompression(""));


function stringCompression1(s){

    console.log(s)
 let result="";
 let count=1;
 let prev=s[0];
 for(let i=1;i<s.length;i++){
        if(prev==s[i]){
            count++;
        }else{
            console.log(prev+":"+count);
            result+=prev+""+count;
            prev=s[i];
            count=1;
        }
        

 }
 result+=prev+""+count;
 if(result.length<s.length){
        return result;
 }else{
    return s;
 }
 //return result;
}

//console.log(stringCompression1("aabbcc"));

function reverseCharacters(str) {
    let arr=str.split(" ");
    for(let i=0;i<arr.length;i++){
        arr[i]= revesreStr(arr[i]);

    }
    return arr.join(" ");
}
function revesreStr(str){
  return   str.split('').reverse().join('');

}


//console.log(reverseCharacters("abc def ghi"));

function maxProduct2(n,nums) {
    let firstHigh=0;
    let secondHigh=0;
    
    for(let i=0;i<nums.length;i++){
         if(nums[i]>=firstHigh){
             secondHigh=firstHigh;
             firstHigh=nums[i];

         }else if(nums[i]>=secondHigh){
            secondHigh=nums[i];
         }
        

    }
    
    return  ((firstHigh-1)*(secondHigh-1));
}
function maxNumber(arr){
    let mx=arr[0];
    let index=0;

    let obj={};
    for(key in obj){
         if(key.hasOwnProperty(obj)){
            obj[key]

         }
    }
    for(let i=1;i<arr.length;i++){
         if(mx<=arr[i]){
            mx=arr[i]
            index=i;
         }

    }
    return index;

}



//console.log(maxNumber([3,9,4,5,2,9]));
//console.log(maxProduct2(4,[3,4,5,2]));

function robotReturnToOrigin(moves) {
   let x=0;
   let y=0;
    for(const el of moves){
         if(el==="R"){
            x++;

         }else if(el==="L"){
            x--;

         }else if(el==="U"){
            y++;

         } else{
            y--;
         }

    }

    return x===0&&y===0;
}

//console.log(robotReturnToOrigin("LL"));
function stringCompress(n,str) {
        let mid=str.length/2;
        let result="";
        for(let i=mid;i<str.length;i++){
        if((str[mid]==0&&str[mid+1]==1)||(str[mid]==1&&str[mid+1]==0)){

                  
            }

        }
        

}


function additionOfMatrix(matrix1, matrix2) {
   
        let result=[];
        for(let i=0;i<matrix1.length;i++){
            let row=matrix1[i];
            result[i]=[];
             for(let j=0;j<row.length;j++){
                result[i][j]=matrix1[i][j]+matrix2[i][j];
             }

        }
        console.log(result);
}


/* console.log(additionOfMatrix([[1 ,2 ,3],

    [4 ,5 ,6]],
    
    [[1 ,1 ,1],
    
    [1, 1, 1]])); */



    function equalVowelsAndConsonants(str) {
        let ovw="aeiou";
        let consnt="bcdfghjklmnpqrstvwxyz";
        let ovCount=0;
        let consntCount=0;

        for(let i=0;i<str.length;i++){
            if(ovw.includes(str[i])) ovCount++;
            if(consnt.includes(str[i])) consntCount++;


        }
        return ovCount===consntCount;
    }

    console.log(equalVowelsAndConsonants("vinod"));