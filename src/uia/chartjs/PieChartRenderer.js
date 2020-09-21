sap.ui.define([
    "jquery.sap.global",
    "sap/ui/core/Renderer",
    "./BaseChartRenderer"
], function(
    jQuery,
    Renderer,
    BaseChartRenderer
) {

    "use strict";

    var PieChartRenderer = Renderer.extend(BaseChartRenderer);

    /**
     * Adds control specific class
     *
     * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
     * @param {sap.ui.core.Control} oChart an object representation of the control that should be rendered
     */
    PieChartRenderer.addOuterClasses = function(oRm, oChart) {
        oRm.addClass("openui5-bar-chartjs");
    };

    return PieChartRenderer;

}, /* bExport= */ true);
