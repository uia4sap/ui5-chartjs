sap.ui.define([
    "sap/ui/core/Element"
], function(
    Element
) {
    "use strict";

    var SpecInfo = Element.extend("ui5.chartjs.plugins.specline.SpecInfo", {
        metadata: {

            library: "ui5.chartjs.plugins.specline",

            properties: {

                name: { type: "string", group: "spec", defaultValue: undefined },

                display: { type: "boolean", group: "spec", defaultValue: true },

                value: { type: "any", group: "spec" },

                lineColor: { type: "string", group: "spec", defaultValue: "#F66" },

                lineWidth: { type: "int", group: "spec", defaultValue: 1 },

                xAxisID: { type: "string", group: "spec", defaultValue: undefined },

                yAxisID: { type: "string", group: "spec", defaultValue: undefined }
            }
        },

        constructor: function(sId, mSettings) {
            Element.apply(this, arguments);
        },
    });


    return SpecInfo;

}, /* bExport= */ true);
