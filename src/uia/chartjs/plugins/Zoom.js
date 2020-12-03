sap.ui.define([
    "sap/ui/core/Element",
    "./Plugin",
    "../3rdparty/hammerjs/hammer",
    "../3rdparty/chartjs-plugin-zoom/chartjs-plugin-zoom"
], function(
    Element,
    Plugin
) {
    "use strict";

    /**
     * Zoom plugin OpenUI5 wrapper
     */
    var Zoom = Plugin.extend("uia.chartjs.plugins.Zoom", {

        metadata: {

            library: "uia.chartjs.plugins",

            properties: {

                panEnabled: { type: "boolean", group: "plugin", defaultValue: false },

                panMode: { type: "string", group: "plugin", defaultValue: "x" },

                panRangeMin: { type: "object", group: "plugin", defaultValue: undefined },

                panRangeMax: { type: "object", group: "plugin", defaultValue: undefined },

                zoomEnabled: { type: "boolean", group: "plugin", defaultValue: false },

                zoomMode: { type: "string", group: "plugin", defaultValue: "x" },

                zoomRangeMin: { type: "object", group: "plugin", defaultValue: undefined },

                zoomRangeMax: { type: "object", group: "plugin", defaultValue: undefined }
            },
        },

        constructor: function(sId, mSettings) {
            Element.apply(this, arguments);
        },

        getName: function() {
            return "zoom";
        },

        /**
         * @override
         * 
         */
        toOption: function() {
            return {
                pan: {
                    enabled: this.getPanEnabled(),
                    mode: this.getPanMode(),
                    rangeMin: this.getPanRangeMin(),
                    rangeMax: this.getPanRangeMax()
                },
                zoom: {
                    enabled: this.getZoomEnabled(),
                    mode: this.getZoomMode(),
                    rangeMin: this.getZoomRangeMin(),
                    rangeMax: this.getZoomRangeMax()
                }
            }
        }
    });

    return Zoom;

}, /* bExport= */ true);
