(function (global){

var footerCtrl;

UAM.footerCtrl = function(footerView, store){	
	store.on('store-changed-status', function(task_text, status, active){
		footerView.updateCountActiveTasks(active);
	})
	store.on('store-added-task', function(task_text, status, len){
		footerView.updateCountTasks(len);
	})
}

}(window));
