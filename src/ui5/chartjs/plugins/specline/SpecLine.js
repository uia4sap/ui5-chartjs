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

            "properties": {

                direction: { type: "string", group: "spec", defaultValue: "H" }
            },

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

        getXScale: function(chart, xAxisID) {
            if (xAxisID) {
                return chart.scales[xAxisID];
            } else {
                return chart.data.datasets.length ? chart.scales[chart.getDatasetMeta(0).xAxisID] : null;
            }
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
            if (this.getDirection() == "V") {
                this.__drawV(chart);
            } else {
                this.__drawH(chart);
            }
        },

        __drawH: function(chart) {
            var xScale = this.getXScale(chart);
            if (!xScale) {
                return;
            }
            var x1 = xScale.getPixelForValue(xScale.min);
            var x2 = xScale.getPixelForValue(xScale.max);

            var dashPattern = [];
            var specInfos = this.getAggregation("specInfos") || [];
            for (var i = 0; i < specInfos.length; i++) {
                var specInfo = specInfos[i];
                if (!specInfo.getDisplay()) {
                    continue;
                }
                var yScale = this.getYScale(chart, specInfo.getYAxisID());
                if (!yScale) {
                    continue;
                }

                var value = specInfo.getValue();
                if (typeof yScale.min !== "number") {
                    value = "" + value;
                } else if (typeof value !== "number") {
                    value = parseFloat(value);
                }
                var y1 = yScale.getPixelForValue(yScale.min);
                var y2 = yScale.getPixelForValue(yScale.max);
                var y = yScale.getPixelForValue(value);
                if (y == undefined) {
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

        __drawV: function(chart) {
            var yScale = this.getYScale(chart);
            if (!yScale) {
                return;
            }
            var y1 = yScale.getPixelForValue(yScale.min);
            var y2 = yScale.getPixelForValue(yScale.max);

            var dashPattern = [];
            var specInfos = this.getAggregation("specInfos") || [];
            for (var i = 0; i < specInfos.length; i++) {
                var specInfo = specInfos[i];
                if (!specInfo.getDisplay()) {
                    continue;
                }
                var xScale = this.getXScale(chart, specInfo.getXAxisID());
                if (!xScale) {
                    continue;
                }

                var value = specInfo.getValue();
                if (typeof xScale.min !== "number") {
                    value = "" + value;
                } else if (typeof value !== "number") {
                    value = parseFloat(value);
                }
                var x1 = xScale.getPixelForValue(xScale.min);
                var x2 = xScale.getPixelForValue(xScale.max);
                var x = xScale.getPixelForValue(value);
                if (x == undefined) {
                    continue;
                }

                if (x >= x1 && x <= x2) {
                    // draw
                    chart.ctx.beginPath();
                    chart.ctx.setLineDash(dashPattern);
                    chart.ctx.moveTo(x, y1);
                    chart.ctx.lineWidth = specInfo.getLineWidth();
                    chart.ctx.strokeStyle = specInfo.getLineColor() || color;
                    chart.ctx.lineTo(x, y2);
                    chart.ctx.stroke();
                    chart.ctx.setLineDash([]);
                }
            };
        }
    });

    return SpecLine;

}, /* bExport= */ true);
