const selectionSort = (arr, n) => {
    for(let i=0; i< n-1; i++){
        let minimum = i;
        for(let j=i; j< n; j++){
            if(arr[j] < arr[minimum]){
                minimum = j;
            }
        }
        let temp = arr[minimum];
        arr[minimum] = arr[i];
        arr[i] = temp;
    }
    console.log(arr);
    
}

let arr = [13,46,24,52,20,9];
selectionSort(arr, 6);