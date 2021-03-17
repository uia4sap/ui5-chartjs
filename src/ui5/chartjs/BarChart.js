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
     * @alias ui5.chartjs.BarChart
     * @version ${version}
     *
     * @constructor
     * @public
     * @since 1.40
     * @name ui5.chartjs.BarChart
     */
    var BarChart = CartesianChart.extend("ui5.chartjs.BarChart", /** @lends ui5.chartjs.BarChart.prototype */ {

        metadata: {

            library: 'ui5.chartjs',

            properties: {

                horizontal: { type: "boolean", group: "Appearance", defaultValue: false },

                hoverMode: { type: "string", group: "Appearance", defaultValue: "label" },
            },

            events: {

            }
        },

        onBeforeRendering: function() {
            // BaseChart.prototype.setHoverMode.call(this, this.getHoverMode());
        },

        getChartType: function() {
            return this.getHorizontal() ? ChartType.HorizontalBar : ChartType.Bar;
        },

        applyOptionsEx: function(oOptions) {
            return oOptions;
        }
    });

    return BarChart;

}, /* bExport= */ true);
