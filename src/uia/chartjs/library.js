/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library uia.chartjs.
 */
sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/library',
    "./3rdparty/chartjs/Chart"
], function (
	jQuery,
	library,
    ChartJS
) {
	"use strict";

	/**
	 * An chartjs library.
	 *
	 * @namespace
	 * @name uia.chartjs
	 * @public
	 */

	// library dependencies

	// delegate further initialization of this library to the Core
	sap.ui.getCore().initLibrary({
		name: "uia.chartjs",
		dependencies: ["sap.ui.core"],
		types: [
			"uia.chartjs.ChartType"
		],
		interfaces: [],
		controls: [
			"uia.chartjs.BarChart",
			"uia.chartjs.LineChart"
		],
		elements: [
			"uia.chartjs.options.Layout",
			"uia.chartjs.options.Legend",
			"uia.chartjs.options.Title",
			"uia.chartjs.options.Tooltips",
			"uia.chartjs.axes.CategoryAxis",
			"uia.chartjs.axes.LinearAxis",
			"uia.chartjs.axes.TimeAxis",
			"uia.chartjs.axes.GridLines",
			"uia.chartjs.data.Bar",
			"uia.chartjs.data.Line",
			"uia.chartjs.plugins.Plugin",
			"uia.chartjs.plugins.PluginAttr",
			"uia.chartjs.plugins.Crosshair",
		],
		noLibraryCSS: false,
		version: "${version}"
	});

	/**
	 * Chart type.
	 *
	 * @enum {string}
	 * @public
	 */
	uia.chartjs.ChartType = {

		/**
		 * The bar chart
		 * @public
		 */
		Bar: "bar",

		/**
		 * The horizontal bar chart
		 * @public
		 */
		HorizontalBar: "horizontalBar",

		/**
		 * The line chart
		 * @public
		 */
		Line: "line"
	};

	jQuery.sap.includeStyleSheet("resources/uia/chartjs/3rdparty/chartjs/Chart.css");	

	Chart.platform.disableCSSInjection = true;

	return uia.chartjs;

});
