sap.ui.define([], function() {

    "use strict";

    var colors = [
        ["#142459", "#ffffff"], // 0
        ["#174ba0", "#ffffff"],
        ["#19aade", "#ffffff"],
        ["#1ac9e6", "#000000"],
        ["#1ac9e6", "#000000"],
        ["#1de48d", "#000000"],
        ["#29d668", "#ffffff"], // 6
        ["#7d3ac1", "#ffffff"],
        ["#af48ce", "#ffffff"],
        ["#db4cb2", "#ffffff"],
        ["#eb548c", "#000000"],
        ["#ea7369", "#000000"],
        ["#fda58f", "#000000"],
        ["#820401", "#ffffff"], // 13
        ["#c02323", "#ffffff"],
        ["#de542c", "#ffffff"],
        ["#ef7e32", "#000000"],
        ["#ee9a3a", "#000000"],
        ["#eabd3b", "#000000"],
        ["#e7e34e", "#000000"]
    ];

    var Palette = {

        pick: function(i, alpha) {
            return alpha ? colors[i % colors.length][0] + alpha.toString(16) : colors[i % colors.length][0];
        },

        pickFore: function(i, alpha) {
            return alpha ? colors[i % colors.length][1] + alpha.toString(16) : colors[i % colors.length][1];
        }
    };

    return Palette;

}, /* bExport= */ true);
