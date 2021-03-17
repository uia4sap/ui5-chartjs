sap.ui.define([
    "sap/ui/core/Element"
], function(
    Element
) {
    "use strict";

    var PluginAttr = Element.extend("ui5.chartjs.plugins.PluginAttr", {
        metadata: {
            library: "ui5.chartjs.plugins",

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
