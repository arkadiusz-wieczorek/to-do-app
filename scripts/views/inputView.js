(function(global) {

    var inputView;

    if (!global.UAM) {
        global.UAM = {};
    }

    UAM.inputView = function(content) {
        UAM.EventEmitter.call(this);
        this.input = content.querySelector('#new_task');

        this.addButton = content.querySelector('#add_task');


        this.addNewTask = function() {
            task_text = this.input.value;
            this.input.value = "";
            if (task_text) { this.emit("add-task-button-clicked", task_text); }
        }
        this.addButton.addEventListener('click', this.addNewTask.bind(this))
    }

    UAM.utils.inherits(UAM.EventEmitter, UAM.inputView);

}(window))
