# Angular Input Group

Angular Input Group is a collection of input fields

## Getting Started

### Prerequisites

### Installing

Add the following to your dependencies:
```
"angular-input-group": "git://github.com/MarkThibault/angular-input-group.git",
```

### Usage

#### Inject into angular module:
```
angular.module("app", ["angularInputGroupModule"])
```

#### Using the component:
```
<form name="testForm">
    // Custom Field
    <angular-input-group form-name="testForm" field-name="custom">
        <angular-input-group-label>Custom Field Label</angular-input-group-label>
        <angular-input-group-input icon="app.icon" icon-click="app.iconClick()">
            <input angular-input id="custom" name="custom" type="text" ng-model="app.customField" required ng-disabled="false" minlength="8" maxlength="50" tabindex="4" pattern="^[a-z]+$" />
        </angular-input-group-input>
        <angular-input-group-info show-count="true" showCustomMessage1="" showCustomMessage2="" showCustomMessage3="">
            <angular-input-group-error-message-required>Custom Field is a required field</angular-input-group-error-message-required>
            <angular-input-group-error-message-minlength>Custom Field must be at least 8 charactes long</angular-input-group-error-message-minlength>
            <angular-input-group-error-message-maxlength>Custom Field is at it's maxlength</angular-input-group-error-message-maxlength>
            <angular-input-group-error-message-pattern>Custom Field only allows lower case letters</angular-input-group-error-message-pattern>
        </angular-input-group-info>
    </angular-input-group>

    // Email
    <angular-input-email form-name="testForm" field-name="email" parent-model="app.email" on-update="app.updateEmail($event)" is-disabled="false" is-required="true" auto-focus="true" tab-index="1" label-text=""></angular-input-email>

    // Password
    <angular-input-password form-name="testForm" field-name="password" parent-model="app.password" on-update="app.updatePassword($event)" is-disabled="false" is-required="true" auto-focus="false" tab-index="2" label-text=""></angular-input-password>

    // Password Confirmation
    <angular-input-password-confirmation form-name="testForm" field-name="confirmPassword" matching-field-name="password" parent-model="app.confirmtPassword" on-update="app.updateConfirmPassword($event)" is-disabled="false" is-required="true" auto-focus="false" tab-index="3" label-text=""></angular-input-password-confirmation>

</form>
```

#### Using the angularInputGroupService service:
```
import * as angularInputGroup from "angularInputGroup";

export class AppController {
    static $inject = ["angularInputGroupService"];
    constructor(
        private angularInputGroupService: angularInputGroup.InputGroupService
    ) {}

    submit(form: ng.IFormController) {
        this.angularInputGroupService.validateForm(form).then(() => {
            alert("Submitted!");
        }, (error) => {
            console.log(error);
        });
    }
}
```

## Running the tests


## Deployment



## Built With


## Contributing

## Versioning

## Authors

## License

## Acknowledgments
