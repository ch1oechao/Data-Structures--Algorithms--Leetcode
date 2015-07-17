// 散列 一种常用的数存储技术，散列后的数据可以快速地插入或取用。
// 散列使用的数据结叫做散列表
// 在散列表中插、删除和取用数据都非常快，但是对于查找操作来说却效率低下。

// 散列表基于数组进行设计，对数组大小常见的限制时: 数组长度应该是一个质数。
// 使用散列表存储数据时， 通过一个散列函数将键映射为一个数组，这个数字的范围是0到散列表的长度。

// 碰撞 存在将两个键映射成同一个值的可能


function HashTable() {
    this.table = new Array(137);
    //this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;
}


function simpleHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; ++i) {
        total += data.charCodeAt(i);
    }
    return total % this.table.length;
}

function betterHash(string) {
    var H = 37;
    var total = 0;
    for (var i = 0; i < string.length; ++i) {
        total += H * total + string.charCodeAt(i);
    }
    total = total % this.table.length;
    if (total < 0) {
        total += this.table.length - 1;
    }
    return parseInt(total);
}

function put(data) {
    var pos = this.betterHash(data);
    this.table[pos] = data;
}

function get(key) {
    return this.table[this.betterHash(key)];
}

function showDistro() {
    var n = 0;
    for (var i = 0; i < this.table.length; ++i) {
        if (this.table[i] != undefined) {
            console.log(i + ": " + this.table[i]);
        }
    }
}



/*----------------------------------------------碰撞处理----------------------------------------------*/
// 如果数组大小是待存储数据的1.5倍，则使用开链法
// 如果数组大小是待存储数据的两倍或两倍以上，则使用线性探测法


// 开链法
// 当发生碰撞时，仍希望将键存储到通过散列算法产生的索引位置上
// 开链法是指实现散列表的底层数组中，每个数组元素又是一个新的数据结构。
// 使用这种技术，即使两个键值散列的值相同，依然保存在同样的位置。

function buildChains() {
    for (var i = 0; i < this.table.length; ++i) {
        this.table[i] = new Array();
    }
}

// 修改显示函数 showDistro()
 function showDistro() {
     var n = 0;
     for (var i = 0; i < this.table.length; ++i) {
         if (this.table[i][0] != undefined) {
             console.log(i + ": " + this.table[i]);
         }
     } 
 }

// 重定义put()和get()方法
function put(key, data) {
    var pos = this.betterHash(key);
    var index = 0;
    if (this.table[pos][index] == undefined) {
        this.table[pos][index + 1] = data;
    }
    ++index;
    else {
        while (this.table[pos][index] != undefined) {
            ++index;
        }
        this.table[pos][index + 1] = data;
    }
} 

function get(key) {
    var index = 0;
    var hash = this.betterHash(key);
    if (this.table[pos][index] = key) {
        return this.table[pos][index + 1];
    }
    index += 2;
    else {
        while (this.table[pos][index] != key) {
            index += 2;
        }
        return this.table[pos][index + 1];
    }
    return undefined;
}


// 线性探测法
// 隶属于一种更一般化的散列技术：开放寻址散列
// 当发生碰撞时，线性探测法检查散列表中的下一个位置是否为空，若为空，就将数存入该位置
// 若位置不为空，则继续检查下一个位置，直到找到一个空的位置为止
// 每个散列表都会有很多空格单元，可以用来保存数据

// 在HashTable()加入 
this.values = [];

function put(key, data) {
    var pos = this.betterHash(key);
    if (this.table[pos] == undefined) {
        this.table[pos] = key;
        this.values[pos] = data;
    }
    else {
        while (this.table[pos] != undefined) {
            pos++;
        }
        this.table[pos] = key;
        this.values[pos] = data;
    }
}

function get(key) {
    var hash = -1;
    hash = this.betterHash(key);
    if (hash > -1) {
        for (var i = hash; this.table[hash] != undefined; i++) {
            if (this.table[hash] == key) {
                return this.values[hash];
            }
        }
    }
    return undefined;
}
 
