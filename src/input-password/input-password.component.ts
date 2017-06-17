import * as angularInputGroup from "../index.d";

export default class InputPasswordComponent implements ng.IComponentOptions {
    bindings: any;
    controller: any;
    controllerAs: string;
    require: any;
    templateUrl: string;
    transclude: boolean;

    constructor() {
        this.bindings = {
            autoFocus: "<",
            fieldName: "@",
            formName: "<",
            isDisabled: "<",
            isRequired: "<",
            labelText: "@",
            onUpdate: "&",
            tabIndex: "@",
            parentModel: "<"
        };
        this.controller = InputPasswordController;
        this.controllerAs = "inputPassword";
        this.templateUrl = require("./input-password.component.html");
        this.transclude = false;
    }
}

export class InputPasswordController {
    autoFocus: boolean;
    fieldName: string;
    fieldType: string;
    formName: ng.IFormController;
    isDisabled: boolean;
    isRequired: boolean;
    label: string;
    maxLength: number;
    minLength: number;
    onUpdate: Function;
    parentModel: string;
    pattern: RegExp;
    tabIndex: string;

    private labelText: string;

    static $inject = ["$timeout", "angularInputGroupConstants"];
    constructor(
        private $timeout: ng.ITimeoutService,
        private angularInputGroupConstants: angularInputGroup.InputGroupConstants
    ) { }

    $onInit() {
        this.fieldType = "password";
        this.label = !this.labelText ? "Password" : this.labelText;
        this.pattern = this.angularInputGroupConstants.pattern.password;
        this.maxLength = this.angularInputGroupConstants.maxLength.password;
        this.minLength = this.angularInputGroupConstants.minLength.password;
    }

    $postLink() {
        if (this.autoFocus) {
            this.$timeout(() => {
                document.getElementById(this.fieldName).focus();
            });
        }
    }

    $onChanges(changes) { }

    $onDestroy() { }

    toggleFieldType() {
        this.fieldType = this.fieldType === "password" ? "text" : "password";
        document.getElementById(this.fieldName).focus();
    }

    shouldDisable() {
        return this.isDisabled;
    }

    shouldRequire() {
        return this.isRequired;
    }

    showCustomError() {
        return this.formName[this.fieldName] && (this.formName[this.fieldName].$touched || this.formName[this.fieldName].$dirty) && this.formName[this.fieldName].$error.pattern && !this.formName[this.fieldName].$error.required;
    }

    updateParent() {
        this.onUpdate({
            $event: {
                fieldData: this.parentModel
            }
        });
    }
}