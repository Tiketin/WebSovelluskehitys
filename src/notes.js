let notes = (function() {
    let list = [];

    return {
        add: function(note) {
            if (note) {
                if (note.trim().length) {
                    let item = {timestamp: Date.now(), text: note};
                    list.push(item);
                    return true;
                }
            }
            return false;
        },
        remove: function(index) {
            if (index) {
                list.splice(index, 1);
                return true;
            }
            return false;
        },
        count: function() {
            return list.length;
        },
        list: function() {},
        find: function(str) {
            if(str) {
                list.indexOf(str);
                return true;
            }
            return false;
        },
        clear: function() {
            list.splice(0, list.length);
        }
    }
}());