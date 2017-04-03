define(["require", "exports", "knockout", "./apiData"], function (require, exports, ko, data) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ViewModel = (function () {
        function ViewModel(language, framework) {
            this.apiObjs = data.apiData;
            this.language = ko.observable(language);
            this.framework = ko.observable(framework);
            this.activeApiObj = ko.observable(null);
            this.helpVisible = ko.observable(false);
        }
        ViewModel.prototype.showHelp = function (obj, event, vm) {
            vm.helpVisible(true);
        };
        ViewModel.prototype.hideHelp = function (obj, event, vm) {
            vm.helpVisible(false);
        };
        ViewModel.prototype.handleClick = function (obj, event, parent) {
            parent.activeApiObj(obj);
        };
        return ViewModel;
    }());
    exports.ViewModel = ViewModel;
});
//# sourceMappingURL=viewmodel.js.map