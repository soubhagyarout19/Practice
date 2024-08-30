let k = 4;
let arr= [1, 2, 3, 4, 5] ;

let start = 0
let end = arr.length-1;

while(start<=end){
    let mid = Math.trunc((start+end)/2);
    if(k>mid){
        start = mid + 1;
    }
    if(k<mid){
        end = mid - 1;
    }
    if(k === arr[mid]){
        console.log(k + " is present in the array");
        break;
    }
}

// Time Complexity: O(log n), where n is the size of the given array
// Auxiliary Space: O(1) , as we are not using any extra space