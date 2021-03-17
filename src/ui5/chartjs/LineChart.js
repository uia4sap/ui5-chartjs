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
     * @extends ui5.chartjs.CartesianChart
     * @alias ui5.chartjs.LineChart
     * @version ${version}
     *
     * @constructor
     * @public
     * @since 2.9.3.0
     * @name ui5.chartjs.LineChartChart
     */
    var LineChart = CartesianChart.extend("ui5.chartjs.LineChart", /** @lends ui5.chartjs.LineChart.prototype */ {

        metadata: {

            library: 'ui5.chartjs',

            properties: {

                hoverMode: { type: "string", group: "Appearance", defaultValue: "label" },
            }
        },

        onBeforeRendering: function() {
            // BaseChart.prototype.setHoverMode.call(this, this.getHoverMode());
        },

        getChartType: function() {
            return ChartType.Line;
        },


        applyOptionsEx: function(oOptions) {
            return oOptions;
        }
    });

    return LineChart;

}, /* bExport= */ true);
