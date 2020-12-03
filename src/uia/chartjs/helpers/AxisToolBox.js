sap.ui.define([
    "sap/ui/core/Element"
], function(
    Element
) {
    "use strict";

    var AxisToolBox = Element.extend("uia.chartjs.helpers.AxisToolBox", {

        __charts: [],

        metadata: {

            library: "uia.chartjs.helpers",

            aggregations: {

                axes: { 
                    type: "uia.chartjs.helpers.AxisConfig", 
                    multiple: true, 
                    singularName: "axis",
                    bindable: "bindable"
                }
            },
        },

        register: function(chart) {
            if(chart) {
                this.__charts.push(chart);
            }
        },

        clear: function() {
            this.__charts = [];
        },

        resetScale: function() {
            var axes = this.getAggregation("axes");
            axes.forEach(axis => axis.resetScale(this.__charts));
        },

        prevScale: function() {
            var axes = this.getAggregation("axes");
            axes.forEach(axis => axis.prevScale(this.__charts));
        },

        nextScale: function() {
            var axes = this.getAggregation("axes");
            axes.forEach(axis => axis.nextScale(this.__charts));
        },

        endScale: function() {
            var axes = this.getAggregation("axes");
            axes.forEach(axis => axis.endScale(this.__charts));
        },

        moveScale: function(min) {
            var axes = this.getAggregation("axes");
            axes.forEach(axis => axis.moveScale(this.__charts, min));
        },

        updateScale: function() {
            var axes = this.getAggregation("axes");
            axes.forEach(axis => axis.updateScale(this.__charts));
        },
    });

    return AxisToolBox;

}, /* bExport= */ true);
