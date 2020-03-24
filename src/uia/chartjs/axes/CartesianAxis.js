sap.ui.define([
    "sap/ui/core/Element"
], function(
    Element
) {
    "use strict";

    var CartesianAxis = Element.extend("uia.chartjs.axes.CartesianAxis", {
        metadata: {

            library: "uia.chartjs.axes",

            properties: {

                axisID: { type: "string", group: "gridLines", defaultValue: undefined },

                display: { type: "boolean", group: "gridLines", defaultValue: true },

                /**
                 * Position of the axis in the chart. Possible values are: 'top', 'left', 'bottom', 'right'
                 */
                position: { type: "string", group: "gridLines", defaultValue: 'left' },

                /**
                 * If true, extra space is added to the both edges and the axis is scaled to fit into the chart area. 
                 */
                offset: { type: "boolean", group: "gridLines", defaultValue: false },

                weight: { type: "int", group: "gridLines", defaultValue: 0 },

                title: { type: "string", group: "gridLines", defaultValue: "" },

                titleDisplay: { type: "boolean", group: "gridLines", defaultValue: true },

                titleLineHeight: { type: "string", group: "gridLines", defaultValue: "1.2" },

                titleFontColor: { type: "string", group: "gridLines", defaultValue: "rgba(0,0,0,1.0)" },

                titleFontFamily: { type: "string", group: "gridLines", defaultValue: "Helvetica Neue,Helvetica,Arial,sans-serif" },

                titleFontSize: { type: "int", group: "gridLines", defaultValue: 14 },

                titleFontStyle: { type: "string", group: "gridLines", defaultValue: "normal" }
            },

            defaultAggregation: "gridLines",

            aggregations: {

                gridLines: { type: "uia.chartjs.axes.GridLines", multiple: false, aggregation: "gridLines" }
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

        constructor: function(sId, mSettings) {
            Element.apply(this, arguments);
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
            if(gridLines) {
                result["gridLines"] = gridLines.toOption();
            }

            return this.applyScaleEx(result);
        },
        
        /**
         * @abstract
         * 
         * @param {*} oAxis 
         */
        applyScaleEx: function(oAxis) {
            return oAxis;
        },
    });

    return CartesianAxis;

}, /* bExport= */ true);
