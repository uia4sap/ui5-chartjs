sap.ui.define([
    "sap/ui/core/Element"
], function(
    Element
) {
    "use strict";

    var Plugin = Element.extend("ui5.chartjs.plugins.Plugin", {
        metadata: {

            library: "ui5.chartjs.plugins",

            properties: {
            },

            defaultAggregation: "attrs",

            aggregations: {

                attrs: { 
                    type: "ui5.chartjs.plugins.PluginAttr", 
                    multiple: true, 
                    singularName: "attr" 
                }
            },

        },

        constructor: function(sId, mSettings) {
            Element.apply(this, arguments);
        },

        addAttrValue: function(key, value) {
            this.addAttr(new ui5.chartjs.plugins.PluginAttr({
                "key": key,
                "value": value
            }));
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
