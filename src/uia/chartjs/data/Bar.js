sap.ui.define([
    "sap/ui/core/Element",
    "./Dataset"
], function(
    Element,
    Dataset
) {
    "use strict";

    var Bar = Dataset.extend("uia.chartjs.data.Bar", {
        metadata: {
            
            library: "uia.chartjs.data",

            properties: {

                backgroundColor: { type: "any", group: "data", defaultValue: "rgba(0,0,0,0.1)" },

                borderColor: { type: "any", group: "data", defaultValue: undefined },

                borderSkip: { type: "any", group: "data", defaultValue: "bottom" },
                
                borderWidth: { type: "any", group: "data", defaultValue: 1 },

                hoverBackgroundColor: { type: "string", group: "data", defaultValue: "rgba(0,0,255,0.1)" },

                hoverBorderColor: { type: "string", group: "data", defaultValue: undefined },

                hoverBorderWidth: { type: "int", group: "data", defaultValue: 1 },

            },
        },

        constructor: function(sId, mSettings) {
            Element.apply(this, arguments);
        },

        applyDatasetEx: function(oDataset) {
            oDataset.type = "bar";
            oDataset.backgroundColor = this.getBackgroundColor();
            oDataset.borderColor = this.getBorderColor();
            oDataset.borderSkip = this.getBorderSkip();
            oDataset.borderWidth = this.getBorderWidth();
            oDataset.hoverBackgroundColor = this.getHoverBackgroundColor();
            oDataset.hoverBorderColor = this.getHoverBorderColor();
            oDataset.hoverBorderWidth = this.getHoverBorderWidth();
            return oDataset;
        }
    });


    return Bar;

}, /* bExport= */ true);
