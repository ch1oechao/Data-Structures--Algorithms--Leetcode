// 字典 是一种以键-值对形式存储数据的数据结构。

function Dictionary() {
    this.datastore = new Array();
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
}

function add(key, value) {
    this.datastore[key] = value;
}

function find(key) {
    return this.datastore[key];
}

function remove(key) {
    delete this.datastore[key];
}

function showAll() {
    for (var key in this.datastore) {
        console.log(key + " -> " + this.datastore[key]);
    }
}

function count() {
    var n = 0;
    for (var key in this.datastore) {
        ++n;
    }
    return n;
}

function clear() {
    for (var key in this.datastore) {
        delete this.datastore[key];
    }
}



// test
var nums = new Dictionary();
nums.add("One","1");
nums.add("Two","2");
nums.add("Three","3");
console.log(nums.find("Two")); //2
nums.remove("Three");
nums.showAll();
// One -> 1
// Two -> 2

 
