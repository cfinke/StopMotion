var STOPMOTION = {
	load : function () {
		removeEventListener("load", STOPMOTION.load, false);
		
		var firefoxBrowser = document.getElementById("appcontent");
		firefoxBrowser.addEventListener("DOMContentLoaded", STOPMOTION.DOMContentLoaded, false);
		
		addEventListener("unload", STOPMOTION.unload, false);
	},
	
	unload : function () {
		removeEventListener("unload", STOPMOTION.unload, false);
		
		var firefoxBrowser = document.getElementById("appcontent");
		firefoxBrowser.removeEventListener("DOMContentLoaded", STOPMOTION.DOMContentLoaded, false);
	},
	
	DOMContentLoaded : function (event) {
		var page = event.target;

		if ((page.location.protocol == "http:") || (page.location.protocol == "https:")) {
			const isDM = /(\w*\.)?dailymotion\.com$/i;
			
			if (!isDM.test(page.location.host)) {
				return;
			}
		}
		else {
			return;
		}
		
		var playerDiv = page.getElementsByClassName("player_box");
		
		if (playerDiv.length > 0) {
			playerDiv = playerDiv[0];
			
			var embedContainer = page.getElementById("embed_customize");
			
			if (embedContainer) {
				var embedInput = embedContainer.getElementsByClassName("embed_input");
			
				if (embedInput.length > 0) {
					embedInput = embedInput[0];
					playerDiv.innerHTML = embedInput.getAttribute("value");
				}
			}
		}
	},
	
	log : function (message) {
		var consoleService = Components.classes["@mozilla.org/consoleservice;1"].getService(Components.interfaces.nsIConsoleService);
		consoleService.logStringMessage("STOPMOTION: " + message);
	}
};