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

                backgroundColor: { type: "any", group: "data", defaultValue: "rgba(0,0,0,0.1)" },

                borderCatStyle: { type: "any", group: "data", defaultValue: "butt" },

                borderColor: { type: "any", group: "data", defaultValue: "rgba(0,0,0,0.1)" },

                borderDash: { type: "any", group: "data", defaultValue: [] },

                borderDashOffset: { type: "any", group: "data", defaultValue: 0.0 },

                borderJoinStyle: { type: "any", group: "data", defaultValue: "miter" },

                borderWidth: { type: "any", group: "data", defaultValue: 2 },

                cubicInterpolationMode: { type: "any", group: "data", defaultValue: "default" },

                clip: { type: "any", group: "data", defaultValue: 1 },

                fill: { type: "any", group: "data", defaultValue: false },

                hoverBackgroundColor: { type: "any", group: "data", defaultValue: undefined },

                hoverBorderCapStyle: { type: "any", group: "data", defaultValue: undefined },

                hoverBorderColor: { type: "any", group: "data", defaultValue: undefined },

                hoverBorderDash: { type: "any", group: "data", defaultValue: undefined },

                hoverBorderDashOffset: { type: "any", group: "data", defaultValue: undefined },

                hoverBorderJoinStyle: { type: "any", group: "data", defaultValue: undefined },

                hoverBorderWidth: { type: "any", group: "data", defaultValue: undefined },

                lineTension: { type: "float", group: "data", defaultValue: 0 },

                pointBackgroundColor: { type: "any", group: "data", defaultValue: "rgba(0,0,0,0.1)" },

                pointBorderColor: { type: "any", group: "data", defaultValue: "rgba(0,0,0,0.1)" },

                pointBorderWidth: { type: "any", group: "data", defaultValue: 1 },

                pointHitRadius: { type: "any", group: "data", defaultValue: 1 },

                pointHoverBackgroundColor: { type: "any", group: "data", defaultValue: "rgba(0,0,0,0.4)" },

                pointHoverBorderColor: { type: "any", group: "data", defaultValue: undefined },

                pointHoverBorderWidth: { type: "any", group: "data", defaultValue: 1 },

                pointHoverRadius: { type: "any", group: "data", defaultValue: 4 },

                pointRotation: { type: "any", group: "data", defaultValue: 3 },

                pointStyle: { type: "any", group: "data", defaultValue: 'circle' },

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
