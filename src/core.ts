import * as ko from "knockout";
import * as viewmodel from "./viewmodel";
export let vm = new viewmodel.ViewModel("TypeScript", "Knockout");
export let init = function(){
    ko.applyBindings(vm)
};
