sap.ui.define([
    "sap/ui/core/Element",
    "./BaseOption"
], function(
    Element,
    BaseOption
) {
    "use strict";

    var Legend = BaseOption.extend("ui5.chartjs.options.Legend", {
        metadata: {

            library: "ui5.chartjs.options",

            properties: {

                display: { type: "boolean", group: "legend", defaultValue: true },

                position: { type: "string", group: "legend", defaultValue: "top" },

                align: { type: "string", group: "legend", defaultValue: "center" },

                fullWidth: { type: "boolean", group: "legend", defaultValue: true },

                reverse: { type: "boolean", group: "legend", defaultValue: false },

                right2Left: { type: "boolean", group: "legend", defaultValue: false }
            },
        },

        getName: function() {
            return "legend";
        },

        toOption: function() {
            return {
                display: this.getDisplay(),
                position: this.getPosition(),
                align: this.getAlign(),
                fullWidth: this.getFullWidth(),
                reverse: this.getReverse(),
                rtl: this.getRight2Left()
            }
        }
    });

    return Legend;

}, /* bExport= */ true);
