var fs = require('fs-extra');

fs.copySync('./node_modules/ui5lab-browser/dist/', './test/ui5lab/browser');
fs.copySync('./node_modules/chart.js/dist', './src/uia/chartjs/3rdparty/chartjs');
fs.copySync('./node_modules/chartjs-plugin-crosshair/dist', './src/uia/chartjs/3rdparty/chartjs-plugin-crosshair');
fs.copySync('./node_modules/chartjs-plugin-datalabels/dist', './src/uia/chartjs/3rdparty/chartjs-plugin-datalabels');
fs.copySync('./node_modules/chartjs-plugin-zoom/dist', './src/uia/chartjs/3rdparty/chartjs-plugin-zoom');
fs.copySync('./node_modules/hammerjs/hammer.js', './src/uia/chartjs/3rdparty/hammerjs/hammer.js');
fs.copySync('./node_modules/hammerjs/hammer.min.js', './src/uia/chartjs/3rdparty/hammerjs/hammer.min.js');

// read library namespace from package.json
var oPackage = require('./package.json');
var sNamespace = oPackage.ui5lab.namespace || "ui5lab.library";

// add library namespace to browser library list
var sBrowserLibraryFile = './test/ui5lab/browser/libraries.json';
fs.readFile(sBrowserLibraryFile, 'utf8', function (err, data) {
	if (err) {
		return console.log(err);
	}

	var result = data.replace(/\[((\r)?\n\t)*\]/m, '[\r\n\t\t"' + sNamespace + '"\r\n\t]');

	fs.writeFile(sBrowserLibraryFile, result, 'utf8', function (err) {
		if (err) return console.log(err);
	});
});
