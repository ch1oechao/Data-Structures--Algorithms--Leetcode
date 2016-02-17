// 字典 是一种以键-值对形式存储数据的数据结构。

function Dictionary() {
    var items = {};

    this.has = function(key) {
        return key in items;
    };

    this.set = function(key, val) {
        items[key] = val;
    };

    this.remove = function(key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    };

    this.get = function(key) {
        return this.has(key) ? items[key] : undefined;
    };

    this.values = function() {
        var values = [];
        for (var k in items) {
            if (this.has(k)) {
                values.push(items[k]);
            }
        }
        return values;
    };

    this.keys = function() {
        return Object.key(items);
    };

    this.getItem = function() {
        return items;
    };

}
 