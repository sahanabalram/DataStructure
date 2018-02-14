let array = [3,4,6,2,3,645,2,3,6,83];

function binarySearch(arr,value) {
    let max = arr.length-1;
    let min = 0;
    let middle = 0;

    while(min <= max) {
        middle = Math.floor((max + min)/2);
        // middle value == being searched
        if(arr[min] === value) {
            // return value
            return arr[middle];
        } else if(value >arr[middle]) {
            // move the min value up by one
            min = middle + 1;
        } else {
            // move the max value down by one
            max = middle - 1;
        }
    }
    return -1;
}

let sorted = array.sort(function(a,b){
    return a-b;
});

console.log(sorted);

let found = binarySearch(sorted,83);

console.log(found,sorted);