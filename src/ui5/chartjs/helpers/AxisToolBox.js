sap.ui.define([
    "sap/ui/core/Element"
], function(
    Element
) {
    "use strict";

    var AxisToolBox = Element.extend("ui5.chartjs.helpers.AxisToolBox", {

        __charts: [],

        metadata: {

            library: "ui5.chartjs.helpers",

            aggregations: {

                axes: { 
                    type: "ui5.chartjs.helpers.AxisConfig", 
                    multiple: true, 
                    singularName: "axis",
                    bindable: "bindable"
                }
            },
        },

        register: function(chart) {
            if (chart) {
                this.__charts.push(chart);
            }
        },

        clear: function() {
            this.__charts = [];
        },

        resetScale: function() {
            var axes = this.getAggregation("axes");
            var charts = this.__charts;
            axes.forEach(function(axis) {
                axis.resetScale(charts);
            });
        },

        prevScale: function() {
            var axes = this.getAggregation("axes");
            var charts = this.__charts;
            axes.forEach(function(axis) {
                axis.prevScale(charts);
            });
        },

        nextScale: function() {
            var axes = this.getAggregation("axes");
            var charts = this.__charts;
            axes.forEach(function(axis) {
                axis.nextScale(charts);
            });
        },

        endScale: function() {
            var axes = this.getAggregation("axes");
            var charts = this.__charts;
            axes.forEach(function(axis) {
                axis.endScale(charts);
            });
        },

        moveScale: function(min) {
            var axes = this.getAggregation("axes");
            var charts = this.__charts;
            axes.forEach(function(axis) {
                axis.moveScale(charts, min);
            });
        },

        updateScale: function() {
            var axes = this.getAggregation("axes");
            var charts = this.__charts;
            axes.forEach(function(axis) {
                axis.updateScale(charts);
            });
        },
    });

    return AxisToolBox;

}, /* bExport= */ true);
