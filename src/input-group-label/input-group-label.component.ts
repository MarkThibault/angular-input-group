import { InputGroupController } from "../input-group.component";

export default class InputGroupLabelComponent implements ng.IComponentOptions {
    bindings: any;
    controller: any;
    controllerAs: string;
    require: any;
    templateUrl: string;
    transclude: boolean;

    constructor() {
        this.bindings = {
        };
        this.controller = InputGroupLabelController;
        this.controllerAs = "inputGroupLabel";
        this.require = {
            inputGroupController: "^angularInputGroup"
        };
        this.templateUrl = require("./input-group-label.component.html");
        this.transclude = true;
    }
}

export class InputGroupLabelController {
    fieldName: string;
    inputGroupController: InputGroupController;

    static $inject = [];
    constructor() {}

    $onInit() {
        this.fieldName = this.inputGroupController.fieldName;
    }
}