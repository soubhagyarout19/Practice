const arr = [2,1,3,5,6,8,7,9,10];

// method 1
const missingNumber = (arr) => {
    let sortedArray = arr.sort((a,b)=>{
        return a - b;
    })
    for(let i=1; i<=arr.length; i++){
        if(sortedArray[i-1] !== i){
            return i;
        }
    }
}

let result = missingNumber(arr);
console.log(result);