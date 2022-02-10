sap.ui.define([
    "sap/ui/core/Element"
], function(
    Element
) {
    "use strict";

    var CartesianAxis = Element.extend("ui5.chartjs.axes.CartesianAxis", {
        metadata: {

            library: "ui5.chartjs.axes",

            properties: {

                axisID: { type: "string", group: "scale", defaultValue: undefined },

                display: { type: "boolean", group: "scale", defaultValue: true },

                /**
                 * Position of the axis in the chart. Possible values are: 'top', 'left', 'bottom', 'right'
                 */
                position: { type: "string", group: "scale", defaultValue: 'left' },

                /**
                 * If true, extra space is added to the both edges and the axis is scaled to fit into the chart area. 
                 */
                offset: { type: "boolean", group: "scale", defaultValue: false },

                weight: { type: "int", group: "scale", defaultValue: 0 },

                title: { type: "string", group: "scale", defaultValue: "" },

                titleDisplay: { type: "boolean", group: "scale", defaultValue: true },

                titleLineHeight: { type: "string", group: "scale", defaultValue: "1.2" },

                titleFontColor: { type: "string", group: "scale", defaultValue: "rgba(0,0,0,1.0)" },

                titleFontFamily: { type: "string", group: "scale", defaultValue: "Helvetica Neue,Helvetica,Arial,sans-serif" },

                titleFontSize: { type: "int", group: "scale", defaultValue: 14 },

                titleFontStyle: { type: "string", group: "scale", defaultValue: "normal" }
            },

            defaultAggregation: "gridLines",

            aggregations: {

                gridLines: { type: "ui5.chartjs.axes.GridLines", multiple: false, aggregation: "gridLines" },

                ticks: { type: "ui5.chartjs.axes.Ticks", multiple: false, aggregation: "ticks" }
            },

            event: {
                beforeUpdate: {
                    parameters: {
                        datasource: { type: "axis" }
                    }
                },

                beforeSetDimensions: {
                    parameters: {
                        datasource: { type: "axis" }
                    }
                },

                afterSetDimensions: {
                    parameters: {
                        datasource: { type: "axis" }
                    }
                },

                beforeDataLimits: {
                    parameters: {
                        datasource: { type: "axis" }
                    }
                },

                afterDataLimits: {
                    parameters: {
                        datasource: { type: "axis" }
                    }
                },

                beforeBuildTicks: {
                    parameters: {
                        datasource: { type: "axis" }
                    }
                },

                afterBuildTicks: {
                    parameters: {
                        datasource: { type: "axis" }
                    }
                },

                beforeTickToLabelConversion: {
                    parameters: {
                        datasource: { type: "axis" }
                    }
                },

                afterTickToLabelConversion: {
                    parameters: {
                        datasource: { type: "axis" }
                    }
                },

                beforeCalculateTickRotation: {
                    parameters: {
                        datasource: { type: "axis" }
                    }
                },

                afterCalculateTickRotation: {
                    parameters: {
                        datasource: { type: "axis" }
                    }
                },

                beforeFit: {
                    parameters: {
                        datasource: { type: "axis" }
                    }
                },

                afterFit: {
                    parameters: {
                        datasource: { type: "axis" }
                    }
                },

                afterUpdate: {
                    parameters: {
                        datasource: { type: "axis" }
                    }
                }
            }
        },

        getName: function() {
            return undefined;
        },

        toScale: function() {
            var result = {
                id: this.getAxisID(),
                type: this.getName(),
                display: this.getDisplay(),
                position: this.getPosition(),
                offset: this.getOffset(),
                weight: this.getWeight(),
                scaleLabel: {
                    labelString: this.getTitle(),
                    display: this.getTitleDisplay(),
                    lineHeight: this.getTitleLineHeight(),
                    fontColor: this.getTitleFontColor(),
                    fontFamily: this.getTitleFontFamily(),
                    fontSize: this.getTitleFontSize(),
                    fontStyle: this.getTitleFontStyle()
                }
            };

            var gridLines = this.getAggregation("gridLines");
            if (gridLines) {
                result["gridLines"] = gridLines.toOption();
            }
            var ticks = this.getAggregation("ticks");
            if (ticks) {
                result["ticks"] = ticks.toOption();
            }

            return this.applyScaleEx(result);
        },

        applyScaleEx: function(oAxis) {
            return oAxis;
        },
    });

    return CartesianAxis;

}, /* bExport= */ true);
