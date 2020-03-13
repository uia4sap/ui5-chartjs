sap.ui.define([
    "sap/ui/core/Element",
    "./BaseOption"
], function(
    Element,
    BaseOption
) {
    "use strict";

    var Title = BaseOption.extend("uia.chartjs.options.Title", {
        metadata: {

            library: "uia.chartjs.options",

            properties: {

                display: { type: "boolean", group: "title", defaultValue: true },

                position: { type: "string", group: "title", defaultValue: "top" },

                fontSize: { type: "int", group: "title", defaultValue: 12 },

                fontFamily: { type: "string", group: "title", defaultValue: "'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'" },

                fontColor: { type: "string", group: "title", defaultValue: "rgba(0,0,0,1)" },

                fontStyle: { type: "string", group: "title", defaultValue: "bold" },

                padding: { type: "string", group: "title", defaultValue: 10 },

                lineHeight: { type: "any", group: "title", defaultValue: 1.2 },

                text: { type: "any", group: "title", defaultValue: null }
            },
        },

        getName: function() {
            return "title";
        },

        toOption: function() {
            return {
                display: this.getDisplay(),
                position: this.getPosition(),
                fontSize: this.getFontSize(),
                fontFamily: this.getFontFamily(),
                fontColor: this.getFontColor(),
                fontStyle: this.getFontStyle(),
                padding: this.getPadding(),
                lineHeight: this.getLineHeight(),
                text: this.getText()
            }
        }
    });

    return Title;

}, /* bExport= */ true);
