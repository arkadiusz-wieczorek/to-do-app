window.addEventListener('DOMContentLoaded', function () {

	var store = new UAM.Store();

	//views
	var inputView = new UAM.inputView(document.querySelector('#inputView'));
	var listView = new UAM.listView(document.querySelector('#listView'));
	var footerView = new UAM.footerView(document.querySelector('#footerView'));
	
	//controlers
	var inputCtrl = new UAM.inputCtrl(inputView, store);
	var listCtrl = new UAM.listCtrl(listView, store);
	var footerCtrl = new UAM.footerCtrl(footerView, store);
});
