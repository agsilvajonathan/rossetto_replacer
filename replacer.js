"use strict";

var url = "https://i.imgur.com/ZBk7VhG.jpg";

function replace() {
	var images = document.getElementsByTagName("img");
	for (var i = 0; i < images.length; i++) {
		images[i].src = url;
	}

	document.querySelectorAll('div').forEach(function(node) {
		if (node !== undefined && node.style.backgroundImage != undefined && node.style.backgroundImage != null && node.style.backgroundImage != '') {
    		node.style.backgroundImage = "url("+url+")";
    	}
    	if (node !== undefined && node.style[0] == '--bstn-hl-cover') {
    		node.style.cssText = '--bstn-hl-cover:url('+url+');'
    	}
	});
}

chrome.storage.sync.get({
	enabled: true,
	url: "https://i.imgur.com/ZBk7VhG.jpg"
}, function(items) {
	if (items.enabled) {
		url = items.url;
		var css = document.createElement("style");
		css.innerHTML = "img { content: url(\"" + url + "\") !important; }";

		document.body.appendChild(css);
		window.setInterval(replace, 3000);
		replace();
	}
});