sap.ui.define([
    "sap/ui/core/Element",
    "./BaseOption"
], function(
    Element,
    BaseOption
) {
    "use strict";

    var Layout = BaseOption.extend("ui5.chartjs.options.Layout", {
        metadata: {

            library: "ui5.chartjs.options",

            properties: {

                paddingLeft: { type: "int", group: "layout", defaultValue: 0 },

                paddingRight: { type: "int", group: "layout", defaultValue: 0 },

                paddingTop: { type: "int", group: "layout", defaultValue: 0 },

                paddingBottom: { type: "int", group: "layout", defaultValue: 0 },
            },
        },

        getName: function() {
            return "layout";
        },

        toOption: function() {
            return {
                padding: {
                    left: this.getPaddingLeft(),
                    right: this.getPaddingRight(),
                    top: this.getPaddingTop(),
                    bottom: this.getPaddingBottom()
                }
            }
        }
    });

    return Layout;

}, /* bExport= */ true);
