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
     * @alias uia.chartjs.ScatterChart
     * @version ${version}
     *
     * @constructor
     * @public
     * @since 2.9.3.0
     * @name uia.chartjs.ScatterChart
     */
    var ScatterChart = CartesianChart.extend("uia.chartjs.ScatterChart", /** @lends uia.chartjs.ScatterChart.prototype */ {

        metadata: {

            library: 'uia.chartjs',

            properties: {

                hoverMode: { type: "string", group: "Appearance", defaultValue: "label" },
            }
        },

        onBeforeRendering: function() {
            // BaseChart.prototype.setHoverMode.call(this, this.getHoverMode());
        },

        getChartType: function() {
            return ChartType.Scatter;
        },


        applyOptionsEx: function(oOptions) {
            return oOptions;
        }
    });

    return ScatterChart;

}, /* bExport= */ true);
