// 对象构建集合
// 
/*--------------------------------------------------*/

function Set() {
    var items = {};

    this.has = function(val) {
        return items.hasOwnProperty(val);
        // return val in items;
    };

    this.add = function(val) {
        if (!this.has(val)) {
            items[val] = val;
            return true;
        }
        return false;
    };

    this.remove = function(val) {
        if (this.has(val)) {
            delete items[val];
            return true;
        }
        return false;
    };

    this.clear = function() {
        items = {};
    };

    // 计算集合大小
    // 
    // Object.key() 
    // 返回一个包含给定对象所有属性的数组
    // 
    this.size = function() {
        return Object.key(items).length;
    };
    // Or
    this.sizeLegacy = function() {
        var count = 0;
        for (var prop in items) {
            if (items.hasOwnProperty(prop)) {
                ++count;
            }
        }
        return count;
    };

    this.values = function() {
        return Object.keys(items);
    };
    // Or
    this.valuesLegacy = function() {
        var keys = [];
        for (var key in items) {
            keys.push(key);
        }
        return keys;
    };

    this.union = function(otherSet) {
        var unionSet = new Set();

        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        values = otherSet.values();
        for (var j = 0; j < values.length; j++) {
            unionSet.add(values[j]);
        }

        return unionSet;
    };

    this.intersection = function(otherSet) {
        var intersectionSet = new Set();

        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersection.add(values[i]);
            }
        }
        
        return intersectionSet;
    };

    this.difference = function(otherSet) {
        var differenceSet = new Set();

        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                differenceSet.add(values[i]);
            }
        }

        return differenceSet;
    };

    this.subset = function(otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        } else {
            var values = this.values();
            for (var i = 0; i < values.length; i++) {
                if (!otherSet.has(values[i])) {
                    return false;
                }
            }
            return true;
        }
    };
 
}



// 数组构建集合
// 
/*--------------------------------------------------*/

function Set() {

    this.dataStore = [];

    this.contains = function(data) {
        return this.dataStore.indexOf(data) > -1
    }

    this.add = function() {
        if (!this.contains(data)) {
            this.dataStore.push(data);
            return true;
        } else {
            return false;
        }
    };

    this.remove = function(data) {
        var pos = this.dataStore.indexOf(data);
        if (pos > -1) {
            this.dataStore.splice(pos, 1);
            return true;
        } else {
            return false;
        }
    };

    this.size = function() {
        return this.dataStore.length;
    };

    this.union = function(set) {
        var tempSet = new Set();
        for (var i = 0; i < this.dataStore.length; i++) {
            tempSet.add(this.dataStore[i]);
        }
        for (var i = 0; i < set.dataStore.length; i++) {
            tempSet.add(set.dataStore[i]);
        }
        return tempSet;
    };

    this.intersect = function(set) {
        var tempSet = new Set();
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (set.contains(this.dataStore[i])) {
                tempSet.add(this.dataStore[i]);
            }
        }
        return tempSet;
    };

    //判断一个集合是否是另一个集合的子集
    this.subset = function(set) {
        if (this.size() > set.size()) {
            return false;
        } else {
            for (var member in this.dataStore) {
                if (!set.contains(member)) {
                    return false;
                }
            }
        }
        return true;
    };

    this.difference = function(set) {
        var tempSet = new Set();
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (!set.contains(this.dataStore[i])) {
                tempSet.add(this.dataStore[i]);
            }
        }
        return tmepSet;
    };

    this.show = function() {
        return this.dataStore;
    };

}
