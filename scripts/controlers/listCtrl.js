(function (global){

var listCtrl;

UAM.listCtrl = function(listView, store){
	listView.on('task-on-list-clicked', function(id){
		store.updateStatus(id);
	})
	store.on("store-changed-status", function(task_text, status, active, id){
		listView.updateStatus(task_text, status, id);
	})
	store.on('store-added-task',function(task_text, status, len, id){ 
		listView.addTaskToList(task_text, status, id);
	})
}

}(window));