function HashTable() {

    var table = [];

    var loseloseHashCode = function(key) {
        var hash  = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };

    var djb2HashCode = function(key) {
        var hash = 5381;
        for (var i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i);
        }
        return hash % 1013;
    };

    /**
     * 基于 djb2HashCode 实现 
     * 简单版
     */
    this.put = function(key, val) {
        var pos = djb2HashCode(key);
        console.log(pos + ' -> ' + val);
        table[pos] = val;
    };

    this.get = function(key) {
        return table[djb2HashCode(key)];
    };

    this.remove = function(key) {
        table[djb2HashCode(key)] = undefined;
    };

    this.print = function() {
        for (var i = 0; i < table.length; i++) {
            if (table[i] !== undefined) {
                console.log(i + ': ' table[i]);
            }
        }
    };

    /**
     * 基于 djb2HashCode 实现 
     * 开链法 需要 LinkedList 类
     */
    
    // 需要新的辅助类表示将要加入的链表实例元素
    // 在 TableHash 内部定义
    var ValuePairs = function(key, val) {
        this.key = key;
        this.val = val;

        this.toString = function() {
            return '[ ' + this.key + ' - ' + this.val + ' ]';
        };
    };

    this.put = function(key, val) {
        var pos = djb2HashCode(key);

        if (table[pos] === undefined) {
            table[pos] = new LinkedList();
        }

        table[pos].append(new ValuePairs(key, val));
    };

    this.get = function(key) {
        var pos = djb2HashCode(key);

        if (table[pos] !== undefined) {
            var cur = table[pos].getHead();
        }

        while (cur.next) {
            if (cur.elem.key === key) {
                return cur.elem.val;
            }
            cur = cur.next;
        }

        if (cur.elem.key === key) {
            return cur.elem.val;
        }

        return undefined;
    };

    this.remove = function(key) {
        var pos = djb2HashCode(key);

        if (table[pos] !== undefined) {
            var cur = table[pos].getHead();
            while (cur.next) {
                if (cur.elem.key === key) {
                    table[pos].remove(cur.elem);
                    if (table[pos].isEmpty()) {
                        table[pos] = undefined;
                    }
                    return true;
                }
                cur = cur.next;
            }

            if (cur.elem.key === key) {
                table[pos].remove(cur.elem);
                if (table[pos].isEmpty()) {
                    table[pos] = undefined;
                }
                return true;
            }
        }
        return false;
    };

    /**
     * 基于 djb2HashCode 实现 
     * 线性探测法
     */
    this.put = function(key, val) {
        var pos = djb2HashCode(key);

        if (table[pos] === undefined) {
            table[pos] = new ValuePairs(key, val);
        } else {
            var index = ++pos;
            while (table[index] !== undefined) {
                index++;
            }
            table[index] = new ValuePairs(key, val);
        }
    }

    this.get = function(key) {
        var pos = djb2HashCode(key);

        if (table[pos] !== undefined) {
            if (table[pos].key === key) {
                return table[pos].val;
            } else {
                var index = ++pos;
                while (table[index] === undefined
                    || table[index].key !== key) {
                    index++;
                }
                if (table[index].key === key) {
                    return table[index].val;
                }
            }
        }
        return undefined;
    }

    this.remove = function(key) {
        var pos = djb2HashCode(key);

        if (table[pos] !== undefined) {
            if (table[pos].key === key) {
                table[index] === undefined;
            } else {
                var index = ++pos;
                while (table[index] === undefined
                    || table[index].key !== key) {
                    index++;
                }
                if (table[index].key === key) {
                    table[index] === undefined;
                }
            }
        }
    }

}
 