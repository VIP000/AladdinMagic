
var arr,
	utils = require('./utils'),
	fs = require('fs'),
	path = require('path');

(function () {
	var data = fs.readFileSync(path.join(__dirname, '../conf/ip.txt'), {encoding: 'utf8'});
	arr = data.split(utils.linefeed());
}).call(this);

module.exports = {
	get: function () {
		var randomNum = Math.floor(Math.random()*arr.length) || 0;
		console.log("get ip: " + arr[randomNum]);
		return arr[randomNum];
	}
};
