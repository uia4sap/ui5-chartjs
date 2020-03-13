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
     * @param {sap.ui.core.Control} oControl An object representation of the control that should be rendered.
     */
    BaseChartRenderer.render = function(oRm, oChart) {
        oRm.write("<canvas");
        oRm.writeControlData(oChart);
        oRm.addClass("opeui5-base-chartjs");
        this.addOuterClasses(oRm, oChart);
        oRm.writeClasses();
        oRm.write(">");

        if(oChart.getHeight() !== undefined && oChart.getHeight() !== null) {
            oRm.addStyle("height", oChart.getHeight());
        }
        if(oChart.getWidth() !== undefined && oChart.getWidth() !== null) {
            oRm.addStyle("width", oChart.getWidth());
        }
        oRm.writeStyles();

        oRm.write("</canvas>");
    };

    /**
     * This method is reserved for derived classes to add extra classes for chart container.
     *
     * @param {sap.ui.core.RenderManager} oRm The RenderManager that can be used for writing to the render output buffer.
     * @param {sap.ui.core.Control} oControl An object representation of the control that should be rendered.
     */
    BaseChartRenderer.addOuterClasses = function(oRm, oControl) {

    };


    return BaseChartRenderer;

}, /* bExport= */ true);
