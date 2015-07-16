// 链表 是由一组节点组成的集合。每个节点都使用一个对象的引用指向它的后继。指向另外一个节点的引用叫做链。
// 数组元素靠它们的位置进行引用，链表元素是依靠互相之间的关系进行引用。

// Node类
function Node(element) {
    this.element = element;
    this.next = null;
}

// LinkedList类
function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.remove = remove;
    this.findPrevious = findPrevious;
}

function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

function display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

function findPrevious(item) {
    var currNode = this.head;
    while (!(currNode.next == null) && 
            (currNode.next.element != item)) {
        currNode = currNode.next;        
    } 
    return currNode;
}

function remove(item) {
    var prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
        prevNode.next = prevNode.next.next;
    }
}


// test
var words = new LList();
words.insert("Hello", "head");
words.insert("World", "Hello");
words.insert("Chen", "World");
words.display();
// Hello
// World
// Chen

words.remove("World");
words.display();
// Hello
// Chen


/* -------------------------------------------------------------------------------*/

// 双向链表
function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}

function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.remove = remove;
    this.findLast = findLast;
    this.dispReverse = dispReverse;
}

function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

function display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
}

function remove(item) {
    var currNode = this.find(item);
    if (!(currNode.next == null)) {
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}

function findLast() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        currNode = currNode.next;
    }
    return currNode;
}

// 反序显示双向链表元素
function dispReverse() {
    var currNode = this.head;
    currNode = this.findLast();
    while (!(currNode.previous == null)) {
        console.log(currNode.element);
        currNode = currNode.previous;
    }
}

// test
var words = new LList();
words.insert("Hello", "head");
words.insert("World", "Hello");
words.insert("Chen", "World");
words.display();
// Hello
// World
// Chen

words.remove("World");
words.display();
words.dispReverse();
// Hello
// Chen
// Chen
// Hello


/* -------------------------------------------------------------------------------*/

// 循环链表
function LList() {
    this.head = new Node("head");
    this.head.next = this.head;
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findPrevious = findPrevious;
    this.remove = remove;
}

function display() {
    var currNode = this.head;
    while (!(currNode.next == null) && 
           !(currNode.next.element == "head")) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

/* -------------------------------------------------------------------------------*/

// 练习

//1. 在链表中向前移动n个节点
function advance(n, element) {
    var currNode = this.find(element);
    while (n > 0) {
        currNode = currNode.previous;
        n--;
    }
    return currNode;
}

//2. 在双向链表中向后移动n个节点
function back(n, element) {
    var currNode = this.find(element);
    while (n > 0) {
        currNode = currNode.next;
        n--;
    }
    return currNode;
}

//3. 只显示当前节点
function show() {
    
}
 
