sap.ui.define([
    "sap/ui/core/Element"
], function(
    Element
) {
    "use strict";

    var Ticks = Element.extend("ui5.chartjs.axes.Ticks", {

        metadata: {

            library: "ui5.chartjs.axes",

            properties: {

                min: { type: "float", group: "ticks" },

                max: { type: "float", group: "ticks" },

                sampleSize: { type: "int", group: "ticks" },

                autoSkip: { type: "boolean", group: "ticks", defaultValue: true },

                autoSkipPadding: { type: "float", group: "ticks", defaultValue: 0 },

                labelOffset: { type: "float", group: "ticks", defaultValue: 0 },

                maxRotation: { type: "float", group: "ticks", defaultValue: 50 },

                minRotation: { type: "float", group: "ticks", defaultValue: 0 },

                mirror: { type: "boolean", group: "ticks", defaultValue: false },

                padding: { type: "float", group: "ticks", defaultValue: 0 }
            },
        },

        toOption: function() {
            return {
                min: this.getMin(),
                max: this.getMax(),
                sampleSize: this.getSampleSize(),
                autoSkip: this.getAutoSkip(),
                autoSkipPadding: this.getAutoSkipPadding(),
                labelOffset: this.getLabelOffset(),
                maxRotation: this.getMaxRotation(),
                minRotation: this.getMinRotation(),
                mirror: this.getMirror(),
                padding: this.getPadding()
            }
        }
    });

    return Ticks;

}, /* bExport= */ true);
