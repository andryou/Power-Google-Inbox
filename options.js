document.addEventListener('DOMContentLoaded', function () {
	loadOptions();
	document.getElementById('save').addEventListener('click', function() {
		saveOptions();
		closeOptions();
	}, false);
	document.getElementById('close').addEventListener('click', function() {
		closeOptions();
	}, false);
});
function loadCheckbox(id) {
	document.getElementById(id).checked = typeof localStorage[id] == "undefined" ? false : localStorage[id] == "true";
}
function saveCheckbox(id) {
	localStorage[id] = document.getElementById(id).checked;
}
function closeOptions() {
	window.open('', '_self', ''); window.close();
}
function loadOptions() {
	loadCheckbox("hidebody");
	loadCheckbox("compact");
	loadCheckbox("compactnav");
	loadCheckbox("hidereminder");
	loadCheckbox("bundlebg");
	loadCheckbox("largercompose");
}
function saveOptions() {
	saveCheckbox("hidebody");
	saveCheckbox("compact");
	saveCheckbox("compactnav");
	saveCheckbox("hidereminder");
	saveCheckbox("bundlebg");
	saveCheckbox("largercompose");
}