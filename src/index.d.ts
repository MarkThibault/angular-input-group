// Type definitions for Angular Input Group
export as namespace angularInputGroup;
export = angularInputGroup;

declare namespace angularInputGroup {
    interface InputGroupConstants {
        maxLength: {
            firstName: number,
            lastName: number,
            userName: number,
            password: number,
            emailAddress: number,
            securityQuestion: number,
            securityQuestionAnswer: number,
        },
        minLength: {
            password: number
        },
        pattern: {
            emailAddress: RegExp,
            password: RegExp,
        }
    }

    interface InputGroupService {
        validateForm(form: ng.IFormController): ng.IPromise<any>;
    }
}