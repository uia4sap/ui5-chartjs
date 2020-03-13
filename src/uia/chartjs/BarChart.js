sap.ui.define([
    "./CartesianChart",
    "./axes/CartesianAxis",
    "./library"
], function(
    CartesianChart,
    CartesianAxis,
    library
) {
    "use strict";

    var ChartType = library.ChartType;

    /**
     *
     * @param {string} [sId] id for the new control, generated automatically if no id is given 
     * @param {object} [mSettings] initial settings for the new control
     *
     * @class
     * CartesianChart constructor
     * @extends uia.chartjs.CartesianChart
     * @alias uia.chartjs.BarChart
     * @version ${version}
     *
     * @constructor
     * @public
     * @since 1.40
     * @name uia.chartjs.BarChart
     */
    var BarChart = CartesianChart.extend("uia.chartjs.BarChart", /** @lends uia.chartjs.BarChart.prototype */ {

        metadata: {

            library: 'uia.chartjs',

            properties: {

                stacked: { type: "boolean", group: "Appearance", defaultValue: false },

                horizontal: { type: "boolean", group: "Appearance", defaultValue: false },

                hoverMode: { type: "string", group: "Appearance", defaultValue: "label" },
            },

            aggregations: {

                scales: { type: "uia.chartjs.axes.CartesianAxis", multiple: true, aggregation: "scales" }
            },

            events: {}
        },

        onBeforeRendering: function() {
            // BaseChart.prototype.setHoverMode.call(this, this.getHoverMode());
        },

        createDataset: function(label, data, backgroundColor, order) {
            return {
                "data": data,
                "label": label,
                "order": order == undefined ? 0 : order,
                "xAxisID": undefined,
                "yAxisID": undefined,
                "backgroundColor": backgroundColor == undefined ? 'rgba(0, 0, 0, 0.1)' : backgroundColor,
                "borderColor": undefined,
                "borderSkip": 'bottom',
                "borderWidth": 1,
                "hoverBackgroundColor": 'rgba(0, 0, 255, 0.1)',
                "hoverBorderColor": undefined,
                "hoverBorderWidth": 1
            }
        },

        getChartType: function() {
            return this.getHorizontal() ? ChartType.HorizontalBar : ChartType.Bar;
        },

        applyOptionsEx: function(oOptions) {
            if(this.getStacked()) {
                oOptions.scales.xAxes[0]["stacked"] = true;
                oOptions.scales.yAxes[0]["stacked"] = true;
            }
            return oOptions;
        },

    });

    return BarChart;

}, /* bExport= */ true);
