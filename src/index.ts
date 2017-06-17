import * as angular from "angular";
import "./index.scss";

// base component
import InputGroupConstants from "./input-group.constants";
import InputGroupService from "./input-group.service";
import InputDirective from "./input.directive";
import InputGroupComponent from "./input-group.component";
import InputGroupInfoComponent from "./input-group-info/input-group-info.component";
import InputGroupInputComponent from "./input-group-input/input-group-input.component";
import InputGroupLabelComponent from "./input-group-label/input-group-label.component";
// specific fields
import InputEmailComponent from "./input-email/input-email.component";
import InputPasswordComponent from "./input-password/input-password.component";
import InputPasswordConfirmationComponent from "./input-password-confirmation/input-password-confirmation.component";

angular.module("angularInputGroupModule", [
    "ngAnimate"
    ])
    .service("angularInputGroupService", InputGroupService)
    .constant("angularInputGroupConstants", InputGroupConstants)
    .directive("angularInput", InputDirective.Factory())
    .component("angularInputGroup", new InputGroupComponent())
    .component("angularInputGroupInfo", new InputGroupInfoComponent())
    .component("angularInputGroupInput", new InputGroupInputComponent())
    .component("angularInputGroupLabel", new InputGroupLabelComponent())
    .component("angularInputEmail", new InputEmailComponent())
    .component("angularInputPassword", new InputPasswordComponent())
    .component("angularInputPasswordConfirmation", new InputPasswordConfirmationComponent())
    .name;