sap.ui.define([
    "sap/ui/core/Element"
], function(
    Element
) {
    "use strict";

    var Dataset = Element.extend("uia.chartjs.data.Dataset", {
        metadata: {
            
            library: "uia.chartjs.data",

            properties: {

                data: { type: "array", group: "data" },

                label: { type: "string", group: "data", defaultValue: "top" },

                order: { type: "int", group: "data", defaultValue: 0 },

                xAxisID: { type: "string", group: "data", defaultValue: undefined },

                yAxisID: { type: "string", group: "data", defaultValue: undefined },
            }
        },

        constructor: function(sId, mSettings) {
            Element.apply(this, arguments);
        },

        getName: function() {
            return "";
        },

        toOption: function() {
            return {}
        },

        toDataset: function(label, data, backgroundColor, order) {
            var oDataset = {
                "data": this.getData(),
                "label": this.getLabel(),
                "order": this.getOrder(),
                "xAxisID": this.getXAxisID(),
                "yAxisID": this.getYAxisID()
            };
            return this.applyDatasetEx(oDataset);
        },

        applyDatasetEx: function(oDataset) {
            return oDataset;
        }
    });


    return Dataset;

}, /* bExport= */ true);
