sap.ui.define([
    "./BaseChart",
    "./axes/CartesianAxis",
    "./library"
], function(
    BaseChart,
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
     * BaseChart constructor
     * @extends uia.chartjs.BaseChart
     * @alias uia.chartjs.BarChart
     * @version ${version}
     *
     * @constructor
     * @public
     * @since 2.9.3.0
     * @name uia.chartjs.BarChart
     */
    var CartesianChart = BaseChart.extend("uia.chartjs.CartesianChart", /** @lends uia.chartjs.CartesianChart.prototype */ {

        metadata: {

            "abstract": true,

            "library": 'uia.chartjs',

            "aggregations": {

                scales: { type: "uia.chartjs.axes.CartesianAxis", multiple: true, aggregation: "scales" }
            }
        },

        getScalesOption: function() {
            var result = {
                xAxes: [],
                yAxes: []
            }

            var scales = this.getAggregation("scales");
            if(scales) {
                scales.forEach(s => {
                    var option = s.toScale();
                    if(option.position == "left" || option.position == "right") {
                        result.yAxes.push(option);
                    } else {
                        result.xAxes.push(option);
                    }
                });
            }

            if(result.xAxes.length == 0) {
                result.xAxes.push({});
            }
            if(result.yAxes.length == 0) {
                result.yAxes.push({});
            }

            return result;
        }

    });

    return CartesianChart;

}, /* bExport= */ true);
