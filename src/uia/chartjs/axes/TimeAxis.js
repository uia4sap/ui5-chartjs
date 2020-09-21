sap.ui.define([
    "sap/ui/core/Element",
    "./CartesianAxis"
], function(
    Element,
    CartesianAxis
) {
    "use strict";

    var TimeAxis = CartesianAxis.extend("uia.chartjs.axes.TimeAxis", {
        
        metadata: {

            library: "uia.chartjs.axes",

            properties: {

                source: { type: "string", group: "tick", defaultValue: "auto" },

                /**
                 * Moment.js
                 */
                displayFormat: { type: "object", group: "tick", defaultValue: undefined },

                isoWeekday: { type: "boolean", group: "time", defaultValue: false },

                /**
                 * Moment.js
                 */
                parser: { type: "string", group: "time", defaultValue: undefined },

                round: { type: "string", group: "time", defaultValue: false },

                /**
                 * Moment.js
                 */
                tooltipFormat: { type: "string", group: "time", defaultValue: undefined },

                unit: { type: "string", group: "time", defaultValue: undefined },

                stepSize: { type: "int", group: "time", defaultValue: undefined },

                minUnit: { type: "string", group: "time", defaultValue: "millisecond" }
            }
        },

        getName: function() {
            return "time";
        },

        applyScaleEx: function(oAxis) {
            oAxis["ticks"] = {
                source: this.getSource(),
            };
            oAxis["time"] = {
                displayFormat: this.getDisplayFormat(),
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
