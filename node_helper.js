const NodeHelper = require("node_helper");
const Log = require("logger");

const fetch = (...args) =>
  // eslint-disable-next-line no-shadow
  import("node-fetch").then(({ default: fetch }) => fetch(...args));


module.exports = NodeHelper.create({
	start: function () {
		console.log('MMM-Shopping-list helper started...');
	},

	getJson: function (url) {
		var self = this;

		fetch(url)
      		.then((response) => response.json())
      		.then((json) => {
        		// Send the json data back with the url to distinguish it on the receiving part
        		self.sendSocketNotification("MMM-Shopping-list_JSON_RESULT", {url, data: json});
      		});
	},

	//Subclass socketNotificationReceived received.
	socketNotificationReceived: function (notification, url) {
		if (notification === "MMM-Shopping-list_GET_JSON") {
			this.getJson(url);
		}
	}
});
