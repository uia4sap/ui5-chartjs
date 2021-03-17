sap.ui.define([
    "sap/ui/core/Element",
    "./Dataset"
], function(
    Element,
    Dataset
) {
    "use strict";

    var Pie = Dataset.extend("ui5.chartjs.data.Pie", {
        
        metadata: {
            
            library: "ui5.chartjs.data",

            properties: {

                backgroundColor: { type: "any", group: "data", defaultValue: "rgba(0,0,0,0.1)" },

                borderAlign: { type: "any", group: "data", defaultValue: "center" },

                borderColor: { type: "any", group: "data", defaultValue: undefined },
                
                borderWidth: { type: "any", group: "data", defaultValue: 1 },

                hoverBackgroundColor: { type: "any", group: "data", defaultValue: undefined },

                hoverBorderColor: { type: "any", group: "data", defaultValue: undefined },

                hoverBorderWidth: { type: "any", group: "data", defaultValue: 1 },

                weight: { type: "int", group: "data", defaultValue: 1 }

            },
        },

        applyDatasetEx: function(oChart, oDataset) {
            oDataset.type = "pie";
            oDataset.backgroundColor = this.getBackgroundColor();
            oDataset.borderAlign = this.getBorderAlign();
            oDataset.borderColor = this.getBorderColor();
            oDataset.borderWidth = this.getBorderWidth();
            oDataset.hoverBackgroundColor = this.getHoverBackgroundColor() || this.getBackgroundColor();
            oDataset.hoverBorderColor = this.getHoverBorderColor() || this.getBorderWidth();
            oDataset.hoverBorderWidth = this.getHoverBorderWidth();
            oDataset.weight = this.getWeight();
            return oDataset;
        }
    });


    return Pie;

}, /* bExport= */ true);
