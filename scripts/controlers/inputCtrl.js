(function (global){

var inputCtrl;


UAM.inputCtrl = function(inputView, store){
	inputView.on("add-task-button-clicked",function(task_text){
		store.add(task_text);
	})
}

}(window));