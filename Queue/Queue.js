//队列 先进先出(FIFO, first-in-first-out) 

//实现Queue类
function Queue() {
    var items = [];

    this.enqueue = function(elem) {
        items.push(elem);
    };

    this.dequeue = function() {
        return items.shift();
    };

    this.front = function() {
        return items[0];
    };

    this.end = function() {
        return items[items.length - 1];
    };

    this.isEmpty = function() {
        return +items.length === 0;
    };

    this.size = function() {
        return items.length;
    };

    this.print = function() {
        console.log(items.toString());
    };
}

// 优先队列
// 按优先级排列元素

function PriorityQueue() {
    var items = [];

    function QueueElement(elem, priority) {
        this.elem = elem;
        this.priority = priority;
    }

    this.enqueue = function(elem, priority) {
        var queueElement = new QueueElement(elem, priority);

        if (this.isEmpty()) {
            items.push(queueElement);
        } else {
            var added = false;
            for (var i = 0; i < items.length; i++) {
                if (queueElement.priority < items[i].priority) {
                    items.splice(i, 0, queueElement);
                    added = true;
                    break;
                }
            }
            if (!added) {
                items.push(queueElement);
            }
        }
    };

    this.dequeue = function() {
        return items.shift();
    };

    this.front = function() {
        return items[0];
    };

    this.end = function() {
        return items[items.length - 1];
    };

    this.isEmpty = function() {
        return +items.length === 0;
    };

    this.size = function() {
        return items.length;
    };

    this.print = function() {
        items.forEach(function(item) {
            console.log(JSON.stringify(item));
        });
    };
}

// 循环队列
// 击鼓传花

function hotPotato(nameList, times) {
    var queue = new Queue(),
        eliminated = '';

    for (var i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }

    while (queue.size() > 1) {
        for (var j = 0; j < times; j++) {
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated + ' is catched!');
    }

    return queue.dequeue();
} 
