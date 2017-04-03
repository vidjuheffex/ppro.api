import * as ko from "knockout";
import * as data from "./apiData"

export class ViewModel {
    language: KnockoutObservable<string>;
    framework: KnockoutObservable<string>;
    public activeApiObj: KnockoutObservable<object>;
    public helpVisible: KnockoutObservable<boolean>

    public showHelp(obj: object, event: string, vm: any){
        vm.helpVisible(true)
    }

    public hideHelp(obj: object, event: string, vm: any){
        vm.helpVisible(false)
    }

    public handleClick(obj: object, event: string, parent: any){
        parent.activeApiObj(obj)
    }

    public apiObjs = data.apiData;

    constructor(language: string, framework: string) {
        this.language = ko.observable(language);
        this.framework = ko.observable(framework);
        this.activeApiObj = ko.observable(null);
        this.helpVisible = ko.observable(false)
    }
}

