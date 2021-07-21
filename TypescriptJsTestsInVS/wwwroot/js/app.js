"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnotherData = exports.separated = void 0;
var separated_1 = require("./modules/separated");
Object.defineProperty(exports, "separated", { enumerable: true, get: function () { return separated_1.separated; } });
function getData(value) {
    if (value > 1) {
        return true;
    }
}
module.exports = getData;
//module.exports = separated;
function getAnotherData(value) {
    return separated_1.separated.getDataFromSeparated(value);
}
exports.getAnotherData = getAnotherData;
//# sourceMappingURL=app.js.map