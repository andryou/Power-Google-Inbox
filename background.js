var version = (function () {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', chrome.extension.getURL('manifest.json'), false);
	xhr.send(null);
	return JSON.parse(xhr.responseText).version;
}());
function optionExists(opt) {
	return (typeof localStorage[opt] != "undefined");
}
function defaultOptionValue(opt, val) {
	if (!optionExists(opt)) localStorage[opt] = val;
}
function setDefaultOptions() {
	defaultOptionValue("version", version);
	//defaultOptionValue("dock", "true");
	defaultOptionValue("hidebody", "true");
	defaultOptionValue("compact", "true");
	defaultOptionValue("compactnav", "true");
	defaultOptionValue("hidereminder", "true");
	defaultOptionValue("bundlebg", "false");
	defaultOptionValue("largercompose", "false");
}
var requestDispatchTable = {
	"get-settings": function(request, sender, sendResponse) {
		sendResponse({dock: localStorage["dock"], hidebody: localStorage["hidebody"], hidereminder: localStorage["hidereminder"], compact: localStorage["compact"], compactnav: localStorage["compactnav"], bundlebg: localStorage["bundlebg"], largercompose: localStorage["largercompose"]});
	},
	"get-dock": function(request, sender, sendResponse) {
		sendResponse({dock: localStorage["dock"]});
	}
}
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	if (request.reqtype in requestDispatchTable)
		requestDispatchTable[request.reqtype](request, sender, sendResponse);
	else
		sendResponse({});
});
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if (tab.url.indexOf('inbox.google.com') != -1) {
		chrome.pageAction.show(tabId);
	}
});
chrome.pageAction.onClicked.addListener(function(tab) {
	chrome.tabs.create({ url: chrome.extension.getURL('options.html'), selected: true });
});
setDefaultOptions();
if ((!optionExists("version") || localStorage["version"] != version)) {
	localStorage["version"] = version;
}