enum IconType {
    "eye" = 0
}

import { InputGroupController } from "../input-group.component";

export default class InputGroupInputComponent implements ng.IComponentOptions {
    bindings: any;
    controller: any;
    controllerAs: string;
    require: any;
    templateUrl: string;
    transclude: boolean;

    constructor() {
        this.bindings = {
            icon: "<",
            iconClick: "&",
            iconType: "@"
        };
        this.controller = InputGroupInputController;
        this.controllerAs = "inputGroupInput";
        this.require = {
            inputGroupController: "^angularInputGroup"
        };
        this.templateUrl = require("./input-group-input.component.html");
        this.transclude = true;
    }
}

export class InputGroupInputController {
    icon: any;
    iconClick: Function;
    iconType: string | number | IconType;
    inputGroupController: InputGroupController;

    static $inject = ["$sce"];
    constructor(
        private $sce: ng.ISCEService
    ) { }

    $onInit() {
        this.setupIcon();
        this.inputGroupController.hasIcon = (this.icon);
    }

    private setupIcon() {
        if (this.iconType) {
            if (typeof this.iconType === "string") {
                this.iconType = IconType[this.iconType.toLowerCase()];
            }
            switch (this.iconType) {
                case 0:
                    this.icon = this.$sce.trustAsHtml(require("../icons/eye-icon.svg"));
                    break;
                default:
                    null;
            }
        }
    }
}