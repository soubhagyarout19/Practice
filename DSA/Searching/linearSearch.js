const arr = [2,3,10,4,7,12];

const searchElement = (arg) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arg){
            return arg + " is present in the array.";
        }
    }
    return arg + " is not present in the array.";
}

let output = searchElement(10);
console.log(output);