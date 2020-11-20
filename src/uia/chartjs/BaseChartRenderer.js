sap.ui.define([
    'jquery.sap.global'
], function(
    jQuery
) {
    "use strict";

    /**
     * BaseChartJS renderer.
     * 
     * @static
     * @namespace
     */
    var BaseChartRenderer = {};

    /**
     * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
     *
     * @param {sap.ui.core.RenderManager} oRm The RenderManager that can be used for writing to the render output buffer.
     * @param {sap.ui.core.Control} oChart An object representation of the control that should be rendered.
     */
    BaseChartRenderer.render = function(oRm, oChart) {
        oRm.write("<canvas");
        oRm.writeControlData(oChart);
        oRm.addClass("opeui5-base-chartjs");

        // 
        var h = oChart.getHeight();
        var w = oChart.getWidth();
        if (h) {
            oRm.write(" height='" + h + "'");
        }
        if (w) {
            oRm.write(" width='" + w + "'");
        }

        oRm.writeClasses();
        oRm.write(">");
        oRm.write("</canvas>");
    };

    return BaseChartRenderer;

}, /* bExport= */ true);
