sap.ui.define([
    "sap/ui/core/Element",
    "./Dataset"
], function(
    Element,
    Dataset
) {
    "use strict";

    var Line = Dataset.extend("uia.chartjs.data.Line", {
        metadata: {

            library: "uia.chartjs.data",

            properties: {

                backgroundColor: { type: "string", group: "data", defaultValue: "rgba(0,0,0,0.1)" },

                borderCatStyle: { type: "string", group: "data", defaultValue: "butt" },

                borderColor: { type: "string", group: "data", defaultValue: "rgba(0,0,0,0.1)" },

                borderDash: { type: "array", group: "data", defaultValue: [] },

                borderDashOffset: { type: "string", group: "data", defaultValue: 0.0 },

                borderJoinStyle: { type: "string", group: "data", defaultValue: "miter" },

                borderWidth: { type: "int", group: "data", defaultValue: 2 },

                cubicInterpolationMode: { type: "string", group: "data", defaultValue: "default" },

                clip: { type: "float", group: "data", defaultValue: 1 },

                fill: { type: "boolean", group: "data", defaultValue: false },

                hoverBackgroundColor: { type: "string", group: "data", defaultValue: undefined },

                hoverBorderCapStyle: { type: "string", group: "data", defaultValue: undefined },

                hoverBorderColor: { type: "string", group: "data", defaultValue: undefined },

                hoverBorderDash: { type: "array", group: "data", defaultValue: undefined },

                hoverBorderDashOffset: { type: "string", group: "data", defaultValue: undefined },

                hoverBorderJoinStyle: { type: "string", group: "data", defaultValue: undefined },

                hoverBorderWidth: { type: "int", group: "data", defaultValue: undefined },

                lineTension: { type: "float", group: "data", defaultValue: 0 },

                pointBackgroundColor: { type: "string", group: "data", defaultValue: "rgba(0,0,0,0.1)" },

                pointBorderColor: { type: "string", group: "data", defaultValue: "rgba(0,0,0,0.1)" },

                pointBorderWidth: { type: "int", group: "data", defaultValue: 1 },

                pointHitRadius: { type: "int", group: "data", defaultValue: 1 },

                pointHoverBackgroundColor: { type: "string", group: "data", defaultValue: "rgba(0,0,0,0.4)" },

                pointHoverBorderColor: { type: "string", group: "data", defaultValue: undefined },

                pointHoverBorderWidth: { type: "int", group: "data", defaultValue: 1 },

                pointHoverRadius: { type: "int", group: "data", defaultValue: 4 },

                pointRotation: { type: "int", group: "data", defaultValue: 3 },

                pointStyle: { type: "string", group: "data", defaultValue: 'circle' },

                showLine: { type: "boolean", group: "data", defaultValue: undefined },

                spanGaps: { type: "boolean", group: "data", defaultValue: undefined },

                steppedLine: { type: "boolean", group: "data", defaultValue: false }
            },
        },

        constructor: function(sId, mSettings) {
            Element.apply(this, arguments);
        },

        applyDatasetEx: function(oDataset) {
            oDataset.type = "line";
            oDataset.backgroundColor = this.getBackgroundColor();
            oDataset.borderCatStyle = this.getBorderCatStyle();
            oDataset.borderColor = this.getBorderColor();
            oDataset.borderDash = this.getBorderDash();
            oDataset.borderDashOffset = this.getBorderDashOffset();
            oDataset.borderJoinStyle = this.getBorderJoinStyle();
            oDataset.borderWidth = this.getBorderWidth();
            oDataset.cubicInterpolationMode = this.getCubicInterpolationMode();
            oDataset.clip = this.getClip();
            oDataset.fill = this.getFill();
            oDataset.hoverBackgroundColor = this.getHoverBackgroundColor();
            oDataset.hoverBorderCapStyle = this.getHoverBorderCapStyle();
            oDataset.hoverBorderColor = this.getHoverBorderColor();
            oDataset.hoverBorderDash = this.getHoverBorderDash();
            oDataset.hoverBorderDashOffset = this.getHoverBorderDashOffset();
            oDataset.hoverBorderJoinStyle = this.getHoverBorderJoinStyle();
            oDataset.hoverBorderWidth = this.getHoverBorderWidth();
            oDataset.lineTension = this.getLineTension();
            oDataset.pointBackgroundColor = this.getPointBackgroundColor();
            oDataset.pointBorderColor = this.getPointBorderColor();
            oDataset.pointBorderWidth = this.getPointBorderWidth();
            oDataset.pointHitRadius = this.getPointHitRadius();
            oDataset.pointHoverBackgroundColor = this.getPointHoverBackgroundColor();
            oDataset.pointHoverBorderColor = this.getPointHoverBorderColor();
            oDataset.pointHoverBorderWidth = this.getPointHoverBorderWidth();
            oDataset.pointHoverRadius = this.getPointHoverRadius();
            oDataset.pointRotation = this.getPointRotation();
            oDataset.pointStyle = this.getPointStyle();
            oDataset.showLine = this.getShowLine();
            oDataset.spanGaps = this.getSpanGaps();
            oDataset.steppedLine = this.getSteppedLine();
            return oDataset;
        }
    });


    return Line;

}, /* bExport= */ true);
