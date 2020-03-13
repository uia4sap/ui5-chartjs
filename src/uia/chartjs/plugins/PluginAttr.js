sap.ui.define([
    "sap/ui/core/Element"
], function(
    Element
) {
    "use strict";

    var PluginAttr = Element.extend("uia.chartjs.plugins.PluginAttr", {
        metadata: {
            library: "uia.chartjs.plugins",

            properties: {

                key: { type: "string", group: "attribute" },

                value: { type: "any", group: "attribute" }
            },
        },

        constructor: function(sId, mSettings) {
            Element.apply(this, arguments);
        },
    });


    return PluginAttr;

}, /* bExport= */ true);
