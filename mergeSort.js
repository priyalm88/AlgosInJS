var arr = [2,6,1,8,3,5,7,4];

function merge(a1, a2) {
    console.log('merging ',a1,' and ',a2);
    var mergedArr = [];
    var i = 0, j = 0, k = 0;
    while(k < (a1.length + a2.length)) {
        if(a1[i] < a2[j]) {
            mergedArr[k++] = a1[i++];
            if(i === a1.length) {
                break;
            }
        } else {
            mergedArr[k++] = a2[j++];
            if(j === a2.length) {
                break;
            }
        }
    }
    if(i < a1.length) {
        while(i < a1.length) {
            mergedArr[k++] = a1[i++];
        }
    }
    if(j < a2.length) {
        while(j < a2.length) {
            mergedArr[k++] = a2[j++];
        }
    }
    console.log('mergedArr: ', mergedArr);
    return mergedArr;
}

function mergeSort(arr) {
    if(arr.length <= 1) {
        console.log('return to merge');
        return arr;
    }
    var index = arr.length/2;
    console.log('split index: ', index);
    console.log('left split: ', arr.slice(0, index));
    var leftArr = mergeSort(arr.slice(0, index));
    console.log('right split: ', arr.slice(index));
    var rightArr = mergeSort(arr.slice(index));
    return merge(leftArr, rightArr);
}
           
var sortedArr = mergeSort(arr);

console.log('sortedArr: ', sortedArr);
