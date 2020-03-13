sap.ui.define([
    "sap/ui/core/Element",
    "./CartesianAxis"
], function(
    Element,
    CartesianAxis
) {
    "use strict";

    var CategoryAxis = CartesianAxis.extend("uia.chartjs.axes.CategoryAxis", {
        metadata: {

            library: "uia.chartjs.axes",

            properties: {

                min: { type: "string", group: "scale", defaultValue: undefined },

                max: { type: "string", group: "scale", defaultValue: undefined }
            }
        },

        getName: function() {
            return "category";
        },

        applyOptionEx: function(oAxis) {
            oAxis["ticks"] = {
                min: this.getMin(),
                max: this.getMax()
            }
            return oAxis;
        }
    });

    return CategoryAxis;

}, /* bExport= */ true);
