sap.ui.define([
    "sap/ui/core/Element",
    "./CartesianAxis"
], function(
    Element,
    CartesianAxis
) {
    "use strict";

    var CategoryAxis = CartesianAxis.extend("ui5.chartjs.axes.CategoryAxis", {
        
        metadata: {

            library: "ui5.chartjs.axes",

            properties: {

                stacked: { type: "boolean", group: "Appearance", defaultValue: false },

                min: { type: "string", group: "scale", defaultValue: undefined },

                max: { type: "string", group: "scale", defaultValue: undefined }
            }
        },

        constructor: function(mSettings) {
            Element.apply(this, arguments);
            if (mSettings.offset == undefined) {
                this.setOffset(true);
            }
        },

        getName: function() {
            return "category";
        },

        applyScaleEx: function(oAxis) {
            oAxis["stacked"] = this.getStacked();
            oAxis["ticks"] = {
                min: this.getMin(),
                max: this.getMax()
            }
            return oAxis;
        }
    });

    return CategoryAxis;

}, /* bExport= */ true);
