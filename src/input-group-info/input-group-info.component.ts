import { InputGroupController } from "../input-group.component";

export default class InputGroupInfoComponent implements ng.IComponentOptions {
    bindings: any;
    controller: any;
    controllerAs: string;
    require: any;
    templateUrl: string;
    transclude: any;

    constructor() {
        this.bindings = {
            showCount: "<",
            showCustomMessage1: "<",
            showCustomMessage2: "<",
            showCustomMessage3: "<"
        };
        this.controller = InputGroupInfoController;
        this.controllerAs = "inputGroupInfo";
        this.require = {
            inputGroupController: "^angularInputGroup"
        };
        this.templateUrl = require("./input-group-info.component.html");
        this.transclude = {
            "angularInputGroupErrorMessageRequired": "?angularInputGroupErrorMessageRequired",
            "angularInputGroupErrorMessageMinlength": "?angularInputGroupErrorMessageMinlength",
            "angularInputGroupErrorMessageMaxlength": "?angularInputGroupErrorMessageMaxlength",
            "angularInputGroupErrorMessagePattern": "?angularInputGroupErrorMessagePattern",
            "angularInputGroupErrorMessageCustom1": "?angularInputGroupErrorMessageCustom1",
            "angularInputGroupErrorMessageCustom2": "?angularInputGroupErrorMessageCustom2",
            "angularInputGroupErrorMessageCustom3": "?angularInputGroupErrorMessageCustom3"
        };
    }
}

export class InputGroupInfoController {
    inputField: any;
    inputGroupController: InputGroupController;
    maxlength: string;
    showCount: boolean;

    static $inject = ["$timeout"];
    constructor(
        private $timeout: ng.ITimeoutService
    ) { }

    $onInit() {
    }

    $postLink() {
        this.$timeout(() => {
            this.inputField = this.inputGroupController.formName[this.inputGroupController.fieldName];
            this.maxlength = this.inputGroupController.maxlength;
        }, 0);
    }

    $onChanges(changes) { }

    $onDestroy() { }

    showInvalidError() {
        return this.inputGroupController.formName[this.inputGroupController.fieldName] && (this.inputGroupController.isTouched() || this.inputGroupController.isDirty()) && this.inputGroupController.formName[this.inputGroupController.fieldName].$invalid;
    }

    showMaxlengthCount() {
        return this.showCount && this.maxlength;
    }

    showMaxlengthError() {
        return this.inputGroupController.formName[this.inputGroupController.fieldName] && (this.inputGroupController.isTouched() || this.inputGroupController.isDirty()) && this.inputGroupController.formName[this.inputGroupController.fieldName].$error.maxlength;
    }

    showMinlengthError() {
        return this.inputGroupController.formName[this.inputGroupController.fieldName] && (this.inputGroupController.isTouched() || this.inputGroupController.isDirty()) && this.inputGroupController.formName[this.inputGroupController.fieldName].$error.minlength;
    }

    showPatternError() {
        return this.inputGroupController.formName[this.inputGroupController.fieldName] && (this.inputGroupController.isTouched() || this.inputGroupController.isDirty()) && this.inputGroupController.formName[this.inputGroupController.fieldName].$error.pattern;
    }

    showRequiredError() {
        return this.inputField && (this.inputGroupController.isTouched() || this.inputGroupController.isDirty()) && this.inputField.$error.required;
    }
}