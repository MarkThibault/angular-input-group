import { InputGroupController } from "../input-group.component";

export default class InputPasswordConfirmationComponent implements ng.IComponentOptions {
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
            parentModel: "<",
            matchingFieldName: "@"
        };
        this.controller = InputPasswordConfirmationController;
        this.controllerAs = "inputPasswordConfirmation";
        this.templateUrl = require("./input-password-confirmation.component.html");
        this.transclude = false;
    }
}

export class InputPasswordConfirmationController {
    autoFocus: boolean;
    fieldName: string;
    formName: ng.IFormController;
    fieldType: string;
    inputGroupController: InputGroupController;
    isRequired: boolean;
    isDisabled: boolean;
    label: string;
    matchingFieldName: string;
    onUpdate: Function;
    parentModel: string;
    pattern: RegExp;
    tabIndex: string;

    private labelText: string;
    private matchingFieldValue: string;

    static $inject = ["$scope", "$timeout"];
    constructor(
        private $scope: ng.IScope,
        private $timeout: ng.ITimeoutService
    ) { }

    $onInit() {
        this.fieldType = "password";
        this.label = !this.labelText ? "Confirm Password" : this.labelText;
    }

    $postLink() {
        this.$timeout(() => {
            if (this.autoFocus) {
                document.getElementById(this.fieldName).focus();
            }
            this.matchingFieldValue = this.formName[this.matchingFieldName];
            this.$scope.$watch("inputPasswordConfirmation.matchingFieldValue.$viewValue", () => {
                this.doesPasswordMatch();
            });
        });
    }

    $onChanges(changes) {
        if (changes.matchingModel) {
            this.doesPasswordMatch();
        }
    }

    $onDestroy() { }

    doesPasswordMatch() {
        if (this.formName[this.fieldName]) {
            if (this.formName[this.fieldName].$viewValue !== "" && (this.formName[this.fieldName].$viewValue !== this.formName[this.matchingFieldName].$viewValue)) {
                this.formName[this.fieldName].$setValidity("confirmation", false);
            }
            else {
                this.formName[this.fieldName].$setValidity("confirmation", true);
            }
        }
    }

    shouldDisable() {
        return this.isDisabled;
    }

    shouldRequire() {
        return this.isRequired;
    }

    showCustomError() {
        return this.formName[this.fieldName] &&
            (this.formName[this.fieldName].$touched || this.formName[this.fieldName].$dirty) &&
            this.formName[this.fieldName].$invalid &&
            !this.formName[this.fieldName].$error.required;
    }

    toggleFieldType() {
        this.fieldType = this.fieldType === "password" ? "text" : "password";
        document.getElementById(this.fieldName).focus();
    }

    updateParent() {
        this.onUpdate({
            $event: {
                fieldData: this.parentModel
            }
        });
    }
}