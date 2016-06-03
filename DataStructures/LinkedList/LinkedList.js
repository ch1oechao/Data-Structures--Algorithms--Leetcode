// LinkedList

// 单向链表
function LinkedList() {

    var Node = function(elem) {
        this.elem = elem;
        this.next = null;
    };

    var length = 0,
        head = null;

    // 向链表尾部追加元素
    this.append = function(elem) {
        var node = new Node(elem),
            cur;

        if (head = null) {
            // 列表中的第一个节点
            head = node;
        } else {
            cur = head;
            // 循环列表，直到找到最后一项
            while (cur.next) {
                cur = cur.next;
            }
            // 找到最后一项，将其 next 赋为 node，建立连接
            cur.next = node;
        }

        // 更新列表长度
        length++;
    };

    // 在任意位置插入一个元素
    this.insert = function(pos, elem) {
        // 检查越界
        if (pos >= 0 && pos <= length) {
            var node  = new Node(elem),
                cur = head,
                prev,
                index = 0;

            // 在第一个位置添加
            if (pos === 0) {
                node.next = cur;
                head = node;
            } else {
                while (index++ < pos) {
                    prev = cur;
                    cur = cur.next;
                }
                node.next = cur;
                prev.next = node;
            }

            length++;

            return true;
        } else {
            return false;
        }

    };

    // 从链表移除元素
    this.removeAt = function(pos) {
        // 检查越界
        if (pos > -1 && pos < length) {
            var cur = head,
                prev,
                index = 0;
            // 移除第一项
            if (pos === 0) {
                head = cur.next;
            } else {
                while (index++ < pos) {
                    prev = cur;
                    cur = cur.next;
                }
                // 将 prev 与 cur 的下一项连接起来，跳过 cur 从而移除它
                prev.next = cur.next;
            }

            length--;

            return cur.elem;
        } else {
            return null;
        }
    };

    this.indexOf = function(elem) {
        var cur = head,
            index = -1;

        while (cur) {
            if (elem === cur.elem) {
                return index;
            }
            index++;
            cur = cur.next;
        }

        return -1;
    };

    this.remove = function(elem) {
        var index = this.indexOf(elem);
        return this.removeAt(index);
    };

    this.isEmpty = function() {
        return +length === 0;
    };

    this.size = function() {
        return length;
    };

    this.getHead = function() {
        return head;
    }

    this.print = function() {
        var cur = head,
            items = [];

        while (cur) {
            items.push(cur.elem);
            cur = cur.next;
        }

        return items.join(' ');
    };

}

// 双向链表
function DoublyLinkedList() {

    var Node = function(elem) {
        this.elem = elem;
        this.next = null;
        this.prev = null;
    }

    var length = 0,
        head = null,
        tail = null;

    this.append = function(elem) {
        var node = new Node(elem),
            cur,
            prev;

        if (head = null && tail = null) {
            head = node;
            tail = node;
        } else {
            cur = head;
            while (cur.next) {
                cur = cur.next;
            }
            cur.next = node;
            node.prev = cur;
            node.next = null;
            tail = node;
        }
        
        length++;
    };

    this.insert = function(pos, elem) {
        if (pos >= 0 && pos <= length) {
            var node = new Node(elem),
                cur = head,
                prev,
                index = 0;

            if (pos === 0) {
                if (!head) {
                    head = node;
                    tail = node;
                } else {
                    node.next = cur;
                    cur.prev = node;
                    head = node;
                }
            } else if (pos === length) {
                cur = tail;
                cur.next = node;
                node.prev = cur;
                tail = node;
            } else {
                while (index++ < pos) {
                    prev = cur;
                    cur = cur.next;
                }
                node.next = cur;
                prev.next = node;

                node.prev = prev;
                cur.prev = node;
            }

            length++;

            return true;
        } else {
            return false;
        }
    };

    this.removeAt = function(pos) {
        if (pos > -1 && pos < length) {
            var cur = head,
                prev,
                index = 0;
            if (pos === 0) {
                head = cur.next;
                if (length === 1) {
                    tail = null;
                } else {
                    head.prev = null;
                }
            } else if (pos === length - 1) {
                cur = tail;
                tail = cur.prev;
                tail.next = null;
            } else {
                while (index++ < pos) {
                    prev = cur;
                    cur = cur.next;
                }
                prev.next = cur.next;
                cur.next.prev = prev;
            }
            length--;
            return cur.elem;
        } else {
            return null;
        }
    }

}
