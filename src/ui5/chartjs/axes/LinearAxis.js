sap.ui.define([
    "sap/ui/core/Element",
    "./CartesianAxis"
], function(
    Element,
    CartesianAxis
) {
    "use strict";

    var LinearAxis = CartesianAxis.extend("ui5.chartjs.axes.LinearAxis", {
        
        metadata: {

            library: "ui5.chartjs.axes",

            properties: {

                stacked: { type: "boolean", group: "Appearance", defaultValue: false },

                beginAtZero: { type: "boolean", group: "scale", defaultValue: false },

                maxTicksLimit: { type: "int", group: "scale", defaultValue: 11 },

                precision: { type: "float", group: "scale", defaultValue: undefined },

                stepSize: { type: "float", group: "scale", defaultValue: undefined },

                max: { type: "float", group: "scale", defaultValue: undefined },

                min: { type: "float", group: "scale", defaultValue: undefined },

                suggestedMax: { type: "float", group: "scale", defaultValue: undefined },

                suggestedMin: { type: "float", group: "scale", defaultValue: undefined }
            }
        },

        getName: function() {
            return "linear";
        },

        applyScaleEx: function(oAxis) {
            oAxis["stacked"] = this.getStacked();
            oAxis["ticks"] = {
                beginAtZero: this.getBeginAtZero(),
                maxTicksLimit: this.getMaxTicksLimit(),
                precision: this.getPrecision(),
                stepSize: this.getStepSize(),
                max: this.getMax(),
                min: this.getMin(),
                suggestedMax: this.getSuggestedMax(),
                suggestedMin: this.getSuggestedMin()
            }
            return oAxis;
        }
    });

    return LinearAxis;

}, /* bExport= */ true);
