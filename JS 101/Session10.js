function gcdOfArray(n,arr) {
   arr.sort((a,b)=>b-a);
let result=arr[0];
    for(let i=1;i<n;i++){
        result=findGcd(result,arr[i]);        
    }
    
  return  result ;

}

function findGcd(a,b){
   console.log(a+"===="+b);
    function gcd(a,b){
        if(b==0){
            return a;   
         }
        return gcd(b,a%b);

    }
    if(a>b){
     return    gcd(a,b);
    }
    return gcd(b,a);
}
let arr=[4, 6 ,8, 16];
let n=arr.length;
//console.log(gcdOfArray(n,arr));

function coprimeNumbers(n) {
    let result=[];    
    for(let i=1;i<=n;i++){       
        if(findGcd(i,n)==1){
            result.push(i);
        }
    }
    return result;
}
/* console.log(coprimeNumbers(9));
console.log(findGcd(1,1)); */
function checkPrime(num) {
    // Corner Case: if num is less than or equal to 1, then
    // return false, as all negative numbers, 0 & 1 are non-primes

        if(num==1){
            return false;
        }
        for(let i=2;i*i<num;i++){
            if(num%i==0) return false;


        }

        return true;
    }

    function countPrimes(n) {

        // initialize the countOfPrimes integer by 0
        let count=0;
    
    
        // run a num pointer loop from value 2 till less than n
        // by incrementing it's value by 1 always
            for(let i=2;i<n;i++){
                    if(checkPrime(i))
                    count++;
                }
            // check if num is prime or not by calling a method
            // checkPrime() and passing num in it
    
                // If yes, increment the countOfPrimes value by 1
    
    
    
        // return the value of countOfPrimes as the answer
    
    return count;
    }
    //console.log(countPrimes(10));


    function diagonalSum(n,m,i,j,matrix) {
        if (i >= n || j >= m) {
            return -1;
        }
    
         let diagonalSum=0;
        let row = i;
        let col = j;
    
         while (row < n&&col<m) 
        {
            console.log("-->"+matrix[row][col]);
            diagonalSum += matrix[row][col];
            row++;
            col++;
            console.log(diagonalSum)
        }
    
        return diagonalSum;
    }

    let matrxi=[

        [1 ,2 ,3, 4],

[1 ,2 ,4 ,5],

[2, 3 ,3, 4],

[1, 1, 2, 3]
    ]

   // console.log(diagonalSum(4,4,0,1,matrxi));

   function nthFibonacciNumber(n) {
    let n1=0,fib=0;
     let n2 = 1;
   let  fib_count = 0;
    while (fib<n)
    {
        fib=n1+n2;
        n1=n2;
        n2=fib;
        fib_count++;
    }

    return fib_count;
}

//console.log(nthFibonacciNumber(4));

function searchTarget(N,A,X) {
    
    let left = 0; 
    let right = A.length- 1; 
    A.sort((a,b)=>a-b);
    //console.log(A);
     while (left <= right)
    { 
        let mid = left + (right - left) / 2; 
        mid = parseInt(mid);
        if (A[mid] == X) {
            return 1; 
        } else if (A[mid] < X) { 
            left = mid + 1; 
        } else { 
            right = mid - 1; 
        }
    }
    
     return 0;
}

console.log("-->"+searchTarget(7,[13 ,7, 5 ,3, 1],1));