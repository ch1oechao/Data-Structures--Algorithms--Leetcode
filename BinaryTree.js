// 树 一种非线性的数据结构 以分层的方式存储数据 被用来存储具有层级关系的数据
// 由一组以边连接的节点组成

// 二叉树 每个节点的子节点不允许超过两个
// 二叉查找树 相对较小的值保存在左节点 较大的值保存在右节点

function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
    this.count = 1;
}

function show() {
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
}

function insert(data) {
    var n = new Node(data, null, null);
    if (this.root == null) {
        this.root = n;
    }
    else {
        var current = this.root;
        var parent;
        while(true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            }
            else {
                current = current.right;
                if (current == null) {
                    parrent.right = n;
                    break;
                }
            }
        }
    }
}


// 遍历二叉树
// 遍历BST的方式：中序、先序和后序

//中序
function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left);
        putstr(node.show() + " ");
        inOrder(node.right);
    }
}

// 先序
function preOrder(node) {
    if (!(node == null)) {
        putstr(node.show() + " ");
        preOrder(node.left);
        preOrder(node.right);
    }
}

// 后序
function postOrder(node) {
    if (!(node == null)) {
        postOrder(node.left);
        postOrder(node.right);
        putstr(node.show() + " ");
    }
}

//  二叉查找树查找

// 查找最小值
function getMin() {
    var current = this.root;
    while (!(current.left == null)) {
        current = current.left;
    }
    return current.data;
}

// 查找最大值
function getMax() {
    var current = this.root;
    while (!(current.right == null)) {
        current = current.right;
    }
    return current.data;
}

// 查找指定值
function find(data) {
    var current = this.root;
    while (current != null) {
        if (current.data == data) {
            return current;
        }
        else if (data < current.data) {
            current = current.left;
        }
        else {
            current = current.right;
        }
    }
    return null;
}

//  删除节点
function remove(data) {
    root = removeNode(this.root, data);
}

function removeNode(node, data) {
    if (node == null) {
        return null;
    }
    if (data == node.data) {
        // 没有子节点
        if (node.left == null && node.right == null) {
            return null;
        }
        // 没有左子节点的节点
        if (node.left == null) {
            return node.right;
        }
        // 没有右子节点的节点
        if (node.right = null) {
            return node.left;
        }
        // 有两个子节点的节点
        var tempNode = getSmallest(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    }
    else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    }
    else {
        node.right = removeNode(node.right, data);
        return node;
    }
}


// 出现次数计数
function update(data) {
    var grade = this.find(data);
    grade.count++;
    return grade;
}
 
