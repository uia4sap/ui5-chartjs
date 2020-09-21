sap.ui.define([
    "sap/ui/core/Element"
], function(
    Element
) {
    "use strict";

    var GridLines = Element.extend("uia.chartjs.options.GridLines", {
        
        metadata: {

            library: "uia.chartjs.axes",

            properties: {

                display: { type: "boolean", group: "gridlines", defaultValue: true },

                circular: { type: "boolean", group: "gridlines", defaultValue: false },

                color: { type: "string", group: "gridlines", defaultValue: "rgba(0,0,0,0.1)" },

                borderDash: { type: "int[]", group: "gridlines", defaultValue: [] },

                borderDashOffset: { type: "float", group: "gridlines", defaultValue: 0.0 },

                lineWidth: { type: "int", group: "gridlines", defaultValue: 1 },

                drawBorder: { type: "boolean", group: "gridlines", defaultValue: true },

                drawOnChartArea: { type: "boolean", group: "gridlines", defaultValue: true },

                drawTicks: { type: "boolean", group: "gridlines", defaultValue: true },

                tickMarkLength: { type: "int", group: "gridlines", defaultValue: 10 },

                zeroLineWidth: { type: "int", group: "gridlines", defaultValue: 1 },

                zeroLineColor: { type: "string", group: "gridlines", defaultValue: "rgba(0,0,0,0.25)" },

                zeroLineBorderDash: { type: "int[]", group: "gridlines", defaultValue: [] },

                zeroLineBorderDashOffset: { type: "boolean", group: "gridlines", defaultValue: 0.0 },

                offsetGridLines: { type: "boolean", group: "gridlines", defaultValue: false },

                z: { type: "int", group: "gridlines", defaultValue: 0 }
            },
        },

        toOption: function() {
            return {
                display: this.getDisplay(),
                circular: this.getCircular(),
                color: this.getColor(),
                borderDash: this.getBorderDash(),
                borderDashOffset: this.getBorderDashOffset(),
                lineWidth: this.getLineWidth(),
                drawBorder: this.getDrawBorder(),
                drawOnChartArea: this.getDrawOnChartArea(),
                drawTicks: this.getDrawTicks(),
                tickMarkLength: this.getTickMarkLength(),
                zeroLineWidth: this.getZeroLineWidth(),
                zeroLineColor: this.getZeroLineColor(),
                zeroLineBorderDash: this.getZeroLineBorderDash(),
                zeroLineBorderDashOffset: this.getZeroLineBorderDashOffset(),
                offsetGridLines: this.getOffsetGridLines(),
                z: this.getZ()
            }
        }
    });

    return GridLines;

}, /* bExport= */ true);
