// 散列 一种常用的数存储技术，散列后的数据可以快速地插入或取用。
// 散列使用的数据结叫做散列表
// 在散列表中插、删除和取用数据都非常快，但是对于查找操作来说却效率低下。

// 散列表基于数组进行设计，对数组大小常见的限制时: 数组长度应该是一个质数。
// 使用散列表存储数据时， 通过一个散列函数将键映射为一个数组，这个数字的范围是0到散列表的长度。

// 碰撞 存在将两个键映射成同一个值的可能


function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;
}


function simpleHash(data) {
    
}













 
