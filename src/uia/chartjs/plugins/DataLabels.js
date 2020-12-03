sap.ui.define([
    "sap/ui/core/Element",
    "./Plugin",
    "../3rdparty/chartjs-plugin-datalabels/chartjs-plugin-datalabels"
], function(
    Element,
    Plugin
) {
    "use strict";

    /**
     * DataLabels plugin OpenUI5 wrapper
     */
    var DataLabels = Plugin.extend("uia.chartjs.plugins.DataLabels", {

        metadata: {

            library: "uia.chartjs.plugins",
        },

        constructor: function(sId, mSettings) {
            Element.apply(this, arguments);
        },

        getName: function() {
            return "datalabels";
        }
    });

    return DataLabels;

}, /* bExport= */ true);
