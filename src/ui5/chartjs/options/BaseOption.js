sap.ui.define([
    "sap/ui/core/Element"
], function(
    Element
) {
    "use strict";

    var BaseOption = Element.extend("ui5.chartjs.options.BaseOption", {
        metadata: {

            library: "ui5.chartjs.options",

        },

        getName: function() {
            return "";
        },

        toOption: function() {
            return {}
        }
    });


    return BaseOption;

}, /* bExport= */ true);
