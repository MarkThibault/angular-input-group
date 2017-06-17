import * as angularInputGroup from "../index.d";

export default class InputEmailComponent implements ng.IComponentOptions {
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
        this.controller = InputEmailController;
        this.controllerAs = "inputEmail";
        this.templateUrl = require("./input-email.component.html");
        this.transclude = false;
    }
}

export class InputEmailController {
    autoFocus: boolean;
    fieldName: string;
    formName: ng.IFormController;
    isRequired: boolean;
    isDisabled: boolean;
    label: string;
    maxLength: number;
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
        this.label = !this.labelText ? "Email" : this.labelText;
        this.pattern = this.angularInputGroupConstants.pattern.emailAddress;
        this.maxLength = this.angularInputGroupConstants.maxLength.emailAddress;
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

    shouldDisable() {
        return this.isDisabled;
    }

    shouldRequire() {
        return this.isRequired;
    }

    updateParent() {
        this.onUpdate({
            $event: {
                fieldData: this.parentModel
            }
        });
    }
}