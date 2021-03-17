sap.ui.define([
    "./BaseChart",
    "./axes/CartesianAxis",
    "./axes/CategoryAxis",
    "./axes/LinearAxis",
    "./library"
], function(
    BaseChart,
    CartesianAxis,
    CategoryAxis,
    LinearAxis,
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
     * BaseChart constructor
     * @extends ui5.chartjs.BaseChart
     * @alias ui5.chartjs.BarChart
     * @version ${version}
     *
     * @constructor
     * @public
     * @since 2.9.3.0
     * @name ui5.chartjs.BarChart
     */
    var CartesianChart = BaseChart.extend("ui5.chartjs.CartesianChart", /** @lends ui5.chartjs.CartesianChart.prototype */ {

        metadata: {

            "abstract": true,

            "library": 'ui5.chartjs',

            "aggregations": {

                scales: { type: "ui5.chartjs.axes.CartesianAxis", multiple: true, aggregation: "scale" }
            }
        },

        getScalesOption: function() {
            var result = {
                xAxes: [],
                yAxes: []
            }

            var scales = this.getAggregation("scales") || [];
            if (scales) {
                scales.forEach(function(s) {
                    var option = s.toScale();
                    if (option.position == "left" || option.position == "right") {
                        result.yAxes.push(option);
                    } else {
                        result.xAxes.push(option);
                    }
                });
            }

            if (result.xAxes.length == 0) {
                if (this.getChartType() === ChartType.Line) {
                    result.xAxes.push(new LinearAxis({
                        axisID: "x"
                    }).toScale());
                } else {
                    result.xAxes.push({});
                }
            }
            if (result.yAxes.length == 0) {
                if (this.getChartType() === ChartType.Line) {
                    result.yAxes.push(new LinearAxis({
                        axisID: "y"
                    }).toScale());
                } else {
                    result.yAxes.push({});
                }
            }

            return result;
        }

    });

    return CartesianChart;

}, /* bExport= */ true);
