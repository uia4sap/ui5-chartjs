sap.ui.define([
    "sap/ui/core/Element",
    "./Dataset"
], function(
    Element,
    Dataset
) {
    "use strict";

    var PolarArea = Dataset.extend("uia.chartjs.data.PolarArea", {
        
        metadata: {
            
            library: "uia.chartjs.data",

            properties: {

                backgroundColor: { type: "any", group: "data", defaultValue: "rgba(0,0,0,0.1)" },

                borderAlign: { type: "any", group: "data", defaultValue: "center" },

                borderColor: { type: "any", group: "data", defaultValue: undefined },
                
                borderWidth: { type: "any", group: "data", defaultValue: 1 },

                hoverBackgroundColor: { type: "any", group: "data", defaultValue: undefined },

                hoverBorderColor: { type: "any", group: "data", defaultValue: undefined },

                hoverBorderWidth: { type: "any", group: "data", defaultValue: 1 }

            },
        },

        applyDatasetEx: function(oChart, oDataset) {
            oDataset.type = "polarArea";
            oDataset.backgroundColor = this.getBackgroundColor();
            oDataset.borderAlign = this.getBorderAlign();
            oDataset.borderColor = this.getBorderColor();
            oDataset.borderWidth = this.getBorderWidth();
            oDataset.hoverBackgroundColor = this.getHoverBackgroundColor() || this.getBackgroundColor();
            oDataset.hoverBorderColor = this.getHoverBorderColor() || this.getBorderWidth();
            oDataset.hoverBorderWidth = this.getHoverBorderWidth();
            return oDataset;
        }
    });


    return PolarArea;

}, /* bExport= */ true);
