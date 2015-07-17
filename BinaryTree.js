// 树 一种非线性的数据结构 以分层的方式存储数据 被用来存储具有层级关系的数据
// 由一组以边连接的节点组成

// 二叉树 每个节点的子节点不允许超过两个
// 二叉查找树 相对较小的值保存在左节点 较大的值保存在右节点

function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
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
        inOrder(node.right);
    }
}





