sap.ui.define([
    "sap/ui/core/Element",
    "./Dataset"
], function(
    Element,
    Dataset
) {
    "use strict";

    var Bar = Dataset.extend("ui5.chartjs.data.Bar", {
        
        metadata: {
            
            library: "ui5.chartjs.data",

            properties: {

                backgroundColor: { type: "any", group: "data", defaultValue: "rgba(0,0,0,0.1)" },

                borderColor: { type: "any", group: "data", defaultValue: undefined },

                borderSkip: { type: "any", group: "data", defaultValue: "bottom" },
                
                borderWidth: { type: "any", group: "data", defaultValue: 1 },

                hoverBackgroundColor: { type: "any", group: "data", defaultValue: "rgba(0,0,255,0.1)" },

                hoverBorderColor: { type: "any", group: "data", defaultValue: undefined },

                hoverBorderWidth: { type: "any", group: "data", defaultValue: 1 },

            },
        },

        applyDatasetEx: function(oChart, oDataset) {
            oDataset.type = oChart instanceof ui5.chartjs.BarChart ? oChart.getChartType() : "bar";
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
