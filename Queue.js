//队列 先进先出(FIFO, first-in-first-out) 

//实现Queue类
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.count = count;
}

// enqueue() 在队尾添加一个元素
function enqueue(element) {
    this.dataStore.push(element);
}

// dequeue() 删除队首的元素
function dequeue() {
    return this.dataStore.shift();
}

//读取队首和队尾的元素
function front() {
    return this.dataStore[0];
}
function back() {
    return this.dataStore[this.dataStore.length - 1];
}

// toString() 显示队列内的所有元素
function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + " ";
    }
    return retStr;
}

// empty() 判断队列是否为空
function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    return false;
}

// count() 队列长度
function count() {
    return this.dataStore.length;
}


//test
var q = new Queue();
q.enqueue("Nice");
q.enqueue("To");
q.enqueue("Meet");
q.enqueue("You");
console.log(q.toString()); // Nice To Meet You 
q.dequeue();
console.log(q.toString()); // To Meet You 
console.log("Front of Queue: " + q.front()); // Front of Queue: To
console.log("Back of Queue: " + q.back()); // Back of Queue: You

//1.使用队列解决舞伴分配问题
function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}

function getDancers(males, females) {
    var names = ["F One", "M Two", "M Three", "M Four", "F Five", "M Six", "F Seven", "M Eight", "M Nine", "M Ten", "F Eleven"];
    var len = names.length;
    for (var i = 0; i < len; ++i) {
        names[i] = names[i].trim();
    }
    for (var i = 0; i < len; ++i) {
        var dancer = names[i].split(" ");
        var sex = dancer[0];
        var name = dancer[1];
        if (sex === "F") {
            females.enqueue(new Dancer(name, sex));
        }
        else {
            males.enqueue(new Dancer(name, sex));
        }
    }
}

function dance(males, females) {
    console.log("The dance partners are: ");
    while (!females.empty() && !males.empty()) {
        var lady = females.dequeue(); 
        var gentleman = males.dequeue();
        console.log("Female dancer is: " + lady.name + " and Male dancer is: " + gentleman.name);
    }
}

//test
var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if (maleDancers.count() > 0) {
    console.log("There are " + maleDancers.count() + " male dancers waiting to dance.");
}
if (femaleDancers.count() > 0) {
    console.log("There are " + femaleDancers.count() + " male dancers waiting to dance.");
}

// The dance partners are: 
// Female dancer is: One and Male dancer is: Two
// Female dancer is: Five and Male dancer is: Three
// Female dancer is: Seven and Male dancer is: Four
// Female dancer is: Eleven and Male dancer is: Six
// There are 3 male dancers waiting to dance.

//2.使用队列对数据进行排序，基数排序

function distribute(nums, queue, n, digit) {
    for (var i = 0; i < n; ++i) {
        if (digit == 1) {
            queues[nums[i] % 10].enqueue(nums[i]);
        }
        else {
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }
}
function collect(queues, nums) {
    var i = 0;
    for (var digit = 0; digit < 10; ++digit) {
        while (!queues[digit].empty()) {
            nums[i++] = queues[digit].dequeue();
        }
    }
}
function dispArray(arr) {
    var arrs = "";
    for (var i = 0; i < arr.length; ++i) {
        arrs += arr[i] + " ";
    }
    console.log(arrs);
}

var queues = [];
for (var i = 0; i < 10; ++i) {
    queues[i] = new Queue();
}
var nums = [];
for (var i = 0; i < 10; ++i) {
    nums[i] = Math.floor(Math.floor(Math.random() * 101));
}
console.log("Before radix sort: ");
dispArray(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log("After radix sort: ");
dispArray(nums);

// Before radix sort: 
// 25 26 70 99 64 70 42 14 3 0 18 
// After radix sort: 
// 0 3 14 18 26 42 64 70 70 99


//3.优先队列

//code定义等级
function Persons(name, code) {
    this.name = name;
    this.code = code;
}

function dequeue() {
    if(this.dataStore.length > 0) {
        var priority = this.dataStore[0].code;
        var pos = 0;
        for (var i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i].code < priority) {
                pos = i;
            }
        }
        return this.dataStore.splice(pos, 1);
    }
    var NONE = "No one";
    return NONE;
}

function toString() {
    var retStr = "";
    if (this.count() > 0) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            retStr += this.dataStore[i].name + " code: " + this.dataStore[i].code + "\n";
        }
        return retStr;
    }
    var NONE = "No one";
    return NONE;
}

var p = new Persons("One", 1);
var ed = new Queue();
ed.enqueue(p);
p = new Persons("Two", 2);
ed.enqueue(p);
p = new Persons("Three", 3);
ed.enqueue(p);
p = new Persons("Four", 4);
ed.enqueue(p);
p = new Persons("Five", 5);
ed.enqueue(p);
console.log(ed.toString());

var gone = ed.dequeue();
console.log(gone + " is gone."); //has bug...
console.log(ed.toString() + " is left.");
 
