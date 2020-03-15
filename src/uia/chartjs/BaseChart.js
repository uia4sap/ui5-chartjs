sap.ui.define([
    "sap/ui/core/Control",
    "sap/ui/core/Element",
    "./options/BaseOption"
], function(
    Control,
    Element,
    BaseOption
) {
    "use strict";

    /**
     * BaseChart class, it contains all the common properties, methods and events of a Chart
     *
     * @param {string} [sId] id for the new control, generated automatically if no id is given 
     * @param {object} [mSettings] initial settings for the new control
     *
     * @class
     * @extends sap.m.InputBase
     * @version ${version}
     *
     * @constructor
     * @public
     * @since 1.60
     * @name uia.chartjs.BaseChart
     */
    var BaseChart = Control.extend("uia.chartjs.BaseChart", /** @lends uia.chartjs.BaseChart.prototype */ {

        __ctx: undefined,

        __chart: undefined,

        __datasets: [],

        metadata: {

            "abstract": true,

            "library": 'uia.chartjs',

            "properties": {

                key: { type: "string", group: "common", defaultValue: undefined },

                height: { type: "int", group: "appearance", defaultValue: 400 },

                width: { type: "int", group: "appearance", defaultValue: 300 },

                labels: { type: "string[]", group: "appearance", defaultValue: [] }
            },

            "defaultAggregation": "datasets",

            "aggregations": {

                datasets: {
                    type: "uia.chartjs.data.Dataset",
                    multiple: true,
                    singularName: "dataset",
                    bindable: "bindable",
                },

                options: { type: "uia.chartjs.options.BaseOption", multiple: true, aggregation: "options" },

                plugins: { type: "uia.chartjs.plugins.Plugin", multiple: true, aggregation: "plugins" }
            },

            "events": {

                keyChanged: {

                    parameters: {

                        datasource: { type: "object" }
                    }
                }
            }
        },

        constructor: function(sId, mSettings) {
            Element.apply(this, arguments);
        },

        getChartJS: function() {
            return this.__chart;
        },

        getOptions: function() {
            var result = {
                scales: this.getScalesOption(),
                plugins: {}
            };

            var options = this.getAggregation("options");
            if(options) {
                options.forEach(o => {
                    result[o.getName()] = o.toOption();
                });
            }

            var plugins = this.getAggregation("plugins");
            if(plugins) {
                plugins.forEach(p => {
                    result.plugins[p.getName()] = p.toOption();
                });
            }

            return this.applyOptionsEx(result);
        },

        /**
         * @abstract
         * 
         */
        getChartType: function() {
            return "line";
        },

        /**
         * @abstract
         * 
         */
        getScalesOption: function() {
            return {
                xAxes: [{}],
                yAxes: [{}]
            };
        },

        /**
         * @abstract
         * 
         * @param {*} oOptions 
         */
        applyOptionsEx: function(oOptions) {
            return oOptions;
        },

        /**
         * @override
         * 
         */
        setKey: function(oKey) {
            if(oKey) {
                this.setProperty("key", oKey, true);
                this.fireKeyChanged({ "value": oKey });
            } else {
                this.setProperty("key", null, true);
                this.fireKeyChanged({ "value": null });
            }
            return this;
        },

        /**
         * 
         * @param {uia.chartjs.data.Dataset} oDataset 
         */
        addDataset: function(oDataset) {
            this.addAggregation("datasets", oDataset);

            var oDatasets = [];
            var items = this.getAggregation("datasets");
            items.forEach(item => oDatasets.push(item.toDataset()));
            this.__datasets = oDatasets;

            this.updateChart();
        },

        updateDatasets: function(sReason) {
            this.destroyDatasets();
            this.updateAggregation("datasets");

            var oDatasets = [];
            var items = this.getAggregation("datasets") || [];
            items.forEach(item => oDatasets.push(item.toDataset()));
            this.__datasets = oDatasets;

            this.updateChart();
        },

        updateChart: function(iDuration, bLazy, sEasing) {
            if(this.__chart) {
                this.__chart.data.datasets = this.__datasets;
                this.__chart.options = this.getOptions();
                this.__chart.update({
                    duration: iDuration,
                    lazy: bLazy,
                    easing: sEasing
                });
            }
        },

        onAfterRendering: function() {
            this.__ctx = document.getElementById(this.getId()).getContext("2d");
            this.__chart = new Chart(this.__ctx, {
                type: this.getChartType(),
                data: {
                    labels: this.getLabels(),
                    datasets: this.__datasets
                },
                options: this.getOptions()
            });
        },

        /**
         * The wrap method.
         */
        destroyChart: function() {
            if(this.__chart) {
                this.__chart.clear();
                this.__chart.destroy();
            }
        },

        /**
         * The wrap method.
         */
        reset: function() {
            if(this.__chart) {
                this.__chart.reset();
            }
        },

        /**
         * The wrap method.
         * 
         * @param {int} iDuration  Time for the animation of the redraw in milliseconds.
         * @param {boolean} bLazy  If true, the animation can be interrupted by other animations.
         * @param {string} sEasing The animation easing function.
         */
        render: function(iDuration, bLazy, sEasing) {
            if(this.__chart) {
                this.__chart.render({
                    duration: iDuration,
                    lazy: bLazy,
                    easing: sEasing
                });
            }
        },

        /**
         * The wrap method.
         */
        stop: function() {
            if(this.__chart) {
                this.__chart.stop();
            }
            return this;
        },

        /**
         * The wrap method.
         */
        resize: function() {
            if(this.__chart) {
                this.__chart.resize();
            }
            return this;
        },

        /**
         * The wrap method.
         */
        clear: function() {
            if(this.__chart) {
                this.__chart.clear();
            }
            return this;
        },

        /**
         * The wrap method.
         */
        toBase64Image: function() {
            if(this.__chart) {
                return this.__chart.toBase64Image();
            }
            return null;
        },

        /**
         * The wrap method.
         */
        getElementAtEvent: function(oEvent) {
            if(this.__chart) {
                return this.__chart.getElementAtEvent(oEvent);
            }
            return null;
        },

        /**
         * The wrap method.
         */
        getElementsAtEvent: function(oEvent) {
            if(this.__chart) {
                return this.__chart.getElementsAtEvent(oEvent);
            }
            return null;
        },

        /**
         * The wrap method.
         */
        getDatasetAtEvent: function(oEvent) {
            if(this.__chart) {
                return this.__chart.getDatasetAtEvent(oEvent);
            }
            return null;
        },

        /**
         * The wrap method.
         */
        getDatasetMeta: function(iIndex) {
            if(this.__chart) {
                return this.__chart.getDatasetMeta(iIndex);
            }
            return null;
        }
    });

    return BaseChart;

}, /* bExport= */ true);
