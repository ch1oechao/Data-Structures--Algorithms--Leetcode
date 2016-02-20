// 数组测试平台
function ArrayList() {
    var array = [];

    this.insert = function(item) {
        array.push(item);
    };

    this.toString = function() {
        return array.join();
    };

    /* ------------------------------- 基本排序算法 ------------------------------------- */

    /**
     * 冒泡排序 (最慢)
     * 冒泡排序比较任意两个相邻的项 如果第一个比第二个大 则交换它们
     * 元素项向上移动至正确的顺序 就如气泡升至表面一样 因此得名
     */

     var swap = function(idx1, idx2) {
        var aux = array[idx1];
        array[idx1] = array[idx2];
        array[idx2] = aux;
    };

    this.bubbleSort = function() {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - 1; j++) {
                if (array[j] > array[j + 1]) {
                    swap(j, j + 1);
                }
            }
        }
    };

    this.modifiedBubbleSort = function() {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - 1 - i; j++) {
                if (array[j] > array[j + 1]) {
                    swap(j, j + 1);
                }
            }
        }
    };

    /**
     * 选择排序
     * 找到数据结构中的最小值并将其放在第一位 接着找到第二小的值并排在第二位 以此类推
     */

    this.selectionSort = function() {
        var length = array.length,
            indexMin;
        for (var i = 0; i < length - 1; i++) {
            indexMin = i;
            for (var j = i; j < length; j++) {
                if (array[indexMin] > array[j]) {
                    indexMin = j;
                }
            }
            if (i !== indexMin) {
                swap(i, indexMin);
            }
        }
    };


    /**
     * 插入排序 
     * 插入排序每次排一个数组项 以此方式构建最后的排序数组
     */

    var insertionSort = function() {
        var length = array.length,
            j, temp;
        for (var i = 1; i < length; i++) {
            j = i;
            temp = array[i];
            while (j > 0 && array[j - 1] > temp) {
                array[j] = array[j - 1];
                j--;
            }
            array[j] = temp;
        }
    };


    /* ------------------------------- 高级排序算法 ------------------------------------- */



    /**
     * 归并排序
     * 可用于实际应用
     * 归并排序是一种分治算法 将原始数组切分成较小的数组 直到每个小数组只有一个位置
     * 接着讲小数组归并成较大的数组 直到最后只有一个排序完毕的数组
     */

    this.mergeSort = function() {
        array = mergeSortRec(array);
    };

    var mergeSortRec = function(arr) {
        var length = arr.length;
        if (length === 1) {
            return arr;
        }
        var mid = Math.floor(length / 2),
            left = arr.slice(0, mid),
            right = arr.slice(mid, length);

        return merge(mergeSortRec(left), mergeSortRec(right));
    };

    var merge = function(left, right) {
        var res = [],
            il = 0,
            ir = 0;

        while (il < left.length && ir < right.length) {
            if (left[il] < right[ir]) {
                res.push(left[il++]);
            } else {
                res.push(right[ir++]);
            }
        }

        while (il < left.length) {
            res.push(left[il++]);
        }

        while (ir < right.length) {
            res.push(right[ir++]);
        }

        return res;
    };


    /**
     * 快速排序
     * (1) 首先从数组中间一项作为主元
     * (2) 划分操作
     *     创建两个指针 左边一个指向数组第一项 右边一个指向数组最后一项
     *     移动左指针直到找到一个比主元大的元素 接着 移动右指针直到找到一个比主元小的元素 然后交换
     *     重复这个过程 直到左指针超过了右指针
     *     这个过程将使得比主元小的值都排在主元之前 而比主元大的值都排在主元之后
     * (3) 算法对划分后的两组数组 重复之前的两个步骤 直至数组已完全排序
     */

    this.quickSort = function() {
        quick(array, 0, arr.length - 1);
    };


    var quick = function(array, left, right) {
        var index;

        if (array.length > 1) {
            index = partition(array, left, right);
            if (left < index - 1) {
                quick(array, left, index - 1);
            }
            if (index < right) {
                quick(array, index, right);
            }
        }
    };

    var partition = function(array, left, right) {
        var pivot = array[Math.floor((right + left) / 2)],
            i = left,
            j = right;

        while (i <= j) {
            while (array[i] < pivot) {
                i++;
            }
            while (array[j] < pivot) {
                j++;
            }
            if (i <= j) {
                swapQuickSort(array, i, j);
                i++;
                j++;
            }
        }
        return i;
    };

    var swapQuickSort = function(array, idx1, idx2) {
        var aux = array[idx1];
        array[idx1] = array[idx2];
        array[idx2] = aux;
    };


    /* ------------------------------- 搜索算法 ------------------------------------- */    


    /**
     * 顺序搜索 低效
     * 将每一个数据结构中的元素和我们要找的元素作比较
     */

    this.sequentialSearch = function(item) {
        for (var i = 0; i < array.length; i++) {
            if (item === array[i]) {
                return i;
            }
        }
        return -1;
    };

    /**
     * 二分搜索
     * (1) 选择数组的中间值
     * (2) 如果选中值是待搜索值 则执行完毕
     * (3) 如果搜索值比选中值要小 则返回(1)步骤并在选中值左边的子数组中寻找
     * (4) 如果搜索值比选中值要大 则返回(2)步骤并在选中值右边的子数组中寻找
     */
    
    this.binarySearch = function(item) {
        this.quickSort();

        var low = 0,
            high = array.length - 1,
            mid, elem;

        while (low <= high) {
            mid = Math.floor((low + high) / 2);
            elem = array[mid];
            if (elem < item) {
                low = mid + 1;
            } else if (elem > item) {
                high = mid - 1;
            } else {
                return mid;
            }
        }

        return -1;
    };

}


// test
function createNonSortedArray(size) {
    var arr = new ArrayList();
    for (var i = size; i > 0; i--) {
        arr.insert(i);
    }
    return arr;
}
 