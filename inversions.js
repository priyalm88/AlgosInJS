var arr = [2,6,1,8,3,5,7,4];

function mergeAndCount(a1, a2) {
    console.log('merging ',a1,' and ',a2);
    var mergedArr = [];
    var i = 0, j = 0, k = 0, invCount = 0;
    while(i < a1.length && j < a2.length) {
        if(a1[i] > a2[j]) {
            // found an inversion!
            mergedArr[k++] = a2[j++];
            invCount += a1.length - i;
        } else {
            mergedArr[k++] = a1[i++];
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
    console.log('Inversions found: ', invCount);
    return { sortedArr: mergedArr, count: invCount};
}

function mergeSort(obj) {
    if(obj.sortedArr.length <= 1) {
        console.log('return to merge');
        return {sortedArr: obj.sortedArr, count: 0 + obj.count};
    }
    var index = obj.sortedArr.length/2;
    console.log('split index: ', index);
    console.log('left split: ', obj.sortedArr.slice(0, index));
    var leftObj = mergeSort({
        sortedArr: obj.sortedArr.slice(0, index),
        count: obj.count
    });
    console.log('right split: ', obj.sortedArr.slice(index));
    var rightObj = mergeSort({
        sortedArr: obj.sortedArr.slice(index),
        count: obj.count
    });
    var mergedObj = mergeAndCount(leftObj.sortedArr, rightObj.sortedArr);
    console.log('Total inversions so far: ', leftObj.count + rightObj.count + mergedObj.count);
    return {
        sortedArr: mergedObj.sortedArr,
        count: leftObj.count + rightObj.count + mergedObj.count
    };
}

var sortedObj = mergeSort({sortedArr: arr, count: 0});

console.log('sortedArr: ', sortedObj.sortedArr);
console.log('Total inversions: ', sortedObj.count);
