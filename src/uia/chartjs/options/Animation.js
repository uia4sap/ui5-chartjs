sap.ui.define([
    "sap/ui/core/Element",
    "./BaseOption"
], function(
    Element,
    BaseOption
) {
    "use strict";

    var Layout = BaseOption.extend("uia.chartjs.options.Layout", {
        metadata: {

            library: "uia.chartjs.options",

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
                        model: { type: "object" }
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

        _callbackDispatch: function(fireF) {
            var _fireF = fireF.bind(this);
            return function(model) {
                _fireF({
                    "model": model
                });
            }
        }
    });

    return Layout;

}, /* bExport= */ true);
