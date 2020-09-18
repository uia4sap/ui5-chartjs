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
     * @alias uia.chartjs.LineChart
     * @version ${version}
     *
     * @constructor
     * @public
     * @since 2.9.3.0
     * @name uia.chartjs.LineChartChart
     */
    var LineChart = CartesianChart.extend("uia.chartjs.LineChart", /** @lends uia.chartjs.LineChart.prototype */ {

        metadata: {

            library: 'uia.chartjs',

            properties: {

                stacked: { type: "boolean", group: "Appearance", defaultValue: false },

                hoverMode: { type: "string", group: "Appearance", defaultValue: "label" },
            }
        },

        onBeforeRendering: function() {
            // BaseChart.prototype.setHoverMode.call(this, this.getHoverMode());
        },

        createDataset: function(label, data, lineColor, order) {
            return {
                "data": data,
                "label": label,
                "order": order == undefined ? 0 : order,
                "xAxisID": undefined,
                "yAxisID": undefined,
                "pointBackgroundColor": 'rgba(0, 0, 0, 0.1)',
                "pointBorderColor": 'rgba(0, 0, 0, 0.1)',
                "pointBorderWidth": 1,
                "pointHitRadius": 1,
                "pointRotation": 0,
                "pointStyle": 'circle',
                "pointHoverBackgroundColor": undefined,
                "pointHoverBorderColor`": undefined,
                "pointHoverBorderWidth": undefined,
                "pointHoverRadius": undefined,
                "backgroundColor": 'rgba(196, 196, 196, 0.1)',
                "borderCatStyle": "butt",
                "borderColor": lineColor == undefined ? 'rgba(0, 0, 0, 0.6)' : lineColor,
                "borderDash": [],
                "borderDashOffset": 0.0,
                "borderJoinStyle": "miter",
                "borderWidth": 1,
                "clip": 1,
                "fill": true,
                "lineTension": 0.0,
                "showLine": undefined,
                "spanGaps": undefined,
                "steppedLine": false,
                "hoverBackgroundColor": undefined,
                "hoverBorderCapStyle": undefined,
                "hoverBorderColor": undefined,
                "hoverBorderDash": undefined,
                "hoverBorderDashOffset": undefined,
                "hoverBorderJoinStyle": undefined,
                "hoverBorderWidth": undefined
            }
        },

        getChartType: function() {
            return ChartType.Line;
        },

        applyOptionsEx: function(oOptions) {
            if (this.getStacked()) {
                oOptions.scales.yAxes[0]["stacked"] = true;
            }

            return oOptions;
        },

    });

    return LineChart;

}, /* bExport= */ true);
