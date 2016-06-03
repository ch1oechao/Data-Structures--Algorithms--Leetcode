# HashTable

HashTable 也称作 HashMap 是 Dictionary 的一种散列实现方式

散列算法的作用是尽可能快地在数据结构中找到一个值

在散列表中插、删除和取用数据都非常快 但是对于查找操作来说却效率低下

### 基本方法

`put(key, val)`

向散列表添加一个新的项

`remove(key)`

根据键值从散列表中移除值

`get(val)`

返回根据键值检索到的特定的值

### 散列函数

散列函数的作用是给定一个键值 然后返回值在表中的地址

1.loseloseHashCode 简单散列函数

    var loseloseHashCode = function(key) {
        var hash  = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };

2.djb2HashCode 推荐散列函数

    var djb2HashCode = function(key) {
        var hash = 5381;
        for (var i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i);
        }
        return hash % 1013;
    };

### 碰撞处理

如果数组大小是待存储数据的1.5倍，则使用开链法

如果数组大小是待存储数据的两倍或两倍以上，则使用线性探测法


1. 开链法

   当发生碰撞时，仍希望将键存储到通过散列算法产生的索引位置上

   开链法是指实现散列表的底层数组中，每个数组元素又是一个新的数据结构

   使用这种技术，即使两个键值散列的值相同，依然保存在同样的位置


2. 线性探测法

   隶属于一种更一般化的散列技术：开放寻址散列

   当发生碰撞时，线性探测法检查散列表中的下一个位置是否为空，若为空，就将数存入该位置
   
   若位置不为空，则继续检查下一个位置，直到找到一个空的位置为止
   
   每个散列表都会有很多空格单元，可以用来保存数据



