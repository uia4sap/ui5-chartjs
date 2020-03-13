sap.ui.define([
    "sap/ui/core/Element",
    "./BaseOption"
], function(
    Element,
    BaseOption
) {
    "use strict";

    var Tooltips = BaseOption.extend("uia.chartjs.options.Tooltips", {
        metadata: {

            library: "uia.chartjs.options",

            properties: {

                enabled: { type: "boolean", group: "tooltips", defaultValue: true },

                mode: { type: "string", group: "tooltips", defaultValue: "nearest" },

                intersect: { type: "boolean", group: "tooltips", defaultValue: true },

                position: { type: "string", group: "tooltips", defaultValue: "average" },

                backgroundColor: { type: "string", group: "tooltips", defaultValue: "rgba(0,0,0,0.8)" },

                titleFontFamily: { type: "string", group: "tooltips", defaultValue: "'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'" },

                titleFontSize: { type: "int", group: "tooltips", defaultValue: 12 },

                titleFontStyle: { type: "string", group: "tooltips", defaultValue: "bold" },

                titleFontColor: { type: "string", group: "tooltips", defaultValue: "#fff" },

                titleAlign: { type: "string", group: "tooltips", defaultValue: "left" },

                titleSpacing: { type: "int", group: "tooltips", defaultValue: 3 },

                titleMarginBottom: { type: "int", group: "tooltips", defaultValue: 6 },

                bodyFontFamily: { type: "string", group: "tooltips", defaultValue: "'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'" },

                bodyFontSize: { type: "int", group: "tooltips", defaultValue: 12 },

                bodyFontStyle: { type: "string", group: "tooltips", defaultValue: "normal" },

                bodyFontColor: { type: "string", group: "tooltips", defaultValue: "#fff" },

                bodyAlign: { type: "string", group: "tooltips", defaultValue: "left" },

                bodySpacing: { type: "int", group: "tooltips", defaultValue: 2 },

                footerFontFamily: { type: "string", group: "tooltips", defaultValue: "'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'" },

                footerFontSize: { type: "int", group: "tooltips", defaultValue: 12 },

                footerFontStyle: { type: "string", group: "tooltips", defaultValue: "normal" },

                footerFontColor: { type: "string", group: "tooltips", defaultValue: "#fff" },

                footerAlign: { type: "string", group: "tooltips", defaultValue: "left" },

                footerSpacing: { type: "int", group: "tooltips", defaultValue: 2 },

                footerMarginTop: { type: "int", group: "tooltips", defaultValue: 6 },

                xPadding: { type: "int", group: "tooltips", defaultValue: 6 },

                yPadding: { type: "int", group: "tooltips", defaultValue: 6 },

                caretPadding: { type: "int", group: "tooltips", defaultValue: 6 },

                caretSize: { type: "int", group: "tooltips", defaultValue: 6 },

                cornerRadius: { type: "int", group: "tooltips", defaultValue: 6 },

                multiKeyBackground: { type: "string", group: "tooltips", defaultValue: "#fff" },

                displayColors: { type: "boolean", group: "tooltips", defaultValue: true },

                borderColor: { type: "string", group: "tooltips", defaultValue: "rgba(0,0,0,0)" },

                borderWidth: { type: "boolean", group: "tooltips", defaultValue: 0 },

                right2Left: { type: "boolean", group: "tooltips", defaultValue: false }

            },
        },

        getName: function() {
            return "tooltips";
        },

        toOption: function() {
            return {
                enabled: this.getEnabled(),
                mode: this.getMode(),
                intersect: this.getIntersect(),
                position: this.getPosition(),
                backgroundColor: this.getBackgroundColor(),
                titleFontFamily: this.getTitleFontFamily(),
                titleFontSize: this.getTitleFontSize(),
                titleFontStyle: this.getTitleFontStyle(),
                titleFontColor: this.getTitleFontColor(),
                titleAlign: this.getTitleAlign(),
                titleSpacing: this.getTitleSpacing(),
                titleMarginBottom: this.getTitleMarginBottom(),
                bodyFontFamily: this.getBodyFontFamily(),
                bodyFontSize: this.getBodyFontSize(),
                bodyFontStyle: this.getBodyFontStyle(),
                bodyFontColor: this.getBodyFontColor(),
                bodyAlign: this.getBodyAlign(),
                bodySpacing: this.getBodySpacing(),
                footerFontFamily: this.getFooterFontFamily(),
                footerFontSize: this.getFooterFontSize(),
                footerFontStyle: this.getFooterFontStyle(),
                footerFontColor: this.getFooterFontColor(),
                footerAlign: this.getFooterAlign(),
                footerSpacing: this.getFooterSpacing(),
                footerMarginTop: this.getFooterMarginTop(),
                xPadding: this.getXPadding(),
                yPadding: this.getYPadding(),
                caretPadding: this.getCaretPadding(),
                caretSize: this.getCaretSize(),
                cornerRadius: this.getCornerRadius(),
                multiKeyBackground: this.getMultiKeyBackground(),
                displayColors: this.getDisplayColors(),
                borderColor: this.getBorderColor(),
                borderWidth: this.getBorderWidth(),
                rtl: this.getRight2Left()
            }
        }
    });

    return Tooltips;

}, /* bExport= */ true);
