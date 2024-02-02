sap.ui.define([
    "sap/ui/core/Element",
    "./CartesianAxis",
    "../3rdparty/moment/chartjs-adapter-moment"
], function(
    Element,
    CartesianAxis
) {
    "use strict";

    var TimeAxis = CartesianAxis.extend("ui5.chartjs.axes.TimeAxis", {

        metadata: {

            library: "ui5.chartjs.axes",

            properties: {

                bounds: { type: "string", group: "scale", defaultValue: "data" },

                distribution: { type: "string", group: "scale", defaultValue: "linear" },

                source: { type: "string", group: "ticks", defaultValue: "auto" },

                displayFormats: { type: "object", group: "time" },

                isoWeekday: { type: "boolean", group: "time", defaultValue: false },

                parser: { type: "string", group: "time", defaultValue: "YYYY-MM-DD hh:mm:ss.SSS" },

                round: { type: "string", group: "time", defaultValue: false },

                tooltipFormat: { type: "string", group: "time", defaultValue: undefined },

                unit: { type: "string", group: "time", defaultValue: "minute" },

                stepSize: { type: "int", group: "time", defaultValue: 1 },

                minUnit: { type: "string", group: "time", defaultValue: undefined },

                max: { type: "float", group: "scale", defaultValue: undefined },

                min: { type: "float", group: "scale", defaultValue: undefined }

            }
        },

        getName: function() {
            return "time";
        },

        applyScaleEx: function(oAxis) {
            oAxis["adapters"] = {
                date: {}
            };
            oAxis["distribution"] = this.getDistribution();
            oAxis["bounds"] = this.getBounds();
            oAxis["ticks"] = {
                source: this.getSource(),
            };
            oAxis["time"] = {
                displayFormats: {
                    hour: "H:mm",
                    minute: "H:mm",
                    second: "H:mm.ss"
                },
                isoWeekday: this.getIsoWeekday(),
                parser: this.getParser(),
                round: this.getRound(),
                tooltipFormat: this.getTooltipFormat(),
                unit: this.getUnit(),
                stepSize: this.getStepSize(),
                minUnit: this.getMinUnit()
            }
            return oAxis;
        }
    });

    return TimeAxis;

}, /* bExport= */ true);
