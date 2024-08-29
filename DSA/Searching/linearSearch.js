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

// Best Case: In the best case, the key might be present at the first index. So the best case complexity is O(1)
// Worst Case: In the worst case, the key might be present at the last index i.e., opposite to the end from which the search has started in the list. So the worst-case complexity is O(N) where N is the size of the list.
// Average Case: O(N)