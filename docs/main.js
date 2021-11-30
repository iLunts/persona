(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/roma/github/persona/src/main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_blocks_main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/blocks/main/main.component */ "shLs");
/* harmony import */ var _shared_components_blocks_beauty_camera_beauty_camera_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/blocks/beauty-camera/beauty-camera.component */ "2f8j");
/* harmony import */ var _shared_components_blocks_camera_camera_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/blocks/camera/camera.component */ "nExe");
/* harmony import */ var _shared_components_blocks_face_filter_face_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/blocks/face-filter/face-filter.component */ "EXMz");
/* harmony import */ var _shared_components_blocks_fun_masks_fun_masks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/blocks/fun-masks/fun-masks.component */ "zJ0b");
/* harmony import */ var _shared_components_blocks_models_favorite_app_models_favorite_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/blocks/models-favorite-app/models-favorite-app.component */ "bYeR");








class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 8, vars: 0, consts: [[1, "main"], [1, "main__wrap"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-block-main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-block-beauty-camera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-block-camera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-block-face-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-block-fun-masks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-block-models-favorite-app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_blocks_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"], _shared_components_blocks_beauty_camera_beauty_camera_component__WEBPACK_IMPORTED_MODULE_2__["BeautyCameraComponent"], _shared_components_blocks_camera_camera_component__WEBPACK_IMPORTED_MODULE_3__["CameraComponent"], _shared_components_blocks_face_filter_face_filter_component__WEBPACK_IMPORTED_MODULE_4__["FaceFilterComponent"], _shared_components_blocks_fun_masks_fun_masks_component__WEBPACK_IMPORTED_MODULE_5__["FunMasksComponent"], _shared_components_blocks_models_favorite_app_models_favorite_app_component__WEBPACK_IMPORTED_MODULE_6__["ModelsFavoriteAppComponent"]], styles: [".main[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.main[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 50%;\n  left: 50%;\n  margin-left: -50%;\n  display: block;\n  width: 100vw;\n  height: 100vw;\n  background: #3ec195;\n  background: radial-gradient(circle, #3ec195 0%, #000000 60%);\n  opacity: 0.4;\n  z-index: 0;\n}\n.main[_ngcontent-%COMP%]   .main__wrap[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb21hL2dpdGh1Yi9wZXJzb25hL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsbUJBQUE7RUFXQSw0REFBQTtFQUtBLFlBQUE7RUFDQSxVQUFBO0FDWko7QURlRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ2JKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtNTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZ3O1xuXG4gICAgYmFja2dyb3VuZDogcmdiKDYyLCAxOTMsIDE0OSk7XG4gICAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoXG4gICAgICBjaXJjbGUsXG4gICAgICByZ2JhKDYyLCAxOTMsIDE0OSwgMSkgMCUsXG4gICAgICByZ2JhKDAsIDAsIDAsIDEpIDYwJVxuICAgICk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoXG4gICAgICBjaXJjbGUsXG4gICAgICByZ2JhKDYyLCAxOTMsIDE0OSwgMSkgMCUsXG4gICAgICByZ2JhKDAsIDAsIDAsIDEpIDYwJVxuICAgICk7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxuICAgICAgY2lyY2xlLFxuICAgICAgcmdiYSg2MiwgMTkzLCAxNDksIDEpIDAlLFxuICAgICAgcmdiYSgwLCAwLCAwLCAxKSA2MCVcbiAgICApO1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgICB6LWluZGV4OiAwO1xuICB9XG5cbiAgJiAmX193cmFwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgfVxufVxuIiwiLm1haW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWFpbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNTAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kOiAjM2VjMTk1O1xuICBiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsICMzZWMxOTUgMCUsICMwMDAwMDAgNjAlKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjM2VjMTk1IDAlLCAjMDAwMDAwIDYwJSk7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICMzZWMxOTUgMCUsICMwMDAwMDAgNjAlKTtcbiAgb3BhY2l0eTogMC40O1xuICB6LWluZGV4OiAwO1xufVxuLm1haW4gLm1haW5fX3dyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "2f8j":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/blocks/beauty-camera/beauty-camera.component.ts ***!
  \***********************************************************************************/
/*! exports provided: BeautyCameraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeautyCameraComponent", function() { return BeautyCameraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BeautyCameraComponent {
    constructor() { }
    ngOnInit() { }
}
BeautyCameraComponent.ɵfac = function BeautyCameraComponent_Factory(t) { return new (t || BeautyCameraComponent)(); };
BeautyCameraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BeautyCameraComponent, selectors: [["app-block-beauty-camera"]], decls: 34, vars: 0, consts: [[1, "block", "block--camera"], [1, "block__body"], [1, "block__content"], [1, "block__title"], [1, "block__desc"], [1, "block-grad"], [1, "block-grad__body"], [1, "block-grad__content"], [1, "block-grad__text"], [1, "block-grad__images"], ["src", "./assets/img/blocks/persona-gradient.png", "alt", "", 1, "block-grad__images-img"], [1, "block-pref"], [1, "block-pref__item"], ["src", "./assets/svg/icons/check.svg", "alt", "", 1, "block-pref__img"], [1, "block-pref__text"]], template: function BeautyCameraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Persona is your new beauty camera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "from the creators of Gradient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Persona: Beauty Camera is the latest app in a rapidly growing Ticket to the Moon, Inc.\u2019s app portfolio. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " At Ticket to the Moon, Inc. we aim at making professional photo and video content easy and accessible for everyone. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "70M+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " people create unique content with Gradient and Persona ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Our apps were awarded by Apple as a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u2018Best of 2019\u2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " apps and the most downloaded ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Celebrities choose our apps when creating content for their social profiles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".block.block--camera[_ngcontent-%COMP%]   .block__body[_ngcontent-%COMP%] {\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.block.block--camera[_ngcontent-%COMP%]   .block__title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 44px;\n  line-height: 54px;\n  font-weight: 800;\n  letter-spacing: 0;\n  background: -webkit-linear-gradient(45deg, #3ec195, #58ea81);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.block.block--camera[_ngcontent-%COMP%]   .block__desc[_ngcontent-%COMP%] {\n  max-width: 600px;\n  text-align: center;\n  margin: 0 auto;\n  color: #a0a0a0;\n}\n.block-grad[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  width: 100%;\n  margin: 50px 0 25px;\n  border-radius: 25px;\n  overflow: hidden;\n}\n.block-grad[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  left: -5%;\n  top: -15%;\n  width: 300px;\n  height: 300px;\n  border-radius: 100%;\n  background: #06339e;\n  background: radial-gradient(circle, #06339e 0%, #000000 100%);\n  opacity: 0.2;\n}\n.block-grad[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  right: -5%;\n  bottom: -15%;\n  width: 300px;\n  height: 300px;\n  background: #581643;\n  background: radial-gradient(circle, #581643 0%, #000000 100%);\n  opacity: 0.3;\n}\n.block-grad[_ngcontent-%COMP%]   .block-grad__body[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.1);\n  padding: 10px 80px 30px;\n  text-align: center;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border-radius: 25px;\n  z-index: 2;\n}\n.block-grad[_ngcontent-%COMP%]   .block-grad__text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 32px;\n  color: #dfdfdf;\n  text-align: left;\n  max-width: 450px;\n  font-weight: 500;\n}\n.block-grad[_ngcontent-%COMP%]   .block-grad__text[_ngcontent-%COMP%]    + .block-grad__text[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n.block-grad[_ngcontent-%COMP%]   .block-grad__content[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  width: 50%;\n}\n.block-grad[_ngcontent-%COMP%]   .block-grad__images[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  width: 50%;\n}\n.block-grad[_ngcontent-%COMP%]   .block-grad__images-img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 500px;\n}\n.block-pref[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  width: 100%;\n  align-items: stretch;\n  justify-content: space-between;\n}\n.block-pref[_ngcontent-%COMP%]   .block-pref__item[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.1);\n  padding: 40px 30px;\n  text-align: left;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border-radius: 25px;\n}\n.block-pref[_ngcontent-%COMP%]   .block-pref__item[_ngcontent-%COMP%]    + .block-pref__item[_ngcontent-%COMP%] {\n  margin-left: 25px;\n}\n.block-pref[_ngcontent-%COMP%]   .block-pref__img[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  flex-shrink: 0;\n  width: 26px;\n  height: 26px;\n  margin-right: 15px;\n}\n.block-pref[_ngcontent-%COMP%]   .block-pref__text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 26px;\n  font-weight: 400;\n}\n.block-pref[_ngcontent-%COMP%]   .block-pref__text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n@media only screen and (min-device-width: 320px) and (max-device-width: 767px) {\n  .block.block--camera[_ngcontent-%COMP%]   .block__title[_ngcontent-%COMP%] {\n    font-size: 26px;\n    line-height: 34px;\n  }\n  .block-grad[_ngcontent-%COMP%] {\n    margin: 20px 0;\n    border-radius: 16px;\n  }\n  .block-grad[_ngcontent-%COMP%]   .block-grad__body[_ngcontent-%COMP%] {\n    padding: 20px;\n    flex-direction: column-reverse;\n    border-radius: 16px;\n  }\n  .block-grad[_ngcontent-%COMP%]   .block-grad__content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .block-grad[_ngcontent-%COMP%]   .block-grad__images[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 20px;\n  }\n  .block-pref[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .block-pref[_ngcontent-%COMP%]   .block-pref__item[_ngcontent-%COMP%] {\n    border-radius: 16px;\n    padding: 20px;\n  }\n  .block-pref[_ngcontent-%COMP%]   .block-pref__item[_ngcontent-%COMP%]    + .block-pref__item[_ngcontent-%COMP%] {\n    margin: 15px 0 0 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb21hL2dpdGh1Yi9wZXJzb25hL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmxvY2tzL2JlYXV0eS1jYW1lcmEvYmVhdXR5LWNhbWVyYS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmxvY2tzL2JlYXV0eS1jYW1lcmEvYmVhdXR5LWNhbWVyYS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUVJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0ROO0FESEU7RUFRSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0REFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUNGTjtBRGJFO0VBbUJJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0hOO0FEUUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDTkY7QURRRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUVBLG1CQUFBO0VBV0EsNkRBQUE7RUFLQSxZQUFBO0FDbkJKO0FEc0JFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLG1CQUFBO0VBV0EsNkRBQUE7RUFLQSxZQUFBO0FDakNKO0FEb0NFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDbENKO0FEcUNFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ25DSjtBRHFDSTtFQUNFLGdCQUFBO0FDbkNOO0FEdUNFO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUNyQ0o7QUR3Q0U7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQ3RDSjtBRHdDSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ3RDTjtBRDJDQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0FDekNGO0FEMkNFO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxtQkFBQTtBQ3pDSjtBRDJDSTtFQUNFLGlCQUFBO0FDekNOO0FENkNFO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDM0NKO0FEOENFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUM1Q0o7QUR5Q0U7RUFNSSxnQkFBQTtBQzVDTjtBRG9EQTtFQUVJO0lBRUksZUFBQTtJQUNBLGlCQUFBO0VDcEROO0VEeURBO0lBQ0UsY0FBQTtJQUNBLG1CQUFBO0VDdkRGO0VEeURFO0lBQ0UsYUFBQTtJQUNBLDhCQUFBO0lBQ0EsbUJBQUE7RUN2REo7RUQwREU7SUFDRSxXQUFBO0VDeERKO0VEMkRFO0lBQ0UsV0FBQTtJQUNBLG1CQUFBO0VDekRKO0VENkRBO0lBQ0Usc0JBQUE7RUMzREY7RUQ2REU7SUFDRSxtQkFBQTtJQUNBLGFBQUE7RUMzREo7RUQ2REk7SUFDRSxrQkFBQTtFQzNETjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmxvY2tzL2JlYXV0eS1jYW1lcmEvYmVhdXR5LWNhbWVyYS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9jayB7XG4gICYmLS1jYW1lcmEge1xuICAgIC5ibG9ja19fYm9keSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC5ibG9ja19fdGl0bGUge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiA0NHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDU0cHg7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgIzNlYzE5NSwgIzU4ZWE4MSk7XG4gICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAuYmxvY2tfX2Rlc2Mge1xuICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgY29sb3I6ICNhMGEwYTA7XG4gICAgfVxuICB9XG59XG5cbi5ibG9jay1ncmFkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA1MHB4IDAgMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTUlO1xuICAgIHRvcDogLTE1JTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuXG4gICAgYmFja2dyb3VuZDogcmdiKDYsIDUxLCAxNTgpO1xuICAgIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KFxuICAgICAgY2lyY2xlLFxuICAgICAgcmdiYSg2LCA1MSwgMTU4LCAxKSAwJSxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMSkgMTAwJVxuICAgICk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoXG4gICAgICBjaXJjbGUsXG4gICAgICByZ2JhKDYsIDUxLCAxNTgsIDEpIDAlLFxuICAgICAgcmdiYSgwLCAwLCAwLCAxKSAxMDAlXG4gICAgKTtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXG4gICAgICBjaXJjbGUsXG4gICAgICByZ2JhKDYsIDUxLCAxNTgsIDEpIDAlLFxuICAgICAgcmdiYSgwLCAwLCAwLCAxKSAxMDAlXG4gICAgKTtcbiAgICBvcGFjaXR5OiAwLjI7XG4gIH1cblxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLTUlO1xuICAgIGJvdHRvbTogLTE1JTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcblxuICAgIGJhY2tncm91bmQ6IHJnYig4OCwgMjIsIDY3KTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChcbiAgICAgIGNpcmNsZSxcbiAgICAgIHJnYmEoODgsIDIyLCA2NywgMSkgMCUsXG4gICAgICByZ2JhKDAsIDAsIDAsIDEpIDEwMCVcbiAgICApO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KFxuICAgICAgY2lyY2xlLFxuICAgICAgcmdiYSg4OCwgMjIsIDY3LCAxKSAwJSxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMSkgMTAwJVxuICAgICk7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxuICAgICAgY2lyY2xlLFxuICAgICAgcmdiYSg4OCwgMjIsIDY3LCAxKSAwJSxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMSkgMTAwJVxuICAgICk7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG5cbiAgJiAmX19ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICBwYWRkaW5nOiAxMHB4IDgwcHggMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgei1pbmRleDogMjtcbiAgfVxuXG4gICYgJl9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIGNvbG9yOiAjZGZkZmRmO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWF4LXdpZHRoOiA0NTBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgJiArIC5ibG9jay1ncmFkX190ZXh0IHtcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgfVxuICB9XG5cbiAgJiAmX19jb250ZW50IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cblxuICAmICZfX2ltYWdlcyB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogNTAlO1xuXG4gICAgJi1pbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIH1cbiAgfVxufVxuXG4uYmxvY2stcHJlZiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgJiAmX19pdGVtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgcGFkZGluZzogNDBweCAzMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG5cbiAgICAmICsgLmJsb2NrLXByZWZfX2l0ZW0ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgfVxuICB9XG5cbiAgJiAmX19pbWcge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgd2lkdGg6IDI2cHg7XG4gICAgaGVpZ2h0OiAyNnB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxuXG4gICYgJl9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICBiIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE1vYmlsZSBzaXplXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA3NjdweCkge1xuICAuYmxvY2sge1xuICAgICYmLS1jYW1lcmEge1xuICAgICAgLmJsb2NrX190aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmJsb2NrLWdyYWQge1xuICAgIG1hcmdpbjogMjBweCAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG5cbiAgICAmICZfX2JvZHkge1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgfVxuXG4gICAgJiAmX19jb250ZW50IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICYgJl9faW1hZ2VzIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gIH1cblxuICAuYmxvY2stcHJlZiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICYgJl9faXRlbSB7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgcGFkZGluZzogMjBweDtcblxuICAgICAgJiArIC5ibG9jay1wcmVmX19pdGVtIHtcbiAgICAgICAgbWFyZ2luOiAxNXB4IDAgMCAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmJsb2NrLmJsb2NrLS1jYW1lcmEgLmJsb2NrX19ib2R5IHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYmxvY2suYmxvY2stLWNhbWVyYSAuYmxvY2tfX3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDQ0cHg7XG4gIGxpbmUtaGVpZ2h0OiA1NHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsICMzZWMxOTUsICM1OGVhODEpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmJsb2NrLmJsb2NrLS1jYW1lcmEgLmJsb2NrX19kZXNjIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgY29sb3I6ICNhMGEwYTA7XG59XG4uYmxvY2stZ3JhZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNTBweCAwIDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYmxvY2stZ3JhZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC01JTtcbiAgdG9wOiAtMTUlO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMwNjMzOWU7XG4gIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgIzA2MzM5ZSAwJSwgIzAwMDAwMCAxMDAlKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjMDYzMzllIDAlLCAjMDAwMDAwIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjMDYzMzllIDAlLCAjMDAwMDAwIDEwMCUpO1xuICBvcGFjaXR5OiAwLjI7XG59XG4uYmxvY2stZ3JhZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC01JTtcbiAgYm90dG9tOiAtMTUlO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJhY2tncm91bmQ6ICM1ODE2NDM7XG4gIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgIzU4MTY0MyAwJSwgIzAwMDAwMCAxMDAlKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjNTgxNjQzIDAlLCAjMDAwMDAwIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjNTgxNjQzIDAlLCAjMDAwMDAwIDEwMCUpO1xuICBvcGFjaXR5OiAwLjM7XG59XG4uYmxvY2stZ3JhZCAuYmxvY2stZ3JhZF9fYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIHBhZGRpbmc6IDEwcHggODBweCAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgei1pbmRleDogMjtcbn1cbi5ibG9jay1ncmFkIC5ibG9jay1ncmFkX190ZXh0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgY29sb3I6ICNkZmRmZGY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1heC13aWR0aDogNDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uYmxvY2stZ3JhZCAuYmxvY2stZ3JhZF9fdGV4dCArIC5ibG9jay1ncmFkX190ZXh0IHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cbi5ibG9jay1ncmFkIC5ibG9jay1ncmFkX19jb250ZW50IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA1MCU7XG59XG4uYmxvY2stZ3JhZCAuYmxvY2stZ3JhZF9faW1hZ2VzIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA1MCU7XG59XG4uYmxvY2stZ3JhZCAuYmxvY2stZ3JhZF9faW1hZ2VzLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuLmJsb2NrLXByZWYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmJsb2NrLXByZWYgLmJsb2NrLXByZWZfX2l0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBwYWRkaW5nOiA0MHB4IDMwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cbi5ibG9jay1wcmVmIC5ibG9jay1wcmVmX19pdGVtICsgLmJsb2NrLXByZWZfX2l0ZW0ge1xuICBtYXJnaW4tbGVmdDogMjVweDtcbn1cbi5ibG9jay1wcmVmIC5ibG9jay1wcmVmX19pbWcge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5ibG9jay1wcmVmIC5ibG9jay1wcmVmX190ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5ibG9jay1wcmVmIC5ibG9jay1wcmVmX190ZXh0IGIge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNzY3cHgpIHtcbiAgLmJsb2NrLmJsb2NrLS1jYW1lcmEgLmJsb2NrX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICB9XG4gIC5ibG9jay1ncmFkIHtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICB9XG4gIC5ibG9jay1ncmFkIC5ibG9jay1ncmFkX19ib2R5IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICB9XG4gIC5ibG9jay1ncmFkIC5ibG9jay1ncmFkX19jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuYmxvY2stZ3JhZCAuYmxvY2stZ3JhZF9faW1hZ2VzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIC5ibG9jay1wcmVmIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5ibG9jay1wcmVmIC5ibG9jay1wcmVmX19pdGVtIHtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgLmJsb2NrLXByZWYgLmJsb2NrLXByZWZfX2l0ZW0gKyAuYmxvY2stcHJlZl9faXRlbSB7XG4gICAgbWFyZ2luOiAxNXB4IDAgMCAwO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BeautyCameraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-block-beauty-camera',
                templateUrl: './beauty-camera.component.html',
                styleUrls: ['./beauty-camera.component.less'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "ELCM":
/*!***********************************************************!*\
  !*** ./src/app/shared/components/blocks/blocks.module.ts ***!
  \***********************************************************/
/*! exports provided: BlocksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlocksModule", function() { return BlocksModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-wow */ "ME1z");
/* harmony import */ var _buttons_buttons_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buttons/buttons.module */ "EWj2");
/* harmony import */ var _beauty_camera_beauty_camera_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./beauty-camera/beauty-camera.component */ "2f8j");
/* harmony import */ var _camera_camera_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./camera/camera.component */ "nExe");
/* harmony import */ var _face_filter_face_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./face-filter/face-filter.component */ "EXMz");
/* harmony import */ var _fun_masks_fun_masks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fun-masks/fun-masks.component */ "zJ0b");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/main.component */ "shLs");
/* harmony import */ var _models_favorite_app_models_favorite_app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./models-favorite-app/models-favorite-app.component */ "bYeR");











class BlocksModule {
}
BlocksModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BlocksModule });
BlocksModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function BlocksModule_Factory(t) { return new (t || BlocksModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_wow__WEBPACK_IMPORTED_MODULE_2__["NgwWowModule"], _buttons_buttons_module__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BlocksModule, { declarations: [_beauty_camera_beauty_camera_component__WEBPACK_IMPORTED_MODULE_4__["BeautyCameraComponent"],
        _camera_camera_component__WEBPACK_IMPORTED_MODULE_5__["CameraComponent"],
        _face_filter_face_filter_component__WEBPACK_IMPORTED_MODULE_6__["FaceFilterComponent"],
        _fun_masks_fun_masks_component__WEBPACK_IMPORTED_MODULE_7__["FunMasksComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
        _models_favorite_app_models_favorite_app_component__WEBPACK_IMPORTED_MODULE_9__["ModelsFavoriteAppComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_wow__WEBPACK_IMPORTED_MODULE_2__["NgwWowModule"], _buttons_buttons_module__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"]], exports: [_beauty_camera_beauty_camera_component__WEBPACK_IMPORTED_MODULE_4__["BeautyCameraComponent"],
        _camera_camera_component__WEBPACK_IMPORTED_MODULE_5__["CameraComponent"],
        _face_filter_face_filter_component__WEBPACK_IMPORTED_MODULE_6__["FaceFilterComponent"],
        _fun_masks_fun_masks_component__WEBPACK_IMPORTED_MODULE_7__["FunMasksComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
        _models_favorite_app_models_favorite_app_component__WEBPACK_IMPORTED_MODULE_9__["ModelsFavoriteAppComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BlocksModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _beauty_camera_beauty_camera_component__WEBPACK_IMPORTED_MODULE_4__["BeautyCameraComponent"],
                    _camera_camera_component__WEBPACK_IMPORTED_MODULE_5__["CameraComponent"],
                    _face_filter_face_filter_component__WEBPACK_IMPORTED_MODULE_6__["FaceFilterComponent"],
                    _fun_masks_fun_masks_component__WEBPACK_IMPORTED_MODULE_7__["FunMasksComponent"],
                    _main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
                    _models_favorite_app_models_favorite_app_component__WEBPACK_IMPORTED_MODULE_9__["ModelsFavoriteAppComponent"],
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_wow__WEBPACK_IMPORTED_MODULE_2__["NgwWowModule"], _buttons_buttons_module__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"]],
                exports: [
                    _beauty_camera_beauty_camera_component__WEBPACK_IMPORTED_MODULE_4__["BeautyCameraComponent"],
                    _camera_camera_component__WEBPACK_IMPORTED_MODULE_5__["CameraComponent"],
                    _face_filter_face_filter_component__WEBPACK_IMPORTED_MODULE_6__["FaceFilterComponent"],
                    _fun_masks_fun_masks_component__WEBPACK_IMPORTED_MODULE_7__["FunMasksComponent"],
                    _main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
                    _models_favorite_app_models_favorite_app_component__WEBPACK_IMPORTED_MODULE_9__["ModelsFavoriteAppComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "EWj2":
/*!*************************************************************!*\
  !*** ./src/app/shared/components/buttons/buttons.module.ts ***!
  \*************************************************************/
/*! exports provided: ButtonsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsModule", function() { return ButtonsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _button_app_button_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button-app/button-app.component */ "k2Og");




class ButtonsModule {
}
ButtonsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ButtonsModule });
ButtonsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ButtonsModule_Factory(t) { return new (t || ButtonsModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ButtonsModule, { declarations: [_button_app_button_app_component__WEBPACK_IMPORTED_MODULE_2__["ButtonAppComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_button_app_button_app_component__WEBPACK_IMPORTED_MODULE_2__["ButtonAppComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_button_app_button_app_component__WEBPACK_IMPORTED_MODULE_2__["ButtonAppComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [_button_app_button_app_component__WEBPACK_IMPORTED_MODULE_2__["ButtonAppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "EXMz":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/blocks/face-filter/face-filter.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FaceFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaceFilterComponent", function() { return FaceFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-wow */ "ME1z");
/* harmony import */ var _buttons_button_app_button_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../buttons/button-app/button-app.component */ "k2Og");




class FaceFilterComponent {
    constructor(wowService) {
        this.wowService = wowService;
        this.wowService.init();
    }
    ngOnInit() { }
}
FaceFilterComponent.ɵfac = function FaceFilterComponent_Factory(t) { return new (t || FaceFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_wow__WEBPACK_IMPORTED_MODULE_1__["NgwWowService"])); };
FaceFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaceFilterComponent, selectors: [["app-block-face-filter"]], decls: 14, vars: 0, consts: [[1, "block", "block--face-filter"], [1, "block__body"], [1, "block__item"], [1, "block__content"], [1, "block__title", "block__title--700"], [1, "block__desc"], [1, "block__action"], [1, "block__item", "block__item--img", "block__item--img-no-padding"], ["src", "./assets/img/blocks/natural-face-filters.png", "alt", "", 1, "block__img"]], template: function FaceFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Natural Face Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Highlight your natural beauty and hide all blemishes with the help of the unique Persona beauty masks. Unlike other beauty cameras, Persona masks look perfectly real. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-button-app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-button-app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_buttons_button_app_button_app_component__WEBPACK_IMPORTED_MODULE_2__["ButtonAppComponent"]], styles: [".block.block--face-filter[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  bottom: 50%;\n  left: -30%;\n  width: 60vw;\n  height: 60vw;\n  margin-top: -25vw;\n  background: #06339e;\n  background: radial-gradient(circle, #06339e 0%, #000000 60%);\n  opacity: 0.6;\n}\n.block.block--face-filter[_ngcontent-%COMP%]   .block__item[_ngcontent-%COMP%]   .block__action[_ngcontent-%COMP%] {\n  display: block;\n}\n.block.block--face-filter[_ngcontent-%COMP%]   .block__item.block__item--img[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.block.block--face-filter[_ngcontent-%COMP%]   .block__item.block__item--img[_ngcontent-%COMP%]   .block__action[_ngcontent-%COMP%] {\n  display: none;\n}\n.block.block--face-filter[_ngcontent-%COMP%]   .block__body[_ngcontent-%COMP%] {\n  max-width: 1040px;\n}\n.block.block--face-filter[_ngcontent-%COMP%]   .block__img[_ngcontent-%COMP%] {\n  width: 300px;\n}\n@media only screen and (min-device-width: 320px) and (max-device-width: 767px) {\n  .block.block--face-filter[_ngcontent-%COMP%]:after {\n    top: 5%;\n    bottom: auto;\n    margin-top: 0;\n    width: 100vw;\n    height: 100vw;\n    z-index: 0;\n  }\n  .block.block--face-filter[_ngcontent-%COMP%]   .block__item[_ngcontent-%COMP%]   .block__action[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .block.block--face-filter[_ngcontent-%COMP%]   .block__item.block__item--img[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .block.block--face-filter[_ngcontent-%COMP%]   .block__item.block__item--img[_ngcontent-%COMP%]   .block__action[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .block.block--face-filter[_ngcontent-%COMP%]   .block__item.block__item--img[_ngcontent-%COMP%]   .block__img[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n  }\n  .block[_ngcontent-%COMP%]   .block__body[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .block[_ngcontent-%COMP%]   .block__action[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .block[_ngcontent-%COMP%]   .block__img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb21hL2dpdGh1Yi9wZXJzb25hL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmxvY2tzL2ZhY2UtZmlsdGVyL2ZhY2UtZmlsdGVyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9ibG9ja3MvZmFjZS1maWx0ZXIvZmFjZS1maWx0ZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFXQSw0REFBQTtFQUtBLFlBQUE7QUNiTjtBRGJFO0VBK0JNLGNBQUE7QUNmUjtBRGtCTTtFQUNFLHlCQUFBO0FDaEJSO0FEZU07RUFJSSxhQUFBO0FDaEJWO0FEdEJFO0VBNENJLGlCQUFBO0FDbkJOO0FEekJFO0VBZ0RJLFlBQUE7QUNwQk47QUR5QkE7RUFHTTtJQUNFLE9BQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsVUFBQTtFQ3pCTjtFRGtCRTtJQVlNLGFBQUE7RUMzQlI7RUQ4Qk07SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtFQzVCUjtFRHlCTTtJQU1JLGNBQUE7RUM1QlY7RURzQk07SUFVSSxtQkFBQTtFQzdCVjtFRG1DRTtJQUNFLHNCQUFBO0VDakNKO0VEb0NFO0lBQ0Usa0JBQUE7RUNsQ0o7RURxQ0U7SUFDRSxXQUFBO0VDbkNKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9ibG9ja3MvZmFjZS1maWx0ZXIvZmFjZS1maWx0ZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY2sge1xuICAmJi0tZmFjZS1maWx0ZXIge1xuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgYm90dG9tOiA1MCU7XG4gICAgICBsZWZ0OiAtMzAlO1xuICAgICAgd2lkdGg6IDYwdnc7XG4gICAgICBoZWlnaHQ6IDYwdnc7XG4gICAgICBtYXJnaW4tdG9wOiAtMjV2dztcbiAgICAgIGJhY2tncm91bmQ6IHJnYig2LCA1MSwgMTU4KTtcbiAgICAgIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KFxuICAgICAgICBjaXJjbGUsXG4gICAgICAgIHJnYmEoNiwgNTEsIDE1OCwgMSkgMCUsXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMSkgNjAlXG4gICAgICApO1xuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoXG4gICAgICAgIGNpcmNsZSxcbiAgICAgICAgcmdiYSg2LCA1MSwgMTU4LCAxKSAwJSxcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAxKSA2MCVcbiAgICAgICk7XG4gICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXG4gICAgICAgIGNpcmNsZSxcbiAgICAgICAgcmdiYSg2LCA1MSwgMTU4LCAxKSAwJSxcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAxKSA2MCVcbiAgICAgICk7XG4gICAgICBvcGFjaXR5OiAwLjY7XG4gICAgfVxuXG4gICAgLmJsb2NrX19pdGVtIHtcbiAgICAgIC5ibG9ja19fYWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgICYuYmxvY2tfX2l0ZW0tLWltZyB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAgICAgLmJsb2NrX19hY3Rpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYmxvY2tfX2JvZHkge1xuICAgICAgbWF4LXdpZHRoOiAxMDQwcHg7XG4gICAgfVxuXG4gICAgLmJsb2NrX19pbWcge1xuICAgICAgd2lkdGg6IDMwMHB4O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA3NjdweCkge1xuICAuYmxvY2sge1xuICAgICYmLS1mYWNlLWZpbHRlciB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgdG9wOiA1JTtcbiAgICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIGhlaWdodDogMTAwdnc7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICB9XG5cbiAgICAgIC5ibG9ja19faXRlbSB7XG4gICAgICAgIC5ibG9ja19fYWN0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5ibG9ja19faXRlbS0taW1nIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgIC5ibG9ja19fYWN0aW9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ibG9ja19faW1nIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJiAmX19ib2R5IHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgJiAmX19hY3Rpb24ge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgICYgJl9faW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuIiwiLmJsb2NrLmJsb2NrLS1mYWNlLWZpbHRlcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGJvdHRvbTogNTAlO1xuICBsZWZ0OiAtMzAlO1xuICB3aWR0aDogNjB2dztcbiAgaGVpZ2h0OiA2MHZ3O1xuICBtYXJnaW4tdG9wOiAtMjV2dztcbiAgYmFja2dyb3VuZDogIzA2MzM5ZTtcbiAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjMDYzMzllIDAlLCAjMDAwMDAwIDYwJSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgIzA2MzM5ZSAwJSwgIzAwMDAwMCA2MCUpO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjMDYzMzllIDAlLCAjMDAwMDAwIDYwJSk7XG4gIG9wYWNpdHk6IDAuNjtcbn1cbi5ibG9jay5ibG9jay0tZmFjZS1maWx0ZXIgLmJsb2NrX19pdGVtIC5ibG9ja19fYWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYmxvY2suYmxvY2stLWZhY2UtZmlsdGVyIC5ibG9ja19faXRlbS5ibG9ja19faXRlbS0taW1nIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5ibG9jay5ibG9jay0tZmFjZS1maWx0ZXIgLmJsb2NrX19pdGVtLmJsb2NrX19pdGVtLS1pbWcgLmJsb2NrX19hY3Rpb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmJsb2NrLmJsb2NrLS1mYWNlLWZpbHRlciAuYmxvY2tfX2JvZHkge1xuICBtYXgtd2lkdGg6IDEwNDBweDtcbn1cbi5ibG9jay5ibG9jay0tZmFjZS1maWx0ZXIgLmJsb2NrX19pbWcge1xuICB3aWR0aDogMzAwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA3NjdweCkge1xuICAuYmxvY2suYmxvY2stLWZhY2UtZmlsdGVyOmFmdGVyIHtcbiAgICB0b3A6IDUlO1xuICAgIGJvdHRvbTogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZ3O1xuICAgIHotaW5kZXg6IDA7XG4gIH1cbiAgLmJsb2NrLmJsb2NrLS1mYWNlLWZpbHRlciAuYmxvY2tfX2l0ZW0gLmJsb2NrX19hY3Rpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmJsb2NrLmJsb2NrLS1mYWNlLWZpbHRlciAuYmxvY2tfX2l0ZW0uYmxvY2tfX2l0ZW0tLWltZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmJsb2NrLmJsb2NrLS1mYWNlLWZpbHRlciAuYmxvY2tfX2l0ZW0uYmxvY2tfX2l0ZW0tLWltZyAuYmxvY2tfX2FjdGlvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmJsb2NrLmJsb2NrLS1mYWNlLWZpbHRlciAuYmxvY2tfX2l0ZW0uYmxvY2tfX2l0ZW0tLWltZyAuYmxvY2tfX2ltZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgfVxuICAuYmxvY2sgLmJsb2NrX19ib2R5IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5ibG9jayAuYmxvY2tfX2FjdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5ibG9jayAuYmxvY2tfX2ltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaceFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-block-face-filter',
                templateUrl: './face-filter.component.html',
                styleUrls: ['./face-filter.component.less'],
            }]
    }], function () { return [{ type: ngx_wow__WEBPACK_IMPORTED_MODULE_1__["NgwWowService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/footer/footer.component */ "aF9I");




class AppComponent {
    constructor() {
        this.title = 'persona';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], null, null); })();


/***/ }),

/***/ "V/fk":
/*!********************************************************!*\
  !*** ./src/app/shared/components/components.module.ts ***!
  \********************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/blocks.module */ "ELCM");
/* harmony import */ var _buttons_buttons_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons/buttons.module */ "EWj2");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "aF9I");







class ComponentsModule {
}
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_3__["BlocksModule"], _buttons_buttons_module__WEBPACK_IMPORTED_MODULE_4__["ButtonsModule"]], _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_3__["BlocksModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_3__["BlocksModule"], _buttons_buttons_module__WEBPACK_IMPORTED_MODULE_4__["ButtonsModule"]], exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_3__["BlocksModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_3__["BlocksModule"], _buttons_buttons_module__WEBPACK_IMPORTED_MODULE_4__["ButtonsModule"]],
                exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_3__["BlocksModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/components.module */ "V/fk");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "aF9I":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 11, vars: 0, consts: [[1, "footer"], [1, "footer__content"], [1, "footer__logo"], ["src", "./assets/svg/logo-sm.svg", "alt", "", 1, "footer__logo-img"], [1, "footer__logo-text"], [1, "footer__menu"], ["href", "https://persona.camera/privacy_policy_persona.pdf", "target", "_blank", 1, "footer__menu-link"], ["href", "https://persona.camera/terms_of_use_persona.pdf", "target", "_blank", 1, "footer__menu-link"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Persona");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Terms of use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #151515;\n  color: #fff;\n  justify-content: center;\n  height: 64px;\n}\n.footer[_ngcontent-%COMP%]   .footer__content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 1200px;\n}\n.footer[_ngcontent-%COMP%]   .footer__logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n}\n.footer[_ngcontent-%COMP%]   .footer__logo-img[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-right: 15px;\n}\n.footer[_ngcontent-%COMP%]   .footer__logo-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 19px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.footer[_ngcontent-%COMP%]   .footer__menu-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  outline: none;\n  box-shadow: none;\n  color: #fff;\n  line-height: 64px;\n}\n.footer[_ngcontent-%COMP%]   .footer__menu-link[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  outline: none;\n  box-shadow: none;\n}\n.footer[_ngcontent-%COMP%]   .footer__menu-link[_ngcontent-%COMP%]    + .footer__menu-link[_ngcontent-%COMP%] {\n  margin-left: 70px;\n}\n@media only screen and (min-device-width: 320px) and (max-device-width: 767px) {\n  .footer[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 15px 0;\n  }\n  .footer[_ngcontent-%COMP%]   .footer__logo[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .footer[_ngcontent-%COMP%]   .footer__logo-img[_ngcontent-%COMP%] {\n    margin: 0 0 15px 0;\n  }\n  .footer[_ngcontent-%COMP%]   .footer__content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .footer[_ngcontent-%COMP%]   .footer__menu[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    margin-top: 26px;\n  }\n  .footer[_ngcontent-%COMP%]   .footer__menu-link[_ngcontent-%COMP%] {\n    display: inline-flex;\n    line-height: 34px;\n  }\n  .footer[_ngcontent-%COMP%]   .footer__menu-link[_ngcontent-%COMP%]    + .footer__menu-link[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb21hL2dpdGh1Yi9wZXJzb25hL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0NKO0FERUU7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FDQUo7QURFSTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUNBTjtBREdJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0ROO0FETUk7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0pOO0FETU07RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0pSO0FET007RUFDRSxpQkFBQTtBQ0xSO0FEV0E7RUFDRTtJQUNFLFlBQUE7SUFDQSxlQUFBO0VDVEY7RURXRTtJQUNFLHNCQUFBO0VDVEo7RURXSTtJQUNFLGtCQUFBO0VDVE47RURhRTtJQUNFLHNCQUFBO0VDWEo7RURjRTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLGdCQUFBO0VDWko7RURjSTtJQUNFLG9CQUFBO0lBQ0EsaUJBQUE7RUNaTjtFRGNNO0lBQ0UsU0FBQTtFQ1pSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMxNTE1MTU7XG4gIGNvbG9yOiAjZmZmO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiA2NHB4O1xuXG4gICYgJl9fY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgfVxuXG4gICYgJl9fbG9nbyB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICYtaW1nIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIH1cblxuICAgICYtdGV4dCB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbiAgfVxuXG4gICYgJl9fbWVudSB7XG4gICAgJi1saW5rIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBsaW5lLWhlaWdodDogNjRweDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJiArIC5mb290ZXJfX21lbnUtbGluayB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA3NjdweCkge1xuICAuZm9vdGVyIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTVweCAwO1xuXG4gICAgJiAmX19sb2dvIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICYtaW1nIHtcbiAgICAgICAgbWFyZ2luOiAwIDAgMTVweCAwO1xuICAgICAgfVxuICAgIH1cblxuICAgICYgJl9fY29udGVudCB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgICYgJl9fbWVudSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1hcmdpbi10b3A6IDI2cHg7XG5cbiAgICAgICYtbGluayB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzRweDtcblxuICAgICAgICAmICsgLmZvb3Rlcl9fbWVudS1saW5rIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMTUxNTE1O1xuICBjb2xvcjogI2ZmZjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogNjRweDtcbn1cbi5mb290ZXIgLmZvb3Rlcl9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xufVxuLmZvb3RlciAuZm9vdGVyX19sb2dvIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZm9vdGVyIC5mb290ZXJfX2xvZ28taW1nIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5mb290ZXIgLmZvb3Rlcl9fbG9nby10ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5mb290ZXIgLmZvb3Rlcl9fbWVudS1saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XG59XG4uZm9vdGVyIC5mb290ZXJfX21lbnUtbGluazpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5mb290ZXIgLmZvb3Rlcl9fbWVudS1saW5rICsgLmZvb3Rlcl9fbWVudS1saW5rIHtcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA3NjdweCkge1xuICAuZm9vdGVyIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTVweCAwO1xuICB9XG4gIC5mb290ZXIgLmZvb3Rlcl9fbG9nbyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuZm9vdGVyIC5mb290ZXJfX2xvZ28taW1nIHtcbiAgICBtYXJnaW46IDAgMCAxNXB4IDA7XG4gIH1cbiAgLmZvb3RlciAuZm9vdGVyX19jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5mb290ZXIgLmZvb3Rlcl9fbWVudSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi10b3A6IDI2cHg7XG4gIH1cbiAgLmZvb3RlciAuZm9vdGVyX19tZW51LWxpbmsge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICB9XG4gIC5mb290ZXIgLmZvb3Rlcl9fbWVudS1saW5rICsgLmZvb3Rlcl9fbWVudS1saW5rIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.less'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "bYeR":
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/components/blocks/models-favorite-app/models-favorite-app.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ModelsFavoriteAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelsFavoriteAppComponent", function() { return ModelsFavoriteAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ModelsFavoriteAppComponent {
    constructor() { }
    ngOnInit() { }
}
ModelsFavoriteAppComponent.ɵfac = function ModelsFavoriteAppComponent_Factory(t) { return new (t || ModelsFavoriteAppComponent)(); };
ModelsFavoriteAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModelsFavoriteAppComponent, selectors: [["app-block-models-favorite-app"]], decls: 11, vars: 0, consts: [[1, "block", "block--center", "block--models"], [1, "block__body"], [1, "block__content"], [1, "block__title", "block__title--700"], [1, "block__desc"], [1, "block__gallery"], ["src", "./assets/img/blocks/models-gallery.png", "alt", "", 1, "block__img"]], template: function ModelsFavoriteAppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " MODELS'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " FAVOURITE APP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Our app is used by fashion models and content creators all over the world. Persona masks help them highlight their beauty without changing their facial features. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".block.block--models[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 50vw;\n  left: 50vw;\n  width: 50vw;\n  height: 50vw;\n  margin-left: -25vw;\n  background: #3ec195;\n  background: radial-gradient(circle, #3ec195 0%, #000000 60%);\n  opacity: 0.5;\n}\n.block.block--models[_ngcontent-%COMP%]   .block__img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n}\n@media only screen and (min-device-width: 320px) and (max-device-width: 767px) {\n  .block.block--models[_ngcontent-%COMP%]:after {\n    width: 130vw;\n    height: 130vw;\n    margin-left: -65%;\n    opacity: 0.3;\n    z-index: 0;\n  }\n  .block.block--models[_ngcontent-%COMP%]   .block__img[_ngcontent-%COMP%] {\n    max-width: none;\n    width: 200%;\n    display: block;\n    margin: 0 auto;\n    margin-left: -50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb21hL2dpdGh1Yi9wZXJzb25hL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmxvY2tzL21vZGVscy1mYXZvcml0ZS1hcHAvbW9kZWxzLWZhdm9yaXRlLWFwcC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmxvY2tzL21vZGVscy1mYXZvcml0ZS1hcHAvbW9kZWxzLWZhdm9yaXRlLWFwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSxtQkFBQTtFQVdBLDREQUFBO0VBS0EsWUFBQTtBQ2ROO0FEYkU7RUErQkksV0FBQTtFQUNBLGVBQUE7QUNmTjtBRG9CQTtFQUdNO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0VDcEJOO0VEY0U7SUFVSSxlQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7RUNyQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Jsb2Nrcy9tb2RlbHMtZmF2b3JpdGUtYXBwL21vZGVscy1mYXZvcml0ZS1hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY2sge1xuICAmJi0tbW9kZWxzIHtcbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogNTB2dztcbiAgICAgIGxlZnQ6IDUwdnc7XG4gICAgICB3aWR0aDogNTB2dztcbiAgICAgIGhlaWdodDogNTB2dztcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMjV2dztcblxuICAgICAgYmFja2dyb3VuZDogcmdiKDYyLCAxOTMsIDE0OSk7XG4gICAgICBiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChcbiAgICAgICAgY2lyY2xlLFxuICAgICAgICByZ2JhKDYyLCAxOTMsIDE0OSwgMSkgMCUsXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMSkgNjAlXG4gICAgICApO1xuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoXG4gICAgICAgIGNpcmNsZSxcbiAgICAgICAgcmdiYSg2MiwgMTkzLCAxNDksIDEpIDAlLFxuICAgICAgICByZ2JhKDAsIDAsIDAsIDEpIDYwJVxuICAgICAgKTtcbiAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcbiAgICAgICAgY2lyY2xlLFxuICAgICAgICByZ2JhKDYyLCAxOTMsIDE0OSwgMSkgMCUsXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMSkgNjAlXG4gICAgICApO1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cblxuICAgIC5ibG9ja19faW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA3NjdweCkge1xuICAuYmxvY2sge1xuICAgICYmLS1tb2RlbHMge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIHdpZHRoOiAxMzB2dztcbiAgICAgICAgaGVpZ2h0OiAxMzB2dztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC02NSU7XG4gICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgIH1cblxuICAgICAgLmJsb2NrX19pbWcge1xuICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAyMDAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNTAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmJsb2NrLmJsb2NrLS1tb2RlbHM6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDUwdnc7XG4gIGxlZnQ6IDUwdnc7XG4gIHdpZHRoOiA1MHZ3O1xuICBoZWlnaHQ6IDUwdnc7XG4gIG1hcmdpbi1sZWZ0OiAtMjV2dztcbiAgYmFja2dyb3VuZDogIzNlYzE5NTtcbiAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjM2VjMTk1IDAlLCAjMDAwMDAwIDYwJSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgIzNlYzE5NSAwJSwgIzAwMDAwMCA2MCUpO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjM2VjMTk1IDAlLCAjMDAwMDAwIDYwJSk7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5ibG9jay5ibG9jay0tbW9kZWxzIC5ibG9ja19faW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDc2N3B4KSB7XG4gIC5ibG9jay5ibG9jay0tbW9kZWxzOmFmdGVyIHtcbiAgICB3aWR0aDogMTMwdnc7XG4gICAgaGVpZ2h0OiAxMzB2dztcbiAgICBtYXJnaW4tbGVmdDogLTY1JTtcbiAgICBvcGFjaXR5OiAwLjM7XG4gICAgei1pbmRleDogMDtcbiAgfVxuICAuYmxvY2suYmxvY2stLW1vZGVscyAuYmxvY2tfX2ltZyB7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICAgIHdpZHRoOiAyMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiAtNTAlO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModelsFavoriteAppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-block-models-favorite-app',
                templateUrl: './models-favorite-app.component.html',
                styleUrls: ['./models-favorite-app.component.less'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "k2Og":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/buttons/button-app/button-app.component.ts ***!
  \******************************************************************************/
/*! exports provided: ButtonAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonAppComponent", function() { return ButtonAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ButtonAppComponent {
    constructor() { }
    ngOnInit() {
    }
}
ButtonAppComponent.ɵfac = function ButtonAppComponent_Factory(t) { return new (t || ButtonAppComponent)(); };
ButtonAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonAppComponent, selectors: [["app-button-app"]], decls: 5, vars: 0, consts: [[1, "wrap-buttons"], ["href", "https://apps.apple.com/by/app/persona-beauty-camera/id1561622206", "target", "_blank", 1, "btn", "btn--store"], ["src", "./assets/svg/apple-store.svg", "alt", "", 1, "btn__img"], ["href", "https://play.google.com/store/apps/details?id=com.tickettothemoon.persona&hl=en&gl=US", "target", "_blank", 1, "btn", "btn--store"], ["src", "./assets/svg/google-play.svg", "alt", "", 1, "btn__img"]], template: function ButtonAppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media only screen and (min-device-width: 320px) and (max-device-width: 767px) {\n  .wrap-buttons[_ngcontent-%COMP%] {\n    display: inline-flex;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb21hL2dpdGh1Yi9wZXJzb25hL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9ucy9idXR0b24tYXBwL2J1dHRvbi1hcHAuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2J1dHRvbnMvYnV0dG9uLWFwcC9idXR0b24tYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0U7SUFDRSxvQkFBQTtJQUNBLHNCQUFBO0VDRkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2J1dHRvbnMvYnV0dG9uLWFwcC9idXR0b24tYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTW9iaWxlIHNpemVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDc2N3B4KSB7XG4gIC53cmFwLWJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbiIsIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDc2N3B4KSB7XG4gIC53cmFwLWJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonAppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-button-app',
                templateUrl: './button-app.component.html',
                styleUrls: ['./button-app.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nExe":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/blocks/camera/camera.component.ts ***!
  \*********************************************************************/
/*! exports provided: CameraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraComponent", function() { return CameraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CameraComponent {
    constructor() { }
    ngOnInit() { }
}
CameraComponent.ɵfac = function CameraComponent_Factory(t) { return new (t || CameraComponent)(); };
CameraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CameraComponent, selectors: [["app-block-camera"]], decls: 38, vars: 0, consts: [[1, "block", "block--center"], [1, "block__body"], [1, "block__item"], [1, "block__content"], [1, "block__title"], [1, "block__desc"], [1, "block__possibilities"], [1, "block__possibilities-item"], [1, "block__possibilities-body"], ["src", "./assets/svg/possibilities/possibilities-1.svg", "alt", "", 1, "block__possibilities-img"], [1, "block__possibilities-title"], [1, "block__possibilities-text"], ["src", "./assets/svg/possibilities/possibilities-2.svg", "alt", "", 1, "block__possibilities-img"], ["src", "./assets/svg/possibilities/possibilities-3.svg", "alt", "", 1, "block__possibilities-img"]], template: function CameraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Persona");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Beauty camera ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Persona makes every video look great!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Amazing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " beauty camera ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Finally, beauty filters that look real. Try them now and see for yourself ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " PRO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " REtouching ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Persona automatically applies best retouching techniques! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " perfect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " videos everyday ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Wrong angle or poor lighting won\u2019t ruin your video ever again ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".block[_ngcontent-%COMP%]   .block__possibilities[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  justify-content: space-between;\n  margin-top: 90px;\n}\n.block[_ngcontent-%COMP%]   .block__possibilities-item[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.block[_ngcontent-%COMP%]   .block__possibilities-item[_ngcontent-%COMP%]    + .block__possibilities-item[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n.block[_ngcontent-%COMP%]   .block__possibilities-body[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n  background: rgba(255, 255, 255, 0.1);\n  max-width: 320px;\n  height: 100%;\n  padding: 0 40px 40px 40px;\n  text-align: center;\n  z-index: 2;\n}\n.block[_ngcontent-%COMP%]   .block__possibilities-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 34px;\n  font-weight: 600;\n  text-transform: uppercase;\n  margin-bottom: 24px;\n}\n.block[_ngcontent-%COMP%]   .block__possibilities-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 28px;\n  font-weight: 400;\n}\n.block[_ngcontent-%COMP%]   .block__possibilities-img[_ngcontent-%COMP%] {\n  height: 200px;\n}\n@media only screen and (min-device-width: 320px) and (max-device-width: 767px) {\n  .block[_ngcontent-%COMP%]   .block__possibilities[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-top: 30px;\n  }\n  .block[_ngcontent-%COMP%]   .block__possibilities-item[_ngcontent-%COMP%]    + .block__possibilities-item[_ngcontent-%COMP%] {\n    margin: 32px 0 0 0;\n  }\n  .block[_ngcontent-%COMP%]   .block__possibilities-title[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .block[_ngcontent-%COMP%]   .block__possibilities-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .block[_ngcontent-%COMP%]   .block__possibilities-body[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb21hL2dpdGh1Yi9wZXJzb25hL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmxvY2tzL2NhbWVyYS9jYW1lcmEuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Jsb2Nrcy9jYW1lcmEvY2FtZXJhLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDQUo7QURFSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0FOO0FERU07RUFDRSxpQkFBQTtBQ0FSO0FESUk7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDRk47QURLSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0hOO0FETUk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0pOO0FET0k7RUFDRSxhQUFBO0FDTE47QURVQTtFQUVJO0lBQ0Usc0JBQUE7SUFDQSxnQkFBQTtFQ1RKO0VEWU07SUFDRSxrQkFBQTtFQ1ZSO0VEY0k7SUFDRSxTQUFBO0VDWk47RURlSTtJQUNFLGFBQUE7RUNiTjtFRGdCSTtJQUNFLFdBQUE7RUNkTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmxvY2tzL2NhbWVyYS9jYW1lcmEuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY2sge1xuICAmICZfX3Bvc3NpYmlsaXRpZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLXRvcDogOTBweDtcblxuICAgICYtaXRlbSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAmICsgLmJsb2NrX19wb3NzaWJpbGl0aWVzLWl0ZW0ge1xuICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLWJvZHkge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgbWF4LXdpZHRoOiAzMjBweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDAgNDBweCA0MHB4IDQwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB6LWluZGV4OiAyO1xuICAgIH1cblxuICAgICYtdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuXG4gICAgJi10ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG5cbiAgICAmLWltZyB7XG4gICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA3NjdweCkge1xuICAuYmxvY2sge1xuICAgICYgJl9fcG9zc2liaWxpdGllcyB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWFyZ2luLXRvcDogMzBweDtcblxuICAgICAgJi1pdGVtIHtcbiAgICAgICAgJiArIC5ibG9ja19fcG9zc2liaWxpdGllcy1pdGVtIHtcbiAgICAgICAgICBtYXJnaW46IDMycHggMCAwIDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi10aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgJi10ZXh0IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJi1ib2R5IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIuYmxvY2sgLmJsb2NrX19wb3NzaWJpbGl0aWVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDogOTBweDtcbn1cbi5ibG9jayAuYmxvY2tfX3Bvc3NpYmlsaXRpZXMtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmJsb2NrIC5ibG9ja19fcG9zc2liaWxpdGllcy1pdGVtICsgLmJsb2NrX19wb3NzaWJpbGl0aWVzLWl0ZW0ge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cbi5ibG9jayAuYmxvY2tfX3Bvc3NpYmlsaXRpZXMtYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIG1heC13aWR0aDogMzIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMCA0MHB4IDQwcHggNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiAyO1xufVxuLmJsb2NrIC5ibG9ja19fcG9zc2liaWxpdGllcy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4uYmxvY2sgLmJsb2NrX19wb3NzaWJpbGl0aWVzLXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmJsb2NrIC5ibG9ja19fcG9zc2liaWxpdGllcy1pbWcge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNzY3cHgpIHtcbiAgLmJsb2NrIC5ibG9ja19fcG9zc2liaWxpdGllcyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gIC5ibG9jayAuYmxvY2tfX3Bvc3NpYmlsaXRpZXMtaXRlbSArIC5ibG9ja19fcG9zc2liaWxpdGllcy1pdGVtIHtcbiAgICBtYXJnaW46IDMycHggMCAwIDA7XG4gIH1cbiAgLmJsb2NrIC5ibG9ja19fcG9zc2liaWxpdGllcy10aXRsZSB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5ibG9jayAuYmxvY2tfX3Bvc3NpYmlsaXRpZXMtdGV4dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuYmxvY2sgLmJsb2NrX19wb3NzaWJpbGl0aWVzLWJvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CameraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-block-camera',
                templateUrl: './camera.component.html',
                styleUrls: ['./camera.component.less'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "shLs":
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/blocks/main/main.component.ts ***!
  \*****************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _buttons_button_app_button_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../buttons/button-app/button-app.component */ "k2Og");



class MainComponent {
    constructor() {
        this.parallaxConfig = {
            parallaxSpeed: 1,
            parallaxSmoothness: 1,
            parallaxDirection: 'reverse',
            parallaxTimingFunction: 'ease-in',
            parallaxThrottleTime: 80,
        };
    }
    ngOnInit() { }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-block-main"]], decls: 15, vars: 0, consts: [[1, "block", "block--green", "block--main"], [1, "block__body"], [1, "block__item"], [1, "block__content"], ["src", "./assets/img/logo.png", "alt", "", 1, "block__logo"], [1, "block__title"], [1, "block__desc"], [1, "block__action"], [1, "block__item", "block__item--img"], ["src", "./assets/img/blocks/main.png", "alt", "parallax-img", 1, "block__img"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "PERSONA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Finally, beauty filters that look real. Try them now and see for yourself! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-button-app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-button-app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_buttons_button_app_button_app_component__WEBPACK_IMPORTED_MODULE_1__["ButtonAppComponent"]], styles: [".block[_ngcontent-%COMP%]   .block__item[_ngcontent-%COMP%]   .block__action[_ngcontent-%COMP%] {\n  display: block;\n}\n.block[_ngcontent-%COMP%]   .block__item.block__item--img[_ngcontent-%COMP%]   .block__action[_ngcontent-%COMP%] {\n  display: none;\n}\n.block.block--main[_ngcontent-%COMP%] {\n  min-height: auto;\n}\n.block.block--main[_ngcontent-%COMP%]   .block__body[_ngcontent-%COMP%] {\n  padding: 60px 0;\n  max-width: 1040px;\n}\n.block.block--main[_ngcontent-%COMP%]   .block__title[_ngcontent-%COMP%] {\n  letter-spacing: 3px;\n}\n.block.block--main[_ngcontent-%COMP%]   .block__item.block__item--img[_ngcontent-%COMP%]   .block__img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 600px;\n}\n@media only screen and (min-device-width: 320px) and (max-device-width: 767px) {\n  .block.block--green[_ngcontent-%COMP%]   .block__body[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .block.block--green[_ngcontent-%COMP%]   .block__item[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .block.block--green[_ngcontent-%COMP%]   .block__item[_ngcontent-%COMP%]    + .block__item[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n  .block.block--main[_ngcontent-%COMP%]:after {\n    width: 100vw;\n    height: 100vw;\n    margin-left: -50%;\n    margin-top: -45%;\n  }\n  .block.block--main[_ngcontent-%COMP%]   .block__item[_ngcontent-%COMP%]   .block__action[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .block.block--main[_ngcontent-%COMP%]   .block__item.block__item--img[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .block.block--main[_ngcontent-%COMP%]   .block__item.block__item--img[_ngcontent-%COMP%]   .block__action[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .block.block--main[_ngcontent-%COMP%]   .block__item.block__item--img[_ngcontent-%COMP%]   .block__img[_ngcontent-%COMP%] {\n    margin-left: -30px;\n  }\n  .block.block--main[_ngcontent-%COMP%]   .block__logo[_ngcontent-%COMP%] {\n    width: 140px;\n    height: 140px;\n    margin-bottom: 40px;\n  }\n  .block.block--main[_ngcontent-%COMP%]   .block__desc[_ngcontent-%COMP%] {\n    width: 70%;\n    margin: 0 auto 52px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb21hL2dpdGh1Yi9wZXJzb25hL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmxvY2tzL21haW4vbWFpbi5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmxvY2tzL21haW4vbWFpbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUVJLGNBQUE7QUNETjtBRElJO0VBRUksYUFBQTtBQ0hSO0FEUUU7RUFDRSxnQkFBQTtBQ05KO0FES0U7RUFJSSxlQUFBO0VBQ0EsaUJBQUE7QUNOTjtBRENFO0VBU0ksbUJBQUE7QUNQTjtBREZFO0VBYUksV0FBQTtFQUNBLGdCQUFBO0FDUk47QURnQkE7RUFFSTtJQUVJLHNCQUFBO0VDaEJOO0VEY0U7SUFNSSxrQkFBQTtFQ2pCTjtFRG1CTTtJQUNFLGFBQUE7RUNqQlI7RUR1Qkk7SUFDRSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUNyQk47RUR3Qkk7SUFFSSxhQUFBO0VDdkJSO0VEMEJNO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0VDeEJSO0VEc0JNO0lBS0ksY0FBQTtFQ3hCVjtFRG1CTTtJQVNJLGtCQUFBO0VDekJWO0VER0U7SUE0QkksWUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtFQzVCTjtFREZFO0lBa0NJLFVBQUE7SUFDQSxtQkFBQTtFQzdCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmxvY2tzL21haW4vbWFpbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9jayB7XG4gICYgJl9faXRlbSB7XG4gICAgLmJsb2NrX19hY3Rpb24ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgJi5ibG9ja19faXRlbS0taW1nIHtcbiAgICAgIC5ibG9ja19fYWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmJi0tbWFpbiB7XG4gICAgbWluLWhlaWdodDogYXV0bztcblxuICAgIC5ibG9ja19fYm9keSB7XG4gICAgICBwYWRkaW5nOiA2MHB4IDA7XG4gICAgICBtYXgtd2lkdGg6IDEwNDBweDtcbiAgICB9XG5cbiAgICAuYmxvY2tfX3RpdGxlIHtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgfVxuXG4gICAgLmJsb2NrX19pdGVtLmJsb2NrX19pdGVtLS1pbWcgLmJsb2NrX19pbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIH1cbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBNb2JpbGUgc2l6ZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNzY3cHgpIHtcbiAgLmJsb2NrIHtcbiAgICAmJi0tZ3JlZW4ge1xuICAgICAgLmJsb2NrX19ib2R5IHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIH1cblxuICAgICAgLmJsb2NrX19pdGVtIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICYgKyAuYmxvY2tfX2l0ZW0ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmJi0tbWFpbiB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBoZWlnaHQ6IDEwMHZ3O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTUwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogLTQ1JTtcbiAgICAgIH1cblxuICAgICAgJiAuYmxvY2tfX2l0ZW0ge1xuICAgICAgICAuYmxvY2tfX2FjdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYmxvY2tfX2l0ZW0tLWltZyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgLmJsb2NrX19hY3Rpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJsb2NrX19pbWcge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYmxvY2tfX2xvZ28ge1xuICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICB9XG5cbiAgICAgIC5ibG9ja19fZGVzYyB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDUycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIuYmxvY2sgLmJsb2NrX19pdGVtIC5ibG9ja19fYWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYmxvY2sgLmJsb2NrX19pdGVtLmJsb2NrX19pdGVtLS1pbWcgLmJsb2NrX19hY3Rpb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmJsb2NrLmJsb2NrLS1tYWluIHtcbiAgbWluLWhlaWdodDogYXV0bztcbn1cbi5ibG9jay5ibG9jay0tbWFpbiAuYmxvY2tfX2JvZHkge1xuICBwYWRkaW5nOiA2MHB4IDA7XG4gIG1heC13aWR0aDogMTA0MHB4O1xufVxuLmJsb2NrLmJsb2NrLS1tYWluIC5ibG9ja19fdGl0bGUge1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xufVxuLmJsb2NrLmJsb2NrLS1tYWluIC5ibG9ja19faXRlbS5ibG9ja19faXRlbS0taW1nIC5ibG9ja19faW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA3NjdweCkge1xuICAuYmxvY2suYmxvY2stLWdyZWVuIC5ibG9ja19fYm9keSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuYmxvY2suYmxvY2stLWdyZWVuIC5ibG9ja19faXRlbSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5ibG9jay5ibG9jay0tZ3JlZW4gLmJsb2NrX19pdGVtICsgLmJsb2NrX19pdGVtIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG4gIC5ibG9jay5ibG9jay0tbWFpbjphZnRlciB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdnc7XG4gICAgbWFyZ2luLWxlZnQ6IC01MCU7XG4gICAgbWFyZ2luLXRvcDogLTQ1JTtcbiAgfVxuICAuYmxvY2suYmxvY2stLW1haW4gLmJsb2NrX19pdGVtIC5ibG9ja19fYWN0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5ibG9jay5ibG9jay0tbWFpbiAuYmxvY2tfX2l0ZW0uYmxvY2tfX2l0ZW0tLWltZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5ibG9jay5ibG9jay0tbWFpbiAuYmxvY2tfX2l0ZW0uYmxvY2tfX2l0ZW0tLWltZyAuYmxvY2tfX2FjdGlvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmJsb2NrLmJsb2NrLS1tYWluIC5ibG9ja19faXRlbS5ibG9ja19faXRlbS0taW1nIC5ibG9ja19faW1nIHtcbiAgICBtYXJnaW4tbGVmdDogLTMwcHg7XG4gIH1cbiAgLmJsb2NrLmJsb2NrLS1tYWluIC5ibG9ja19fbG9nbyB7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGhlaWdodDogMTQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgfVxuICAuYmxvY2suYmxvY2stLW1haW4gLmJsb2NrX19kZXNjIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbjogMCBhdXRvIDUycHg7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-block-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.less'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");





const routes = [
    {
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zJ0b":
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/blocks/fun-masks/fun-masks.component.ts ***!
  \***************************************************************************/
/*! exports provided: FunMasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunMasksComponent", function() { return FunMasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _buttons_button_app_button_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../buttons/button-app/button-app.component */ "k2Og");



class FunMasksComponent {
    constructor() { }
    ngOnInit() { }
}
FunMasksComponent.ɵfac = function FunMasksComponent_Factory(t) { return new (t || FunMasksComponent)(); };
FunMasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FunMasksComponent, selectors: [["app-block-fun-masks"]], decls: 14, vars: 0, consts: [[1, "block", "block--right", "block--fun-mask"], [1, "block__body"], [1, "block__item"], [1, "block__content"], [1, "block__title", "block__title--700"], [1, "block__desc"], [1, "block__action"], [1, "block__item", "block__item--img", "block__item--img-no-padding"], ["src", "./assets/img/blocks/exclusive-fun-masks.png", "alt", "", 1, "block__img"]], template: function FunMasksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "EXCLUSIVE FUN MASKS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " We created many high quality face masks. You have never seen anything like this! Become a cartoon character or a demon, oldify yourself or turn into a baby. All this and so much more in one app! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-button-app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-button-app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_buttons_button_app_button_app_component__WEBPACK_IMPORTED_MODULE_1__["ButtonAppComponent"]], styles: [".block.block--fun-mask[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: -30vw;\n  width: 60vw;\n  height: 60vw;\n  margin-top: -15%;\n  background: #06339e;\n  background: radial-gradient(circle, #06339e 0%, #000000 60%);\n  opacity: 0.6;\n}\n.block.block--fun-mask[_ngcontent-%COMP%]   .block__item[_ngcontent-%COMP%]   .block__action[_ngcontent-%COMP%] {\n  display: block;\n}\n.block.block--fun-mask[_ngcontent-%COMP%]   .block__item.block__item--img[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.block.block--fun-mask[_ngcontent-%COMP%]   .block__item.block__item--img[_ngcontent-%COMP%]   .block__action[_ngcontent-%COMP%] {\n  display: none;\n}\n.block.block--fun-mask[_ngcontent-%COMP%]   .block__body[_ngcontent-%COMP%] {\n  max-width: 1040px;\n}\n.block.block--fun-mask[_ngcontent-%COMP%]   .block__img[_ngcontent-%COMP%] {\n  width: 300px;\n}\n@media only screen and (min-device-width: 320px) and (max-device-width: 767px) {\n  .block.block--fun-mask[_ngcontent-%COMP%]:after {\n    top: 0;\n    width: 100vw;\n    height: 100vw;\n    z-index: 0;\n  }\n  .block.block--fun-mask[_ngcontent-%COMP%]   .block__item[_ngcontent-%COMP%]   .block__action[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .block.block--fun-mask[_ngcontent-%COMP%]   .block__item.block__item--img[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .block.block--fun-mask[_ngcontent-%COMP%]   .block__item.block__item--img[_ngcontent-%COMP%]   .block__action[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .block.block--fun-mask[_ngcontent-%COMP%]   .block__item.block__item--img[_ngcontent-%COMP%]   .block__img[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n  }\n  .block[_ngcontent-%COMP%]   .block__body[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .block[_ngcontent-%COMP%]   .block__action[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .block[_ngcontent-%COMP%]   .block__img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .block[_ngcontent-%COMP%]   .block__item[_ngcontent-%COMP%]    + .block__item[_ngcontent-%COMP%] {\n    margin-top: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb21hL2dpdGh1Yi9wZXJzb25hL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmxvY2tzL2Z1bi1tYXNrcy9mdW4tbWFza3MuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Jsb2Nrcy9mdW4tbWFza3MvZnVuLW1hc2tzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBV0EsNERBQUE7RUFLQSxZQUFBO0FDYk47QURiRTtFQStCTSxjQUFBO0FDZlI7QURrQk07RUFDRSwyQkFBQTtBQ2hCUjtBRGVNO0VBSUksYUFBQTtBQ2hCVjtBRHRCRTtFQTRDSSxpQkFBQTtBQ25CTjtBRHpCRTtFQWdESSxZQUFBO0FDcEJOO0FEeUJBO0VBR007SUFDRSxNQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0VDekJOO0VEb0JFO0lBVU0sYUFBQTtFQzNCUjtFRDhCTTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0VDNUJSO0VEeUJNO0lBTUksY0FBQTtFQzVCVjtFRHNCTTtJQVVJLG1CQUFBO0VDN0JWO0VEbUNFO0lBQ0Usc0JBQUE7RUNqQ0o7RURvQ0U7SUFDRSxrQkFBQTtFQ2xDSjtFRHFDRTtJQUNFLFdBQUE7RUNuQ0o7RUR1Q0k7SUFDRSxnQkFBQTtFQ3JDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmxvY2tzL2Z1bi1tYXNrcy9mdW4tbWFza3MuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY2sge1xuICAmJi0tZnVuLW1hc2sge1xuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHJpZ2h0OiAtMzB2dztcbiAgICAgIHdpZHRoOiA2MHZ3O1xuICAgICAgaGVpZ2h0OiA2MHZ3O1xuICAgICAgbWFyZ2luLXRvcDogLTE1JTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYig2LCA1MSwgMTU4KTtcbiAgICAgIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KFxuICAgICAgICBjaXJjbGUsXG4gICAgICAgIHJnYmEoNiwgNTEsIDE1OCwgMSkgMCUsXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMSkgNjAlXG4gICAgICApO1xuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoXG4gICAgICAgIGNpcmNsZSxcbiAgICAgICAgcmdiYSg2LCA1MSwgMTU4LCAxKSAwJSxcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAxKSA2MCVcbiAgICAgICk7XG4gICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXG4gICAgICAgIGNpcmNsZSxcbiAgICAgICAgcmdiYSg2LCA1MSwgMTU4LCAxKSAwJSxcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAxKSA2MCVcbiAgICAgICk7XG4gICAgICBvcGFjaXR5OiAwLjY7XG4gICAgfVxuXG4gICAgLmJsb2NrX19pdGVtIHtcbiAgICAgIC5ibG9ja19fYWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgICYuYmxvY2tfX2l0ZW0tLWltZyB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICAgICAgICAuYmxvY2tfX2FjdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5ibG9ja19fYm9keSB7XG4gICAgICBtYXgtd2lkdGg6IDEwNDBweDtcbiAgICB9XG5cbiAgICAuYmxvY2tfX2ltZyB7XG4gICAgICB3aWR0aDogMzAwcHg7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDc2N3B4KSB7XG4gIC5ibG9jayB7XG4gICAgJiYtLWZ1bi1tYXNrIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgaGVpZ2h0OiAxMDB2dztcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgIH1cblxuICAgICAgLmJsb2NrX19pdGVtIHtcbiAgICAgICAgLmJsb2NrX19hY3Rpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAmLmJsb2NrX19pdGVtLS1pbWcge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgLmJsb2NrX19hY3Rpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJsb2NrX19pbWcge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmICZfX2JvZHkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAmICZfX2FjdGlvbiB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJiAmX19pbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgJiAmX19pdGVtIHtcbiAgICAgICYgKyAuYmxvY2tfX2l0ZW0ge1xuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmJsb2NrLmJsb2NrLS1mdW4tbWFzazphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAtMzB2dztcbiAgd2lkdGg6IDYwdnc7XG4gIGhlaWdodDogNjB2dztcbiAgbWFyZ2luLXRvcDogLTE1JTtcbiAgYmFja2dyb3VuZDogIzA2MzM5ZTtcbiAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjMDYzMzllIDAlLCAjMDAwMDAwIDYwJSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgIzA2MzM5ZSAwJSwgIzAwMDAwMCA2MCUpO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjMDYzMzllIDAlLCAjMDAwMDAwIDYwJSk7XG4gIG9wYWNpdHk6IDAuNjtcbn1cbi5ibG9jay5ibG9jay0tZnVuLW1hc2sgLmJsb2NrX19pdGVtIC5ibG9ja19fYWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYmxvY2suYmxvY2stLWZ1bi1tYXNrIC5ibG9ja19faXRlbS5ibG9ja19faXRlbS0taW1nIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLmJsb2NrLmJsb2NrLS1mdW4tbWFzayAuYmxvY2tfX2l0ZW0uYmxvY2tfX2l0ZW0tLWltZyAuYmxvY2tfX2FjdGlvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYmxvY2suYmxvY2stLWZ1bi1tYXNrIC5ibG9ja19fYm9keSB7XG4gIG1heC13aWR0aDogMTA0MHB4O1xufVxuLmJsb2NrLmJsb2NrLS1mdW4tbWFzayAuYmxvY2tfX2ltZyB7XG4gIHdpZHRoOiAzMDBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDc2N3B4KSB7XG4gIC5ibG9jay5ibG9jay0tZnVuLW1hc2s6YWZ0ZXIge1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2dztcbiAgICB6LWluZGV4OiAwO1xuICB9XG4gIC5ibG9jay5ibG9jay0tZnVuLW1hc2sgLmJsb2NrX19pdGVtIC5ibG9ja19fYWN0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5ibG9jay5ibG9jay0tZnVuLW1hc2sgLmJsb2NrX19pdGVtLmJsb2NrX19pdGVtLS1pbWcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5ibG9jay5ibG9jay0tZnVuLW1hc2sgLmJsb2NrX19pdGVtLmJsb2NrX19pdGVtLS1pbWcgLmJsb2NrX19hY3Rpb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5ibG9jay5ibG9jay0tZnVuLW1hc2sgLmJsb2NrX19pdGVtLmJsb2NrX19pdGVtLS1pbWcgLmJsb2NrX19pbWcge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIH1cbiAgLmJsb2NrIC5ibG9ja19fYm9keSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuYmxvY2sgLmJsb2NrX19hY3Rpb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuYmxvY2sgLmJsb2NrX19pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5ibG9jayAuYmxvY2tfX2l0ZW0gKyAuYmxvY2tfX2l0ZW0ge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FunMasksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-block-fun-masks',
                templateUrl: './fun-masks.component.html',
                styleUrls: ['./fun-masks.component.less'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map