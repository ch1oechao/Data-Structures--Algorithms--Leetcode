//栈的实现
function Stack() {
    var items = []; 

    this.push = function(elem) {
        item.push(elem);
    }

    this.pop = function() {
        return items.pop();
    }

    this.peek = function() {
        return items[items.length - 1];
    }

    this.isEmpty = function() {
        return +items.length === 0;
    }

    this.size = function() {
        return items.length;
    }

    this.clear = function() {
        // items = [];
        items.length = 0;
    }

    this.print = function() {
        console.log(items.toString());
    }

}

//应用

//1.数制间的相互转换
function baseConverter(num, base) {
    var remStack = new Stack(),
        rem,
        baseString = '',
        digits = '0123456789ABCDEF';

    while (num > 0) {
        rem = Math.floor(num % base);
        remStack.push(rem);
        num = Math.floor(num / base);
    }

    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }

    return baseString;
}

//2.判断给定的字符串是否是回文
function isPalindrome(word) {
    var s = new Stack(),
        rWord = '';
    
    for (var i = 0; i < word.length; i++) {
        s.push(word[i]);
    }

    while (!s.isEmpty()) {
        rWord += s.pop();
    }

    return word === rWord;
}

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

//使用栈模拟递归过程
function fact(n) {
    var s = new Stack(),
        product = 1;

    while (n > 1) {
        s.push(n--);
    }

    while (!s.isEmpty()) {
        product *= s.pop();
    }
    return product;
} 
