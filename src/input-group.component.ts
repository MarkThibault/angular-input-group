//import * as angular from "angular";
export default class InputGroupComponent implements ng.IComponentOptions {
    bindings: any;
    controller: any;
    controllerAs: string;
    templateUrl: string;
    transclude: any;

    constructor() {
        this.bindings = {
            formName: "<",
            fieldName: "@"
        };
        this.controller = InputGroupController;
        this.controllerAs = "inputGroup";
        this.templateUrl = require("./input-group.component.html");
        this.transclude = true;
    }
}

export class InputGroupController {
    fieldName: any;
    formName: ng.IFormController;
    hasFocus: boolean;
    hasIcon: boolean;
    isDisabled: boolean;
    isRequired: boolean;
    maxlength: string;
    minlength: string;
    text: string;

    static $inject = ["$sce"];
    constructor (
        private $sce: ng.ISCEService
    ) { }

    $onInit() {
        this.hasFocus = false;
    }

    $onChanges(changes) {}

    $onDestroy() {}

    hasError() {
        return this.formName[this.fieldName] && this.isTouched() && this.formName[this.fieldName].$invalid;
    }

    hasValue() {
        return this.formName[this.fieldName] && this.formName[this.fieldName].$viewValue;
    }

    onBlur() {
        this.hasFocus = false;
    }

    onFocus() {
        this.hasFocus = true;
    }

    isDirty() {
        return this.formName[this.fieldName].$dirty;
    }

    isTouched() {
        return this.formName[this.fieldName].$touched;
    }
}