define(["require", "exports", "knockout", "./viewmodel"], function (require, exports, ko, viewmodel) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.vm = new viewmodel.ViewModel("TypeScript", "Knockout");
    exports.init = function () {
        ko.applyBindings(exports.vm);
    };
});
//# sourceMappingURL=core.js.map