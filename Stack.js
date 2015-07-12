//栈 后入先出(LIFO, last-in-fist-out)
//push() 入栈
//pop() 出栈，找出最后的元素并删除
//peek() 只返回栈顶元素，不删除元素
//clear() 清除栈内元素
//length 栈内元素的个数
//empty 表示栈内是否包含元素

//栈的实现
function Stack() {
    this.dataStore = []; //保存栈内元素
    this.top = 0; //记录栈顶位置，初始化为0，标志栈顶对应数组起始位置为0
    this.push = push; 
    this.pop = pop; 
    this.peek = peek; 
    this.clear = clear;
    this.length = length;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function pop() {
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top - 1];
}

function length() {
    return this.top;
}

function clear() {
    this.top = 0;
}

//test
var s = new Stack();
s.push("Nice");
s.push("To");
s.push("Meet");
s.push("You");
console.log("length: " + s.length());
console.log(s.peek());


//应用

//1.数制间的相互转换
function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    }while (num > 0);
    var converted = "";
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}

var num = 32;
var base = 2;
var newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum);
// 32 converted to base 2 is 100000

num = 125;
base = 8;
var newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum);
// 125 converted to base 8 is 175

//2.判断给定的字符串是否是回文
function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; ++i) {
        s.push(word[i]);
    }
    var rWord = "";
    while (s.length() > 0) {
        rWord += s.pop();
    }
    if (word === rWord) {
        return true;
    }
    return false;
}

var word = "Hello";
console.log(isPalindrome(word)); // false
word = "racecar";
console.log(isPalindrome(word)); // true

//3.递归实现

//原始递归函数
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * arguments.callee(n - 1);
    }
}
console.log(factorial(5)); // 120

//使用栈模拟递归过程
function fact(n) {
    var s = new Stack();
    while (n > 1) {
        s.push(n--);
    }
    var product = 1;
    while (s.length() > 0) {
        product *= s.pop();
    }
    return product;
}
console.log(fact(5)); // 120

 
