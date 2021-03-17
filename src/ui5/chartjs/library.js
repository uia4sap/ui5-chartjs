/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library ui5.chartjs.
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
	 * @name ui5.chartjs
	 * @public
	 */

	// library dependencies

	// delegate further initialization of this library to the Core
	sap.ui.getCore().initLibrary({
		name: "ui5.chartjs",
		dependencies: ["sap.ui.core"],
		types: [
			"ui5.chartjs.ChartType"
		],
		interfaces: [],
		controls: [
			"ui5.chartjs.BarChart",
			"ui5.chartjs.LineChart",
			"ui5.chartjs.PieChart",
			"ui5.chartjs.PolarAreaChart",
			"ui5.chartjs.ScatterChart"
		],
		elements: [
			"ui5.chartjs.options.Layout",
			"ui5.chartjs.options.Legend",
			"ui5.chartjs.options.Title",
			"ui5.chartjs.options.Tooltips",
			"ui5.chartjs.axes.CategoryAxis",
			"ui5.chartjs.axes.LinearAxis",
			"ui5.chartjs.axes.TimeAxis",
			"ui5.chartjs.axes.GridLines",
			"ui5.chartjs.data.Bar",
			"ui5.chartjs.data.Line",
			"ui5.chartjs.data.Pie",
			"ui5.chartjs.data.PolarArea",
			"ui5.chartjs.plugins.Plugin",
			"ui5.chartjs.plugins.PluginAttr",
			"ui5.chartjs.plugins.Crosshair",
			"ui5.chartjs.plugins.DataLabels",
			"ui5.chartjs.plugins.LineBarLabel",
			"ui5.chartjs.plugins.specline.SpecLine",
			"ui5.chartjs.plugins.specline.SpecInfo",
			"ui5.chartjs.plugins.Zoom",
			"ui5.chartjs.helpers.AxisToolBox",
			"ui5.chartjs.helpers.AxisConfig"
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
	ui5.chartjs.ChartType = {

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

	
	sap.ui.lazyRequire("ui5.chartjs.Palette", "pick");	

	sap.ui.lazyRequire("ui5.chartjs.Palette", "pickFore");	

	jQuery.sap.includeStyleSheet("resources/ui5/chartjs/3rdparty/chartjs/Chart.css");	

	Chart.platform.disableCSSInjection = true;

	return ui5.chartjs;

});
