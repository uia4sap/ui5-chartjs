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

                right2Left: { type: "boolean", group: "tooltips", defaultValue: false },

                custom: { type: "function", group: "callback" },

                beforeTitle: { type: "function", group: "callback" },

                title: { type: "function", group: "callback" },

                afterTitle: { type: "function", group: "callback" },

                beforeBody: { type: "function", group: "callback" },

                beforeLabel: { type: "function", group: "callback" },

                label: { type: "function", group: "callback" },

                labelColor: { type: "function", group: "callback" },

                labelTextColor: { type: "function", group: "callback" },

                afterLabel: { type: "function", group: "callback" },

                afterBody: { type: "function", group: "callback" },

                beforeFooter: { type: "function", group: "callback" },

                footer: { type: "function", group: "callback" },

                afterFooter: { type: "function", group: "callback" }
            },

            events: {
            }
        },

        getName: function() {
            return "tooltips";
        },

        _callbackFire: function(fire, tooltipItem, data) {
            var dataset = data.datasets[tooltipItem.datasetIndex];
            fire({
                "tooltipItem": tooltipItem,
                "chart": data,
                "point": dataset.data[item.index]
            });
        },

        _callbackDispatch: function(fireF) {
            var _fireF = fireF.bind(this);
            return function(tooltipItem, data) {
                var dataset = data.datasets[tooltipItem.datasetIndex];
                var value = dataset.data[tooltipItem.index];
                return _fireF(tooltipItem, data, value);
            }
        },

        _callbackDispatch2: function(fireF) {
            var _fireF = fireF.bind(this);
            return function(tooltipItem, chart) {
                var dataset = chart.data.datasets[tooltipItem.datasetIndex];
                var value = dataset.data[tooltipItem.index];
                return _fireF(tooltipItem, chart, value);
            }
        },

        toOption: function() {
            var customFunc = this.getCustom() ? this.getCustom().bind(this) : undefined;
            var _callback = {};
            /**
            if (this.hasListeners("beforeTitle")) {
                _callback["beforeTitle"] = this._callbackDispatch(this.fireBeforeTitle);
            }
             */
            if (this.getBeforeTitle()) {
                _callback["beforeTitle"] = this.getBeforeTitle().bind(this);
            }
            if (this.getTitle()) {
                _callback["title"] = this.getTitle().bind(this);
            }
            if (this.getAfterTitle()) {
                _callback["afterTitle"] = this.getAfterTitle().bind(this);
            }
            if (this.getBeforeBody()) {
                _callback["beforeBody"] = this.getBeforeBody().bind(this);
            }
            if (this.getBeforeLabel()) {
                _callback["beforeLabel"] = this._callbackDispatch2(this.getBeforeLabel());
            }
            if (this.getLabel()) {
                _callback["label"] = this._callbackDispatch(this.getLabel());
            }
            if (this.getLabelColor()) {
                _callback["labelColor"] = this._callbackDispatch2(this.getLabelColor());
            }
            if (this.getLabelTextColor()) {
                _callback["labelTextColor"] = this._callbackDispatch2(this.getLabelTextColor());
            }
            if (this.getAfterLabel()) {
                _callback["afterLabel"] = this._callbackDispatch2(this.getAfterLabel());
            }
            if (this.getAfterBody()) {
                _callback["afterBody"] = this.getAfterBody().bind(this);
            }
            if (this.getBeforeFooter()) {
                _callback["beforeFooter"] = this.getBeforeFooter().bind(this);
            }
            if (this.getFooter()) {
                _callback["footer"] = this.getFooter().bind(this);
            }
            if (this.getAfterFooter()) {
                _callback["afterFooter"] = this.getAfterFooter().bind(this);
            }

            return {
                enabled: customFunc ? false : this.getEnabled(),
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
                custom: customFunc,
                callbacks: _callback
            }
        }
    });

    return Tooltips;

}, /* bExport= */ true);
