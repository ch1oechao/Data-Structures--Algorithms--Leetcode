// 判断数组
Array.isArray(arr);
Object.prototype.toString.call(arr) === "[object Array]";

//浅复制
var nums = [];
for (var i = 0; i < 100; ++i) {
    nums[i] = i + 1;
}

var samenums = nums;
nums[0] = 400;
console.log(samenums[0]); // 400

//深复制
function copy(arr1, arr2) {
    for (var i = 0; i < arr1.length; ++i) {
        arr2[i] = arr1[i];
    } 
}

var nums = [];
for (var i = 0; i < 100; ++i) {
    nums[i] = i + 1;
}
var samenums = [];
copy(nums, samenums);
nums[0] = 400;
console.log(samenums[0]); // 1

//添加数组元素,将一个元素添加到数组末尾
function pushArr(arr, newnum) {
    arr[arr.length] = newnum;
    return arr;
}
var num = [1, 2, 3, 4, 5];
console.log(pushArr(num, 6)); //[1, 2, 3, 4, 5, 6]

//push() 
var num = [1, 2, 3, 4, 5];
num.push(6);
console.log(num); //[1, 2, 3, 4, 5, 6]

//添加数组元素,将一个元素添加到数组开头
function unshiftArr(arr, newnum) {
    var len = arr.length;
    for(var i = len; i >= 0; --i) {
        arr[i] = arr[i - 1];
    }
    arr[0] = newnum;
    
    return arr;
}
var arr = [2, 3, 4, 5];
console.log(unshiftArr(arr, 1));

//unshift() 
var num = [2, 3, 4, 5];
num.unshift(1);
console.log(num); //[1, 2, 3, 4, 5]

//删除数组元素,删除数组末尾元素
function popArr(arr) {
    var len = arr.length;
    arr.length = len - 1;
    return arr;
}
var num = [1, 2, 3, 4, 5, 9];
console.log(popArr(num)); //[1, 2, 3, 4, 5]

//pop() 
var num = [1, 2, 3, 4, 5, 9];
num.pop();
console.log(num); //[1, 2, 3, 4, 5]

//删除数组元素,删除数组的第一位元素
function shiftArr(arr) {
    var newarr = [];
    var len = arr.length;
    for(var i = 0; i < len; i++) {
        newarr[i] = arr[i+1];
    }
    newarr.length = len - 1;
    
    return newarr;
}
var num = [9, 1, 2, 3, 4, 5];
console.log(shiftArr(num)); 

//shift() 
var num = [9, 1, 2, 3, 4, 5];
num.shift();
console.log(num); //[1, 2, 3, 4, 5]

//添加和删除操作
//splice()
//1. 起始索引(希望开始添加元素的地方)
//2. 需要删除元素的个数(添加时设置为0)
//3. 想要添加进数组的元素

var num = [1, 2, 3, 7, 8, 9];
var newElements = [4, 5, 6];
num.splice(3, 0, newElements);
console.log(num); //[1, 2, 3, Array[3], 7, 8, 9]
//---
var num = [1, 2, 3, 7, 8, 9];
num.splice(3, 0, 4, 5, 6);
console.log(num); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

//splice()删除
var num = [1, 2, 3, 100, 200, 300, 400, 4, 5];
num.splice(3, 4);
console.log(num); //[1, 2, 3, 4, 5]

//sort()排序
function compare(num1, num2) {
    return num1 - num2;
}
var num = [3, 1, 2, 100, 4, 200];
num.sort(compare);
console.log(num); //[1, 2, 3, 4, 100, 200]

//迭代器方法 (对数组中的每一个元素应用一个函数，可以返回一个值，一组值，或者一个新数组)

//forEach()
function square(num) {
    console.log(num, num * num);
}

var num = [1, 2, 3, 4, 5];
num.forEach(square);
// 1 1
// 2 4
// 3 9
// 4 16
// 5 25

//reduce()方法接受一个函数，返回一个值。
//该方法会从一个累加值开始，不断对累加值和数组中的后续元素调用该函数，直到数组中的最后一个元素， 最后返回得到的累加值

function add(total, cur) {
    return total + cur;
}

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = num.reduce(add);
console.log(sum); //55

//map() 返回一个新数组，该数组的元素是对原有元素的应用某个函数得到的结果
function curve(grade) {
    return grade += 5;
}

var grades = [65, 70, 75, 80, 85];
var newGrades = grades.map(curve);
console.log(newGrades); //[70, 75, 80, 85, 90]

//filter() 传入一个返回值为布尔值的函数，和every()方法不同的是，当对数组中的所有元素应用该函数，结果均为true时，该方法返回一个新数组，该数组包含应用该函数后结果为true的元素。
function isEven(num) {
    return num % 2 == 0;
}
function isOdd(num) {
    return num % 2 != 0;
}

var num = [];
for(var i = 0; i < 20; ++i) {
    num[i] = i + 1;
} 
var evens = num.filter(isEven);
console.log("Even Number: " + evens);
var odds = num.filter(isOdd);
console.log("Odd Number: " + odds);

// Even Number: 2,4,6,8,10,12,14,16,18,20
// Odd Number: 1,3,5,7,9,11,13,15,17,19

//使用 filter() 过滤字符串 
function afterc(str) {
    if (str.indexOf("cie") > -1) {
        return true;
    }
    return false;
}

var words = ["recieve", "deceive", "percieve", "deceit", "concieve"];
var misspell = words.filter(afterc);
console.log(misspell); // ["recieve", "percieve", "concieve"]


//建立初始化二维数组
function matrix(numrows, numcols, initial) {
    var arr = [];
    for (var i = 0; i < numrows; ++i) {
        var cols = [];
        for (var j = 0; i < numcols; ++j) {
            cols[j] = initial;
        }
        arr[i] = cols;
    }
    return arr;
}

var num = matrix(5, 5, 0);
console.log(num[2][4]); //0

//对象中的数组
function weekTemps() {
    this.dataStore = [];
    this.add = add;
    this.average = average;
}
function add(temp) {
    this.dataStore.push(temp);
}
function average() {
    var total = 0;
    for (var i = 0; i < this.dataStore.length; ++i) {
       total += this.dataStore[i];
    }
    return total / this.dataStore.length;
}

var thisWeek = new weekTemps();
thisWeek.add(55);
thisWeek.add(65);
thisWeek.add(45);
thisWeek.add(50);
thisWeek.add(60);
console.log(thisWeek.average()); //55
 
