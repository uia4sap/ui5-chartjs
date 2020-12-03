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
			"uia.chartjs.LineChart",
			"uia.chartjs.PieChart",
			"uia.chartjs.PolarAreaChart",
			"uia.chartjs.ScatterChart"
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
			"uia.chartjs.data.Pie",
			"uia.chartjs.data.PolarArea",
			"uia.chartjs.plugins.Plugin",
			"uia.chartjs.plugins.PluginAttr",
			"uia.chartjs.plugins.Crosshair",
			"uia.chartjs.plugins.DataLabels",
			"uia.chartjs.plugins.LineBarLabel",
			"uia.chartjs.plugins.specline.SpecLine",
			"uia.chartjs.plugins.specline.SpecInfo",
			"uia.chartjs.plugins.Zoom",
			"uia.chartjs.helpers.AxisToolBox",
			"uia.chartjs.helpers.AxisConfig"
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
		 * The line chart
		 * @public
		 */
		Line: "line",


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
		 * The pie chart
		 * @public
		 */
		Pie: "pie",

		/**
		 * The doughnut chart
		 * @public
		 */
		Doughnut: "doughnut",

		PolarArea: "polarArea",

		Radar: "radar",

		Scatter: "scatter"
	};

	
	sap.ui.lazyRequire("uia.chartjs.Palette", "pick");	

	sap.ui.lazyRequire("uia.chartjs.Palette", "pickFore");	

	jQuery.sap.includeStyleSheet("resources/uia/chartjs/3rdparty/chartjs/Chart.css");	

	Chart.platform.disableCSSInjection = true;

	return uia.chartjs;

});
