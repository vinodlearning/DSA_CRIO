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


console.log(reverseCharacters("abc def ghi"));