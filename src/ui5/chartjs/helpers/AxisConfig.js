sap.ui.define([
    "sap/ui/core/Element"
], function(
    Element
) {
    "use strict";

    var AxisConfig = Element.extend("ui5.chartjs.helpers.AxisConfig", {
        
        metadata: {

            library: "ui5.chartjs.helpers",

            properties: {

                axisID: { type: "string", group: "helpers", bindable: "bindable", defaultValue: undefined },

                min: { type: "any", group: "helpers", bindable: "bindable", defaultValue: undefined },

                max: { type: "any", group: "helpers", bindable: "bindable", defaultValue: undefined },

                current: { type: "any", group: "helpers", bindable: "bindable", defaultValue: undefined },

                size: { type: "any", group: "helpers", bindable: "bindable", defaultValue: undefined },

                moveRatio: { type: "float", group: "helpers", bindable: "bindable", defaultValue: 0.5 }
            }

        },

        constructor: function(sId, mSettings) {
            Element.apply(this, arguments);
        },

        resetScale: function(charts) {
            this.moveScale(charts, this.getMin());
        },

        prevScale: function(charts) {
            var current = this.getCurrent() || this.getMin();
            var move = this.getSize() * this.getMoveRatio();
            this.moveScale(charts, current - move);
        },

        nextScale: function(charts) {
            var current = this.getCurrent() || this.getMin();
            var move = this.getSize() * this.getMoveRatio();
            this.moveScale(charts, current + move);
        },

        endScale: function(charts) {
            this.moveScale(charts, this.getMax() - this.getSize());
        },

        updateScale: function(charts) {
            var current = this.getCurrent() || this.getMin();
            this.moveScale(charts, current);
        },
 
        moveScale: function(charts, current) {
            current = Math.max(this.getMin(), current);
            var size = this.getSize();
            var max = Math.min(current + size, this.getMax());
            var min = max - size;
            var axisID = this.getAxisID();
            charts.forEach(function(chart) {
                chart.updateAxisRange(axisID, min, max);
            });
            this.setCurrent(min);            
        }
   });


    return AxisConfig;

}, /* bExport= */ true);
