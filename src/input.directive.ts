import { InputGroupInputController } from "./input-group-input/input-group-input.component";

interface InputDirectiveAttributes extends ng.IAttributes {
    autofocus: any;
    disabled: boolean;
    id: string;
}

interface InputDirectiveParentScope extends ng.IScope {
    inputGroupInput: InputGroupInputController;
}

interface InputDirectiveScope extends ng.IScope {
    $parent: InputDirectiveParentScope;
    isDisabled: boolean;
}

export default class InputDirective implements ng.IDirective {
    public link: ng.IDirectiveLinkFn;
    public restrict: string;

    constructor(
        private $timeout: ng.ITimeoutService
    ) {
        this.restrict = "A";
        InputDirective.prototype.link = (scope: InputDirectiveScope, element: ng.IAugmentedJQuery, attrs: InputDirectiveAttributes) => {
            scope.isDisabled = attrs.disabled;
            element.addClass("InputGroup-input");
            element.on("focus", () => {
                scope.$parent.inputGroupInput.inputGroupController.hasFocus = true;
                scope.$parent.$apply();
            });
            element.on("blur", () => {
                scope.$parent.inputGroupInput.inputGroupController.hasFocus = false;
                scope.$parent.$apply();
            });
            attrs.$observe("disabled", (changes: boolean) => {
                scope.$parent.inputGroupInput.inputGroupController.isDisabled = changes;
            });
            attrs.$observe("required", (changes: boolean) => {
                scope.$parent.inputGroupInput.inputGroupController.isRequired = changes;
            });
            attrs.$observe("maxlength", (changes: string) => {
                scope.$parent.inputGroupInput.inputGroupController.maxlength = changes ? changes : null;
            });
            attrs.$observe("minlength", (changes: string) => {
                scope.$parent.inputGroupInput.inputGroupController.minlength = changes ? changes : null;
            });

            this.$timeout(() => {
                if (attrs.hasOwnProperty("autofocus")) {
                    document.getElementById(attrs.id).focus();
                }
            });
        };
    }

    public static Factory() {
        const directive = ($timeout) => new InputDirective($timeout);
        directive["$inject"] = ["$timeout"];
        return directive;
    }
}