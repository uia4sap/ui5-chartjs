sap.ui.define([
    "./BaseChart",
    "./library"
], function(
    BaseChart,
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
     * PolarAreaChart constructor
     * @alias ui5.chartjs.PolarAreaChart
     * @version ${version}
     *
     * @constructor
     * @public
     * @since 1.40
     * @name ui5.chartjs.BarChart
     */
    var PolarAreaChart = BaseChart.extend("ui5.chartjs.PolarAreaChart", /** @lends ui5.chartjs.PolarAreaChart.prototype */ {

        metadata: {

            library: 'ui5.chartjs',

            properties: {

                cutoutPercentage: { type: "float", group: "Appearance", defaultValue: 0 },

                rotation: { type: "float", group: "Appearance", defaultValue: -0.5 * Math.PI },

                circumference: { type: "float", group: "Appearance", defaultValue: 2 * Math.PI },

                Doughnut: { type: "boolean", group: "Appearance", defaultValue: false }
            },

            events: {
            }
        },

        onBeforeRendering: function() {
            // BaseChart.prototype.setHoverMode.call(this, this.getHoverMode());
        },

        getChartType: function() {
            return ChartType.PolarArea;
        },

        applyOptionsEx: function(oOptions) {
            return oOptions;
        }
    });

    return PolarAreaChart;

}, /* bExport= */ true);
