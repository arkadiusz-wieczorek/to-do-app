(function(global) {

    var footerView;

    if (!global.UAM) {
        global.UAM = {};
    }

    UAM.footerView = function(content) {
        UAM.EventEmitter.call(this);
        this.content = content;

        this.updateCountTasks = function(count) {
            this.content.querySelector('#count-all-tasks').textContent = "All tasks: " + count;
        };

        this.updateCountActiveTasks = function(count) {
            this.content.querySelector('#count-active-tasks').textContent = "Active tasks: " + count;
        };
    }

    UAM.utils.inherits(UAM.EventEmitter, UAM.footerView);

}(window))
