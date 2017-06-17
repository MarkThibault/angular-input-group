const template = require("./app.component.html");
import * as angularInputGroup from "../../src/index.d";

export default class AppComponent implements ng.IComponentOptions {
    bindings: any;
    controller: any;
    controllerAs: string;
    templateUrl: string;
    transclude: boolean;

    constructor() {
        this.bindings = {};
        this.transclude = true;
        this.controller = AppController;
        this.controllerAs = "app";
        this.templateUrl = template;
    }
}

export class AppController {
    confirmPassword: string;
    disablePasswordForTest: boolean;
    password: string;
    icon = this.$sce.trustAsHtml(require("./arrow-icon.svg"));
    email: string;
    pattern: string = "/^" + this.password + "$/";
    style = "1";

    private firstFieldDisabledState = false;

    static $inject = ["$timeout", "$sce", "angularInputGroupService"];
    constructor(
        private $timeout: ng.ITimeoutService,
        private $sce: ng.ISCEService,
        private angularInputGroupService: angularInputGroup.InputGroupService
    ) {
        this.disablePasswordForTest = true;
        this.$timeout(() => {
            this.disablePasswordForTest = false;
        }, 1000);
    }

    submit(form: ng.IFormController) {
        this.angularInputGroupService.validateForm(form).then(() => {
            const submit = JSON.stringify({
                confirmPassword: this.confirmPassword,
                email: this.email,
                password: this.password,
            });
            alert(submit);
        }, (error) => {
            console.log(error);
        });
    }

    toggleStyle() {
        const inputsList = document.querySelectorAll(".InputGroup");
        function removeAllModifiers(addClass?: string) {
            [].forEach.call(inputsList, (el) => {
                for (let i = 0; i < el.classList.length; i++) {
                    if (el.classList[i].indexOf("InputGroup--") !== -1) {
                        el.classList.remove(el.classList[i]);
                        break;
                    }
                }
                if (addClass) {
                    el.classList.add(addClass);
                }
            });
        }
        switch (this.style) {
            case "0":
                removeAllModifiers();
                break;
            case "1":
                removeAllModifiers("InputGroup--material");
                break;
            case "2":
                removeAllModifiers("InputGroup--angular");
                break;
            default:
                break;
        }

    }

    updateConfirmPassword(event) {
        this.confirmPassword = event.fieldData;
    }

    updateEmail(event) {
        this.email = event.fieldData;
    }

    updatePassword(event) {
        this.password = event.fieldData;
    }
}