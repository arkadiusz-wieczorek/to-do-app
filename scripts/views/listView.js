(function(global) {


    var listView;


    if (!global.UAM) {
        global.UAM = {};
    }

    UAM.listView = function(content) {
        UAM.EventEmitter.call(this);
        this.ListTasks = [];

        this.addTaskToList = function(text, status, id) {
            var node = document.createElement('div');
            node.appendChild(document.createTextNode("[#" + id));
            node.appendChild(document.createTextNode("] "));
            node.appendChild(document.createTextNode(text));
            content.appendChild(node);
            this.ListTasks[id] = node;
            
            var clickOnTask = function() {
                this.emit("task-on-list-clicked", id);
            }
            node.addEventListener('click', clickOnTask.bind(this));
        }

        this.updateStatus = function(text, status, id) {
            currentTask = this.ListTasks[id];
            if (status) {
                currentTask.setAttribute('class', "active_element");
            } else {
                currentTask.setAttribute('class', "");
            }
        }
    }

    UAM.utils.inherits(UAM.EventEmitter, UAM.listView);


}(window))