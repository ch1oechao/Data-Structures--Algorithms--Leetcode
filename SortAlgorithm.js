// 数组测试平台
function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;
    
    this.bubbleSort = bubbleSort;
    
    for (var i = 0; i < numElements; ++i) {
        this.dataStore[i] = i;
    }
}

function setData() {
    for (var i = 0; i < this.numElements; ++i) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
}

function clear() {
    for (var i = 0; this.dataStore.length; ++i) {
        this.dataStore[i] = 0;
    }
}

function insert(element) {
    this.dataStore[this.pos++] = element;
}

function toString() {
    var retstr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retstr += this.dataStore[i] + " ";
        if (i > 0 & i % 10 == 0) {
            retstr += "\n";
        }
    }
    return retstr;
}

function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}


/* ------------------------------- 基本排序算法 ------------------------------------- */

// 冒泡排序 (最慢)
// 冒泡排序时，数据值会像气泡一样从数组的一端浮到另一端。较大的值会浮动到数组的右侧，而较小的值会浮动到数组的左侧。
// 之所以产生这种现象是因为算法会多次在数组中移动，比较相邻的数据，当左侧值大于右侧值时将它们进行互换。

function bubbleSort() {
    var numElements = this.dataStore.length;
    var temp;
    for (var outer = numElements; outer >= 2; --outer) {
        for (var inner = 0; inner <= outer - 1; ++inner) {
            if (this.dataStore[inner] > this.dataStore[inner + 1]) {
                swap(this.dataStore, inner, inner + 1);
            }
        }
        //console.log(this.toString()); 查看过程
    }
}

// test 
var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
console.log(mynums.toString());
mynums.bubbleSort();
console.log(mynums.toString());

// 9 9 10 0 8 0 7 2 4 3 
// 0 0 2 3 4 7 8 9 9 10


// 选择排序算法 选择排序从数组的开头开始，将第一个元素和其他元素进行比较。
// 检查完所有元素后，最小的元素会被放到数组的第一个位置，然后算法会从第二个位置继续。
// 这个过程一直进行，当进行到数组的倒数第二个位置时，所有数据便完成了排序。


function selectionSort() {
    var min,
        temp;
    for (var outer = 0; outer <= this.dataStore.length - 2; ++outer) {
        min = outer;
        for (var inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
            if (this.dataStore[inner] < this.dataStore[min]) {
                min = inner;
            }
            swap(this.dataStore, outer, min);
        }
    }
}


// 插入排序 有两个循环，外循环将数组元素挨个移动，而内循环则对外循环中选中的元素以它后面的那个元素进行比较。
// 如果外循环选中的元素比内循环中选中的小，那么数组元素会向右移动，为内循环中的这个元素腾出位置。

function insertionSort() {
    var temp,
        inner;
    for (var outer = 1; outer <= this.dataStore.length - 1; ++outer) {
        temp = this.dataStore[outer];
        inner = outer;
        while (inner > 0 && (this.dataStore[inner -1] >= temp)) {
            this.dataStore[inner] = this.dataStore[inner - 1];
            --inner;
        }
        this.dataStore[inner] = temp;
    }
}



/* ------------------------------- 高级排序算法 ------------------------------------- */

// 希尔排序
// 通过定义一个间隔序列来表示在排序过程中进行比较的元素之间有多远的间隔。

function shellsort() {
    for (var g = 0; g < this.gaps.length; ++g) {
        var temp = this.dataStore[i];
        for (var j = i; 
                 j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp; 
                 j -= this.gaps[g]) {
            this.dataStore[j] = this.dataStore[j - this.gaps[g]];
        }
        this.dataStore[j] = temp;
    }
}

function setGaps(arr) {
    this.gaps = arr;
}

// 动态计算间隔序列的希尔排序
function shellsort1() {
    var N = this.dataStore.length;
    var h = 1;
    while (h < N/3) {
        h = 3 * h + 1;
    }
    while (h >= 1) {
        for (var i = h; i < N; i++) {
            for (var j = i; 
                     j >= h && this.dataStore[j] < this.dataStore[j - h];
                     j -= h) {
                swap(this.dataStore, j, j - h);
            }
        }
        h = (h - 1)/3;
    }
}


// 归并排序
// 将一系列排好序的子序列合并成一个大的完整有序序列
// 自底向上归并排序算法

function mergeSort(arr) {
    if (arr.length < 2) {
        return;
    }
    var step = 1;
    var left, right;
    while (step < arr.length) {
        left = 0;
        right = step;
        while (right + step <= arr.length) {
            mergeArrays(arr, left, left + step, right, right + step);
            left = right + step;
            right = left + step;
        }
        if (right < arr.length) {
            mergeArrays(arr, left, left + step, right, arr.length);
        }
        step *= 2;
    }
}
function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
    var rightArr = new Array(stopRight - startRight + 1);
    var leftArr = new Array(stopLeft - startLeft + 1);
    k = startRight;
    for (var i = 0; i < (rightArr.length - 1); ++i) {
        rightArr[i] = arr[k];
        ++k;
    }
    k = startLeft;
    for (var i = 0; i < (leftArr.length - 1); ++1) {
        leftArr[i] = arr[k];
        ++k;
    }
    rightArray[rightArr.length - 1] = Infinity;
    leftArray[leftArr.length - 1] = Infinity;
    
    var m = 0;
    var n = 0;
    
    for (var k = startLeft; k < stopRight; ++k) {
        if (leftArr[m] <= rightArr[n]) {
            arr[k] = leftArr[m];
            m++;
        }
        else {
            arr[k] = rightArr[n];
            n++;
        }
    }
    console.log("left array - ", leftArr);
    console.log("right array - ", rightArr);
}


// 快速排序
// 选择一个基准元素，将列表分隔成两个子序列；
// 对列表重新排序， 将所有小于基准值的元素放在基准值的前面，所有大于基准值的元素放在基准值的后面
// 分别对较小的元素的子序列和较大的子序列重复以上步骤

function qSort(list) {
    if (list.length == 0) {
        return [];
    }
    var lesser = [];
    var greater = [];
    var pivot = list[0];
    for (var i = 1; i < list.length; i++) {
        if (list[i] < pivot) {
            lesser.push(list[i]);
        } 
        else {
            greater.push(list[i]);
        }
    }
    return qSort(lesser).concat(pivot, qSort(greater));
}

// test 
var a = [];
for (var i = 0; i < 10; ++i) {
    a[i] = Math.floor((Math.random() * 100) + 1);
}
console.log(a);
console.log(qSort(a));
 
