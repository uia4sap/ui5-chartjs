sap.ui.define([
    "sap/ui/core/Element"
], function(
    Element
) {
    "use strict";

    var Plugin = Element.extend("uia.chartjs.plugins.Plugin", {
        metadata: {

            library: "uia.chartjs.plugins",

            properties: {
            },

            "defaultAggregation": "attrs",

            "aggregations": {

                attrs: { type: "uia.chartjs.plugins.PluginAttr", multiple: true, aggregation: "attrs" }
            },

        },

        constructor: function(sId, mSettings) {
            Element.apply(this, arguments);
        },

        getName: function() {
            return undefined;
        },

        implement: function() {
            return undefined;
        },

        toOption: function() {
            var attrs = this.getAggregation("attrs");

            var optionsPlugin = {};
            if (attrs) {
                attrs.forEach(function(a) {
                    optionsPlugin[a.getKey()] = a.getValue();
                });
            }
            return optionsPlugin;
        }
    });

    return Plugin;

}, /* bExport= */ true);
