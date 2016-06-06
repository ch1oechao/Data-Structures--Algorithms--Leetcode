# Stack
栈是一种遵循后进先出(LIFO)原则的有序集合

新添加的或待删除的元素都保留在栈的末尾，称作栈顶，另一端称作栈底

在栈里，新元素都靠近栈顶，旧元素都靠近栈底

### 基本方法

`push(element(s))`

添加一个(或几个)新元素到栈顶

`pop()`

移除栈顶的元素，同时返回被移除的元素

`peek()`

返回栈顶的元素，不会对栈进行任何修改

`isEmpty()`

如果栈里没有任何元素就返回 true, 否则就返回 false

`clear()`

移除栈里的所有元素

`size()`

返回栈里的元素个数

`print()`

在控制台打印栈内所有元素