//实现列表类

function List() {
    this.listSize = 0; //[属性] 列表的元素个数
    this.pos = 0; //[属性] 列表当前位置
    this.dataStore = []; //初始化一个空数组来保存列表元素
    this.clear = clear; //[方法] 清空列表中的所有元素
    this.find = find; //[方法] 查找元素
    this.toString = toString; //[方法] 返回列表的字符串形式
    this.insert = insert; //[方法] 在现有元素后插入新元素
    this.append = append; //[方法] 在列表末尾添加新元素
    this.remove = remove; //[方法] 从列表中删除元素
    this.front = front; //[方法] 将列表的当前位置移动到第一个元素
    this.end = end; //[方法] 将列表的当前位置移动到最后一个元素
    this.prev = prev; //[方法] 将当前位置后移一位
    this.next = next; //[方法] 将当前位置前移一位
    this.length = length; //[属性] 返回列表中的元素个数
    this.currPos = currPos; //[方法] 返回列表的当前位置
    this.moveTo = moveTo; //[方法] 将当前位置移动到指定位置
    this.getElement = getElement; //[方法] 返回当前位置的元素
    this.contains = contains; //[方法] 是否包含指定元素
}

// append() 给列表添加元素
function append(element) {
    this.dataStore[this.listSize++] = element;
}

// find() 从列表中查找某一元素，若有该元素，返回元素所在位置，若无，返回-1
function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

// remove() 从列表中删除元素
function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

// length() 列表中有多少元素
function length() {
    return this.listSize;
}

// toString() 显示列表中的元素
function toString() {
    return this.dataStore;
}

// insert() 向列表中某元素前插入一个元素
function insert(element, before) {
    var insertPos = this.find(before);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

// clear() 清空列表中的所有元素
function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

//contains() 判断给定值是否在列表中
function contains() {
    for (var i = 0; i < this.dataStore.length; ++i) {
        return true;
    }
    return false;
}

//遍历列表

function front() {
    this.pos = 0;
    return this.pos;
}

function end() {
    this.pos = this.listSize - 1;
    return this.pos;
}

function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
    return this.pos;
}

function next() {
    if (this.pos < this.listSize - 1) {
        ++this.pos;
    }
    return this.pos;
} 

function currPos() {
    return this.pos;
}

function moveTo(pos) {
    this.pos = pos;
}

function getElement() {
    return this.dataStore[this.pos];
}

//test
var names = new List();
names.append("Nice");
names.append("To");
names.append("Meet");
names.append("You");
console.log(names.toString()); // ["Nice", "To", "Meet", "You"]
names.remove("You");
console.log(names.toString()); // ["Nice", "To", "Meet"]

names.front();
console.log(names.getElement()); // Nice
names.next();
console.log(names.getElement()); // To

//使用迭代器访问列表
//有BUG...
for (names.front(); names.currPos() < names.length(); names.next()) {
    console.log(names.getElement());
}

for (names.end(); names.currPos() >= 0; names.prev()) {
    console.log(names.getElement());
}
 
