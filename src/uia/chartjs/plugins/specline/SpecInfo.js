sap.ui.define([
    "sap/ui/core/Element"
], function(
    Element
) {
    "use strict";

    var SpecInfo = Element.extend("uia.chartjs.plugins.specline.SpecInfo", {
        metadata: {
            
            library: "uia.chartjs.plugins.specline",

            properties: {

                name: { type: "string", group: "spec", defaultValue: undefined },

                display: { type: "boolean", group: "spec", defaultValue: true },

                value: { type: "float", group: "spec", defaultValue: 0 },

                lineColor: { type: "string", group: "spec", defaultValue: "#F66" },

                lineWidth: { type: "int", group: "spec", defaultValue: 1 },

                yAxisID: { type: "string", group: "spec", defaultValue: undefined }
            }
        },

        constructor: function(sId, mSettings) {
            Element.apply(this, arguments);
        },

        /**
         * @override
         * 
         */
        setValue: function(value) {
            if (value) {
                if (isNaN(value)) {
                    this.setProperty("value", value, true);
                } else {
                    this.setProperty("value", parseFloat(value), true);
                }
            } else {
                this.setProperty("value", null, true);
            }
            return this;
        }

    });


    return SpecInfo;

}, /* bExport= */ true);
