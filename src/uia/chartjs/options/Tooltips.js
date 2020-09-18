sap.ui.define([
    "sap/ui/core/Element",
    "./BaseOption"
], function(
    Element,
    BaseOption
) {
    "use strict";
        
    var Tooltips = BaseOption.extend("uia.chartjs.options.Tooltips", {

        metadata: {

            library: "uia.chartjs.options",

            properties: {

                enabled: { type: "boolean", group: "tooltips", defaultValue: true },

                custom: { type: "function", group: "tooltips" },

                mode: { type: "string", group: "tooltips", defaultValue: "nearest" },

                intersect: { type: "boolean", group: "tooltips", defaultValue: true },

                position: { type: "string", group: "tooltips", defaultValue: "average" },

                backgroundColor: { type: "string", group: "tooltips", defaultValue: "rgba(0,0,0,0.8)" },

                titleFontFamily: { type: "string", group: "tooltips", defaultValue: "'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'" },

                titleFontSize: { type: "int", group: "tooltips", defaultValue: 12 },

                titleFontStyle: { type: "string", group: "tooltips", defaultValue: "bold" },

                titleFontColor: { type: "string", group: "tooltips", defaultValue: "#fff" },

                titleAlign: { type: "string", group: "tooltips", defaultValue: "left" },

                titleSpacing: { type: "int", group: "tooltips", defaultValue: 3 },

                titleMarginBottom: { type: "int", group: "tooltips", defaultValue: 6 },

                bodyFontFamily: { type: "string", group: "tooltips", defaultValue: "'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'" },

                bodyFontSize: { type: "int", group: "tooltips", defaultValue: 12 },

                bodyFontStyle: { type: "string", group: "tooltips", defaultValue: "normal" },

                bodyFontColor: { type: "string", group: "tooltips", defaultValue: "#fff" },

                bodyAlign: { type: "string", group: "tooltips", defaultValue: "left" },

                bodySpacing: { type: "int", group: "tooltips", defaultValue: 2 },

                footerFontFamily: { type: "string", group: "tooltips", defaultValue: "'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'" },

                footerFontSize: { type: "int", group: "tooltips", defaultValue: 12 },

                footerFontStyle: { type: "string", group: "tooltips", defaultValue: "normal" },

                footerFontColor: { type: "string", group: "tooltips", defaultValue: "#fff" },

                footerAlign: { type: "string", group: "tooltips", defaultValue: "left" },

                footerSpacing: { type: "int", group: "tooltips", defaultValue: 2 },

                footerMarginTop: { type: "int", group: "tooltips", defaultValue: 6 },

                xPadding: { type: "int", group: "tooltips", defaultValue: 6 },

                yPadding: { type: "int", group: "tooltips", defaultValue: 6 },

                caretPadding: { type: "int", group: "tooltips", defaultValue: 6 },

                caretSize: { type: "int", group: "tooltips", defaultValue: 6 },

                cornerRadius: { type: "int", group: "tooltips", defaultValue: 6 },

                multiKeyBackground: { type: "string", group: "tooltips", defaultValue: "#fff" },

                displayColors: { type: "boolean", group: "tooltips", defaultValue: true },

                borderColor: { type: "string", group: "tooltips", defaultValue: "rgba(0,0,0,0)" },

                borderWidth: { type: "boolean", group: "tooltips", defaultValue: 0 },

                right2Left: { type: "boolean", group: "tooltips", defaultValue: false }
            },

            events: {

                beforeTitle: {
                    parameters: { chart: { type: "object" }, tooltipItem: { type: "object" } }
                },
                title: {
                    parameters: { chart: { type: "object" }, tooltipItem: { type: "object" } }
                },
                afterTitle: {
                    parameters: { chart: { type: "object" }, tooltipItem: { type: "object" } }
                },
                beforeBody: {
                    parameters: { chart: { type: "object" }, tooltipItem: { type: "object" } }
                },
                beforeLabel: {
                    parameters: { chart: { type: "object" }, tooltipItem: { type: "object" } }
                },
                label: {
                    parameters: { chart: { type: "object" }, tooltipItem: { type: "object" } }
                },
                labelColor: {
                    parameters: { chart: { type: "object" }, tooltipItem: { type: "object" } }
                },
                labelTextColor: {
                    parameters: { chart: { type: "object" }, tooltipItem: { type: "object" } }
                },
                afterLabel: {
                    parameters: { chart: { type: "object" }, tooltipItem: { type: "object" } }
                },
                afterBody: {
                    parameters: { chart: { type: "object" }, tooltipItem: { type: "object" } }
                },
                beforeFooter: {
                    parameters: { chart: { type: "object" }, tooltipItem: { type: "object" } }
                },
                footer: {
                    parameters: { chart: { type: "object" }, tooltipItem: { type: "object" } }
                },
                afterFooter: {
                    parameters: { chart: { type: "object" }, tooltipItem: { type: "object" } }
                }
            }
        },

        getName: function() {
            return "tooltips";
        },

        _callbackFire: function(fire, tooltipItem, data) {
            fire({ 
                "tooltipItem": tooltipItem,
                "chart": data 
            });
        },

        _callbackDispatch: function(fireF) {
            var _fireF = fireF.bind(this);
            return function(tooltipItem, data) {
                _fireF({
                    "tooltipItem": tooltipItem,
                    "chart": data 
                });
            }
        },

        toOption: function() {
            var _callback = {};
            if (this.hasListeners("beforeTitle")) {
                _callback["beforeTitle"] = this._callbackDispatch(this.fireBeforeTitle);
            }
            if (this.hasListeners("title")) {
                _callback["title"] = this._callbackDispatch(this.fireTitle);
            }
            if (this.hasListeners("afterTitle")) {
                _callback["afterTitle"] = this._callbackDispatch(this.fireAfterTitle);
            }
            if (this.hasListeners("beforeBody")) {
                _callback["beforeBody"] = this._callbackDispatch(this.fireBeforeBody);
            }
            if (this.hasListeners("beforeLabel")) {
                _callback["beforeLabel"] = this._callbackDispatch(this.fireBeforeLabel);
            }
            if (this.hasListeners("label")) {
                _callback["label"] = this._callbackDispatch(this.fireLabel);
            }
            if (this.hasListeners("labelColor")) {
                _callback["labelColor"] = this._callbackDispatch(this.fireLabelColor);
            }
            if (this.hasListeners("labelTextColor")) {
                _callback["labelTextColor"] = this._callbackDispatch(this.fireLabelTextColor);
            }
            if (this.hasListeners("afterLabel")) {
                _callback["afterLabel"] = this._callbackDispatch(this.fireAfterLabel);
            }
            if (this.hasListeners("afterBody")) {
                _callback["afterBody"] = this._callbackDispatch(this.fireAfterBody);
            }
            if (this.hasListeners("beforeFooter")) {
                _callback["beforeFooter"] = this._callbackDispatch(this.fireBeforeFooter);
            }
            if (this.hasListeners("footer")) {
                _callback["footer"] = this._callbackDispatch(this.fireFooter);
            }
            if (this.hasListeners("afterFooter")) {
                _callback["afterFooter"] = this._callbackDispatch(this.fireAfterFooter);
            }

            var customFunc = this.getCustom() ? this.getCustom().bind(this) : undefined;
            return {
                enabled: customFunc ? false : this.getEnabled(),
                custom: customFunc,
                mode: this.getMode(),
                intersect: this.getIntersect(),
                position: this.getPosition(),
                backgroundColor: this.getBackgroundColor(),
                titleFontFamily: this.getTitleFontFamily(),
                titleFontSize: this.getTitleFontSize(),
                titleFontStyle: this.getTitleFontStyle(),
                titleFontColor: this.getTitleFontColor(),
                titleAlign: this.getTitleAlign(),
                titleSpacing: this.getTitleSpacing(),
                titleMarginBottom: this.getTitleMarginBottom(),
                bodyFontFamily: this.getBodyFontFamily(),
                bodyFontSize: this.getBodyFontSize(),
                bodyFontStyle: this.getBodyFontStyle(),
                bodyFontColor: this.getBodyFontColor(),
                bodyAlign: this.getBodyAlign(),
                bodySpacing: this.getBodySpacing(),
                footerFontFamily: this.getFooterFontFamily(),
                footerFontSize: this.getFooterFontSize(),
                footerFontStyle: this.getFooterFontStyle(),
                footerFontColor: this.getFooterFontColor(),
                footerAlign: this.getFooterAlign(),
                footerSpacing: this.getFooterSpacing(),
                footerMarginTop: this.getFooterMarginTop(),
                xPadding: this.getXPadding(),
                yPadding: this.getYPadding(),
                caretPadding: this.getCaretPadding(),
                caretSize: this.getCaretSize(),
                cornerRadius: this.getCornerRadius(),
                multiKeyBackground: this.getMultiKeyBackground(),
                displayColors: this.getDisplayColors(),
                borderColor: this.getBorderColor(),
                borderWidth: this.getBorderWidth(),
                rtl: this.getRight2Left(),
                callbacks: _callback
            }
        }
    });

    return Tooltips;

}, /* bExport= */ true);
