sap.ui.define([
    "sap/ui/core/Element",
    "./Plugin"
], function(
    Element,
    Plugin
) {
    "use strict";

    /**
     * just for practice
     * 
     */
    var LineBarLabel = Plugin.extend("ui5.chartjs.plugins.LineBarLabel", {

        metadata: {

            "library": "ui5.chartjs.plugins",

            "properties": {},

            "aggregations": {}
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

                id: "datalabel",

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

                afterDraw: this.drawDataLabel.bind(this),

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
            return "datalabel";
        },

        drawDataLabel: function(chart) {
            var ctx = chart.ctx;
            ctx.textAlign = "center";
            ctx.textBaseline = "bottom";

            var datasets = chart.data.datasets;
            for (var x = 0; x < datasets.length; x++) {
                var meta = chart.getDatasetMeta(x);
                var dataset = datasets[x];

                if (dataset.type == "line" || dataset.type == "bar") {
                    this.verticalPointLabel(chart, ctx, dataset, meta);
                } else if (chart.config.type == "horizontalBar") {
                    this.horizontalPointLabel(chart, ctx, dataset, meta);
                }
            }
        },

        horizontalPointLabel: function(chart, ctx, dataset, meta) {
            var mt = ctx.measureText("10");
            var fontH = mt.actualBoundingBoxAscent - mt.actualBoundingBoxDescent;

            for (var y = 0; y < dataset.data.length; y++) {
                var value = dataset.data[y] || "";
                var model = meta.data[y]._model;
                ctx.fillText(
                    value.y ? value.y : value,
                    model.x + 10,
                    model.y + (model.height - fontH) / 2);
            }
        },

        verticalPointLabel: function(chart, ctx, dataset, meta) {
            for (var y = 0; y < dataset.data.length; y++) {
                var value = dataset.data[y] || "";
                var model = meta.data[y]._model;
                ctx.fillText(
                    value.y ? value.y : value,
                    model.x,
                    model.y - 2);
            }
        }
    });

    return LineBarLabel;

}, /* bExport= */ true);
