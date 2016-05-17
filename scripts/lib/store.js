UAM.Store = function() {
    UAM.EventEmitter.call(this);
    this.data = [];
    this.list = [];
    this.tasksById = {};
    this.active = 0;
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

function guid() {
    function generate() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return generate();
}

function new_to_do(text) {
    this.text = text;
    this.status = false;
    this.id = guid();
    return this;
}

UAM.Store.prototype.add = function(text) {
    var newTask = new new_to_do(text);
    this.list.push(newTask);
    this.tasksById[newTask.id] = newTask;

    this.emit("store-added-task", newTask.text, newTask.status, this.list.length, newTask.id);
};

UAM.Store.prototype.updateStatus = function(id) {
    this.tasksById[id].status = !this.tasksById[id].status;
    if (this.tasksById[id].status) {
        this.active = this.active + 1;
    } else {
        this.active = this.active - 1;
    }
    this.emit("store-changed-status", this.tasksById[id].text, this.tasksById[id].status, this.active, this.tasksById[id].id);
};