sap.ui.define([
    "sap/ui/core/Element",
    "./BaseOption"
], function(
    Element,
    BaseOption
) {
    "use strict";

    var Layout = BaseOption.extend("ui5.chartjs.options.Layout", {

        metadata: {

            library: "ui5.chartjs.options",

            properties: {

                duration: { type: "int", group: "layout", defaultValue: 1000 },

                easing: { type: "string", group: "layout", defaultValue: "easeOutQuart" }
                
            },

            events: {

                progress: {
                    parameters: {
                        model: { type: "object" }
                    }
                },

                complete: {
                    parameters: {
                        animation: { type: "object" }
                    }
                }
            }
        },

        getName: function() {
            return "animation";
        },

        toOption: function() {
            var animation = {
                duration: this.getDuration(),
                easing: this.getEasing()
            }
            if (this.hasListeners("progress")) {
                animation["onProgress"] = this._callbackDispatch(this.fireProgress);
            }
            if (this.hasListeners("complete")) {
                animation["onComplete"] = this._callbackDispatch(this.fireComplete);
            }
            return animation;
        },

        _callbackDispatch: function(fireEvent) {
            var _fireEvent = fireEvent.bind(this);
            return function(oAnimation) {
                _fireEvent({
                    "animation": oAnimation
                });
            }
        }
    });

    return Layout;

}, /* bExport= */ true);
