sap.ui.define([
    "sap/ui/core/Element",
    "../Plugin"
], function(
    Element,
    Plugin
) {
    "use strict";

    var SpecLine = Plugin.extend("ui5.chartjs.plugins.specline.SpecLine", {

        metadata: {

            "library": "ui5.chartjs.plugins",

            "properties": {},

            "aggregations": {

                specInfos: {
                    type: "ui5.chartjs.plugins.specline.SpecInfo",
                    multiple: true,
                    singularName: "specInfo",
                    bindable: "bindable",
                }
            },
        },

        constructor: function(sId, mSettings) {
            Element.apply(this, arguments);
        },

        /**
         * @override
         * 
         */
        implement: function() {
            var impl = {

                id: "specline",

                beforeInit: function(chart) {},

                afterInit: function(chart) {},

                beforeUpdate: function(chart) {},

                afterUpdate: function(chart) {},

                beforeLayout: function(chart) {},

                afterLayout: function(chart) {},

                beforeDatasetsUpdate: function(chart) {},

                afterDatasetsUpdate: function(chart) {},

                beforeDatasetUpdate: function(chart) {},

                afterDatasetUpdate: function(chart) {},

                beforeRender: function(chart) {},

                afterRender: function(chart) {},

                beforeDraw: function(chart) {},

                afterDraw: this.drawSpecLine.bind(this),

                beforeDatasetsDraw: function(chart) {},

                afterDatasetsDraw: function(chart) {},

                beforeDatasetDraw: function(chart) {},

                afterDatasetDraw: function(chart) {},

                beforeEvent: function(chart) {},

                afterEvent: function(chart) {},

                resize: function(chart) {},

                destroy: function(chart) {}
            };
            return impl;
        },

        getName: function() {
            return "specline";
        },

        getXScale: function(chart) {
            return chart.data.datasets.length ? chart.scales[chart.getDatasetMeta(0).xAxisID] : null;
        },

        getYScale: function(chart, yAxisID) {
            if (yAxisID) {
                return chart.scales[yAxisID];
            } else {
                return chart.data.datasets.length ? chart.scales[chart.getDatasetMeta(0).yAxisID] : null;
            }
        },

        drawSpecLine: function(chart) {
            // var optSpecline = chart.options.plugins["specline"] || {};

            var xScale = this.getXScale(chart);
            if (!xScale) {
                return;
            }
            var x1 = xScale.getPixelForValue(xScale.min);
            var x2 = xScale.getPixelForValue(xScale.max);

            var dashPattern = [];
            var specInfos = this.getAggregation("specInfos") || [];
            for (var i in specInfos) {
                var specInfo = specInfos[i];
                if (!specInfo.getDisplay()) {
                    continue;
                }
                var yScale = this.getYScale(chart, specInfo.getYAxisID());
                if (!yScale) {
                    continue;
                }

                var y1 = yScale.getPixelForValue(yScale.min);
                var y2 = yScale.getPixelForValue(yScale.max);
                var y = yScale.getPixelForValue(specInfo.getValue());
                if (!y) {
                    continue;
                }
                
                if (y <= y1 && y >= y2) {
                    // draw
                    chart.ctx.beginPath();
                    chart.ctx.setLineDash(dashPattern);
                    chart.ctx.moveTo(x1, y);
                    chart.ctx.lineWidth = specInfo.getLineWidth();
                    chart.ctx.strokeStyle = specInfo.getLineColor() || color;
                    chart.ctx.lineTo(x2, y);
                    chart.ctx.stroke();
                    chart.ctx.setLineDash([]);
                }
            };
        },
    });

    return SpecLine;

}, /* bExport= */ true);
