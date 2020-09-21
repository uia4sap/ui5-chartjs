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
     * @alias uia.chartjs.PolarAreaChart
     * @version ${version}
     *
     * @constructor
     * @public
     * @since 1.40
     * @name uia.chartjs.BarChart
     */
    var PolarAreaChart = BaseChart.extend("uia.chartjs.PolarAreaChart", /** @lends uia.chartjs.PolarAreaChart.prototype */ {

        metadata: {

            library: 'uia.chartjs',

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
