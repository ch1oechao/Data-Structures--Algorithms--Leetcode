// 集合 由一组无序但彼此之间又有一定相关性的成员构成的
// 集合中的成员是无序的；集合中不允许相同的成员存在

// 并集 将两个集合中的成员进行合并，得到一个新的集合
// 交集 两个集合中共存在的成员组成一个新的集合
// 补集 属于一个集合而不属于另一个集合的成员组成的集合

function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union = union;
    this.intersect = intersect;
    this.subset = subset;
    this.difference = difference;
    this.show = show;
}


// 添加
function add() {
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true;
    }
    else {
        return false;
    }
}

// 移除
function remove(data) {
    var pos = this.dataStore.indexOf(data);
    if (pos > -1) {
        this.dataStore.splice(pos, 1);
        return true;
    }
    else {
        return false;
    }
}

// 显示
function show() {
    return this.dataStore;
}

// 包含某元素
function contains(data) {
    if (this.dataStore.indexOf(data) > -1) {
        return true;
    }
    else {
        return false;
    }
}

// 并集
function union(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
        tempSet.add(this.dataStore[i]);
    }
    for (var i = 0; i < set.dataStore.length; ++i) {
        if (!tempSet.contains(set.dataStore[i])) {
            tempSet.dataStore.push(set.dataStore[i]);
        }
    }
    return tempSet;
}

// 交集
function intersect(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

// 数组长度
function size() {
    return this.dataStore.length;
}

//判断一个集合是否是另一个集合的子集
function subSet(set) {
    if (this.size() > set.size()) {
        return false;
    }
    else {
        for (var member in this.dataStore) {
            if (!set.contains(member)) {
                return false;
            }
        }
    }
    return true;
}

// 补集
function difference(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (!set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tmepSet;
}
 
