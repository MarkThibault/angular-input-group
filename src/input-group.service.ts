import * as angularInputGroup from "./index.d";

export default class InputGroupService {

    static $inject = ["$q"];
    constructor(
        private $q: ng.IQService
    ) { }

    validateForm(form: ng.IFormController): angularInputGroup.InputGroupService {
        let response;
        if (form.$valid) {
            response = this.$q.resolve();
        }
        else {
            for (let propertyName in form) {
                if (propertyName.indexOf("$") === -1) {
                    form[propertyName].$setTouched();
                }
            }
            response = this.$q.reject("Form was invalid.");
        }
        return response;
    }
}