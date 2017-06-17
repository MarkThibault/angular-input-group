import "./app.component.scss";
import "./favicon.png";

import * as angular from "angular";
import "../../src/index";
import AppComponent from "./app.component";

angular
    .module("app", [
        "ngAnimate",
        "angularInputGroupModule"
        ])
    .component("app", new AppComponent());