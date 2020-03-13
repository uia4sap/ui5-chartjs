sap.ui.define([
    "sap/ui/core/Element"
], function(
    Element
) {
    "use strict";

    var BaseOption = Element.extend("uia.chartjs.options.BaseOption", {
        metadata: {
            library: "uia.chartjs.options",
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
