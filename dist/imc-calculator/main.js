(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jacielpc/imc-calculator/src/main.ts */"zUnb");


/***/ }),

/***/ "9XxO":
/*!********************************************!*\
  !*** ./src/app/ui-imc/ui-imc.component.ts ***!
  \********************************************/
/*! exports provided: UiImcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiImcComponent", function() { return UiImcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _hombre_hombre__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hombre/hombre */ "BbDD");
/* harmony import */ var _mujer_mujer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mujer/mujer */ "OX2v");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class UiImcComponent {
    constructor() {
        this.result = '';
        this.result2 = '';
        this.estatura = 0;
        this.peso = 0;
        this.edad = 0;
        this.genero = '';
    }
    ngOnInit() {
    }
    calcularIMC() {
        let Resultado = '';
        let myresult = 0;
        let myresultTxt = '';
        myresult = Object(_hombre_hombre__WEBPACK_IMPORTED_MODULE_1__["calcularIMC"])(this.peso, this.estatura);
        if (this.genero == 'hombre') {
            myresultTxt = Object(_hombre_hombre__WEBPACK_IMPORTED_MODULE_1__["diagnosticoHombre"])(this.edad, myresult);
        }
        else if (this.genero == 'mujer') {
            myresultTxt = Object(_mujer_mujer__WEBPACK_IMPORTED_MODULE_2__["diagnosticoMujer"])(this.edad, myresult);
        }
        else {
            myresultTxt = 'INVALIDO';
        }
        Resultado = `IMC: ${myresult.toFixed(2)}\nDiagnostico: ${myresultTxt}`;
        this.result = Resultado;
    }
}
UiImcComponent.ɵfac = function UiImcComponent_Factory(t) { return new (t || UiImcComponent)(); };
UiImcComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UiImcComponent, selectors: [["app-ui-imc"]], decls: 33, vars: 5, consts: [["charset", "utf-8"], ["align", "center"], [1, "ui-box"], ["for", "estatura"], ["id", "estatura", "type", "number", "name", "estatura", "placeholder", "0.0", 1, "form-control", "estatura", 3, "ngModel", "ngModelChange"], ["for", "peso"], ["id", "peso", "type", "number", "name", "peso", "placeholder", "0.0", 1, "form-control", "peso", 3, "ngModel", "ngModelChange"], ["for", "edad"], ["id", "edad", "type", "number", "name", "edad", "placeholder", "0.0", 1, "form-control", "edad", 3, "ngModel", "ngModelChange"], ["for", "genero"], ["id", "genero", "type", "text", "name", "genero", "placeholder", "hombre/mujer", 1, "form-control", "genero", 3, "ngModel", "ngModelChange"], ["action", "../../form-result.php", "method", "post", "target", "_blank"], ["type", "submit", "value", "Enviar datos", 1, "enviarDatos-button", 3, "click"], ["name", "textarea", "align", "center", "rows", "4", "readonly", "", "cols", "60"], ["align", "center", 1, "range"], ["src", "rango.jpg", "width", "500px", "height", "60px"], ["align", "center", 1, "hombre"], ["src", "hombreT.jpg", "width", "500px", "height", "190px"], ["align", "center", 1, "mujer"], ["src", "mujerT.jpg", "width", "500px", "height", "190px"]], template: function UiImcComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "IMC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Estatura (cm)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UiImcComponent_Template_input_ngModelChange_11_listener($event) { return ctx.estatura = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Peso (kg)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UiImcComponent_Template_input_ngModelChange_14_listener($event) { return ctx.peso = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Edad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UiImcComponent_Template_input_ngModelChange_17_listener($event) { return ctx.edad = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Genero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UiImcComponent_Template_input_ngModelChange_20_listener($event) { return ctx.genero = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UiImcComponent_Template_input_click_23_listener() { return ctx.calcularIMC(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.estatura);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.peso);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.edad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.genero);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.result, "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["body[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n    \n    background-size: cover;\n    font-family: sans-serif;\n    height: 150vh;\n}\n  \n  \n.ui-box[_ngcontent-%COMP%] {\n    width: 550px;\n    height: 1005px;\n    background: rgb(0, 0, 0);\n    color: #fff;\n    top: 50%;\n    left: 50%;\n    position: absolute;\n    transform: translate(-50%, -40%);\n    box-sizing: border-box;\n    padding: 70px 30px;\n}\n  \n  \n.ui-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: #fc0000;\n    margin: 0;\n    padding: 0 0 20px;\n    text-align: center;\n    font-size: 22px;\n}\n  \n  \n.ui-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 20px;\n}\n  \n  \n.ui-box[_ngcontent-%COMP%]   input[type=\"number\"][_ngcontent-%COMP%], .ui-box[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\n    text-align: center;\n    border: none;\n    border-bottom: 1px solid #fff;\n    background: transparent;\n    outline: none;\n    height: 30px;\n    color: rgb(255, 187, 0);\n    font-size: 16px;\n}\n  \n  \n.enviarDatos-button[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%] {\n    height: 100px;\n    background: #b80f22;\n    color: rgb(236, 221, 13);\n    font-size: 18px;\n    border-radius: 20px;\n    cursor: pointer;\n    background: #ffc107;\n    color: #000;\n    position: absolute;\n    top: 50%;\n}\n  \n  \n.ui-box[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    background: #ffc107;\n    color: #000;\n}\n  \n  \ntextarea[_ngcontent-%COMP%]{\n    text-align: center;\n    resize : none;\n}\n  \n  \n.rango[_ngcontent-%COMP%]{\n    background: url(rango.jpg);\n}\n  \n  \n.hombre[_ngcontent-%COMP%]{\n    background: url(hombreT.jpg);\n}\n  \n  \n.mujer[_ngcontent-%COMP%]{\n    background: url(mujerT.jpg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktaW1jL3VpLWltYy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7O0lBRVYsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7O0FBSUE7SUFDSSxjQUFjO0lBQ2QsU0FBUztJQUNULGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7O0FBSUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7O0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7OztBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDOzs7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL3VpLWltYy91aS1pbWMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgaGVpZ2h0OiAxNTB2aDtcbn1cbiAgXG4gIFxuLnVpLWJveCB7XG4gICAgd2lkdGg6IDU1MHB4O1xuICAgIGhlaWdodDogMTAwNXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwKTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00MCUpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogNzBweCAzMHB4O1xufVxuICBcbiAgXG4gIFxuLnVpLWJveCBoMSB7XG4gICAgY29sb3I6ICNmYzAwMDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDAgMCAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIycHg7XG59XG4gIFxuIFxuICBcbi51aS1ib3ggaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4gIFxuLnVpLWJveCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLCAudWktYm94IGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGNvbG9yOiByZ2IoMjU1LCAxODcsIDApO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbiAgXG4uZW52aWFyRGF0b3MtYnV0dG9uIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYmFja2dyb3VuZDogI2I4MGYyMjtcbiAgICBjb2xvcjogcmdiKDIzNiwgMjIxLCAxMyk7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6ICNmZmMxMDc7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xufVxuICBcbi51aS1ib3ggaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6ICNmZmMxMDc7XG4gICAgY29sb3I6ICMwMDA7XG59XG4gIFxudGV4dGFyZWF7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHJlc2l6ZSA6IG5vbmU7XG59XG4ucmFuZ297XG4gICAgYmFja2dyb3VuZDogdXJsKHJhbmdvLmpwZyk7XG59XG4uaG9tYnJle1xuICAgIGJhY2tncm91bmQ6IHVybChob21icmVULmpwZyk7XG59XG4ubXVqZXJ7XG4gICAgYmFja2dyb3VuZDogdXJsKG11amVyVC5qcGcpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiImcComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ui-imc',
                templateUrl: './ui-imc.component.html',
                styleUrls: ['./ui-imc.component.css']
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

/***/ "BbDD":
/*!**********************************!*\
  !*** ./src/app/hombre/hombre.ts ***!
  \**********************************/
/*! exports provided: calcularIMC, diagnosticoHombre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcularIMC", function() { return calcularIMC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diagnosticoHombre", function() { return diagnosticoHombre; });
function calcularIMC(peso, estatura) {
    let IMC = 0;
    let div = estatura / 100;
    let mult = div * div;
    IMC = peso / mult;
    return parseFloat(IMC.toFixed(2));
    ;
}
function diagnosticoHombre(edad, IMC) {
    let resul = '';
    if (edad <= 10) {
        if (IMC <= 13.7) {
            resul = "Usted tiene bajo peso";
        }
        else if (IMC >= 13.7 && IMC < 18.5) {
            resul = "Usted tiene un peso normal";
        }
        else if (IMC >= 18.5 && IMC < 21.4) {
            resul = "Usted tiene sobrepeso";
        }
        else {
            resul = "Usted tiene obesidad";
        }
    }
    else if (edad == 11) {
        if (IMC <= 14.1) {
            resul = "Usted tiene bajo peso";
        }
        else if (IMC > 14.1 && IMC < 19.2) {
            resul = "Usted tiene un peso normal";
        }
        else if (IMC >= 19.2 && IMC < 22.5) {
            resul = "Usted tiene sobrepeso";
        }
        else {
            resul = "Usted tiene obesidad";
        }
    }
    else if (edad == 12) {
        if (IMC <= 14.5) {
            resul = "Usted tiene bajo peso";
        }
        else if (IMC > 14.5 && IMC < 19.9) {
            resul = "Usted tiene un peso normal";
        }
        else if (IMC >= 19.9 && IMC < 23.6) {
            resul = "Usted tiene sobrepeso";
        }
        else {
            resul = "Usted tiene obesidad";
        }
    }
    else if (edad == 13) {
        if (IMC <= 14.9) {
            resul = "Usted tiene bajo peso";
        }
        else if (IMC > 14.9 && IMC < 20.8) {
            resul = "Usted tiene un peso normal";
        }
        else if (IMC >= 20.8 && IMC < 24.8) {
            resul = "Usted tiene sobrepeso";
        }
        else {
            resul = "Usted tiene obesidad";
        }
    }
    else if (edad == 14) {
        if (IMC <= 15.5) {
            resul = "Usted tiene bajo peso";
        }
        else if (IMC > 15.5 && IMC < 21.8) {
            resul = "Usted tiene un peso normal";
        }
        else if (IMC >= 21.8 && IMC < 25.9) {
            resul = "Usted tiene sobrepeso";
        }
        else {
            resul = "Usted tiene obesidad";
        }
    }
    else if (edad == 15) {
        if (IMC <= 16) {
            resul = "Usted tiene bajo peso";
        }
        else if (IMC > 16 && IMC < 22.7) {
            resul = "Usted tiene un peso normal";
        }
        else if (IMC >= 22.7 && IMC < 27) {
            resul = "Usted tiene sobrepeso";
        }
        else {
            resul = "Usted tiene obesidad";
        }
    }
    else if (edad == 16) {
        if (IMC <= 16.5) {
            resul = "Usted tiene bajo peso";
        }
        else if (IMC > 16.5 && IMC < 23.5) {
            resul = "Usted tiene un peso normal";
        }
        else if (IMC >= 23.5 && IMC < 27.9) {
            resul = "Usted tiene sobrepeso";
        }
        else {
            resul = "Usted tiene obesidad";
        }
    }
    else if (edad == 17) {
        if (IMC <= 16.9) {
            resul = "Usted tiene bajo peso";
        }
        else if (IMC > 16.9 && IMC < 24.3) {
            resul = "Usted tiene un peso normal";
        }
        else if (IMC >= 24.3 && IMC < 28.6) {
            resul = "Usted tiene sobrepeso";
        }
        else {
            resul = "Usted tiene obesidad";
        }
    }
    else if (edad == 18) {
        if (IMC <= 17.3) {
            resul = "Usted tiene bajo peso";
        }
        else if (IMC > 17.3 && IMC < 24.9) {
            resul = "Usted tiene un peso normal";
        }
        else if (IMC >= 24.9 && IMC < 29.2) {
            resul = "Usted tiene sobrepeso";
        }
        else {
            resul = "Usted tiene obesidad";
        }
    }
    else if (edad == 19) {
        if (IMC <= 17.6) {
            resul = "Usted tiene bajo peso";
        }
        else if (IMC > 17.6 && IMC < 25.4) {
            resul = "Usted tiene un peso normal";
        }
        else if (IMC >= 25.4 && IMC < 29.7) {
            resul = "Usted tiene sobrepeso";
        }
        else {
            resul = "Usted tiene obesidad";
        }
    }
    else {
        if (IMC < 18.5) {
            resul = "Usted tiene bajo peso";
        }
        else if (IMC >= 18.5 && IMC <= 25) {
            resul = "Usted tiene un peso normal";
        }
        else if (IMC > 25 && IMC <= 30) {
            resul = "Usted tiene sobrepeso";
        }
        else if (IMC > 30 && IMC <= 35) {
            resul = "Usted tiene obesidad tipo I";
        }
        else if (IMC > 35 && IMC <= 40) {
            resul = "Usted tiene obesidad tipo II";
        }
        else {
            resul = "Usted tiene obesidad tipo III";
        }
    }
    return resul;
}


/***/ }),

/***/ "OX2v":
/*!********************************!*\
  !*** ./src/app/mujer/mujer.ts ***!
  \********************************/
/*! exports provided: calcularIMC, diagnosticoMujer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcularIMC", function() { return calcularIMC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diagnosticoMujer", function() { return diagnosticoMujer; });
function calcularIMC(peso, estatura) {
    let IMC = 0;
    let div = estatura / 100;
    let mult = div * div;
    IMC = peso / mult;
    return parseFloat(IMC.toFixed(2));
    ;
}
function diagnosticoMujer(edad, IMC) {
    let resul = '';
    if (edad <= 10) {
        if (IMC <= 13.5) {
            resul = "Usted tiene bajo peso";
        }
        else if (IMC >= 13.5 && IMC < 19) {
            resul = "Usted tiene un peso normal";
        }
        else if (IMC >= 19 && IMC < 22.6) {
            resul = "Usted tiene sobrepeso";
        }
        else {
            resul = "Usted tiene obesidad";
        }
    }
    else if (edad == 11) {
        if (IMC <= 13.9) {
            resul = "Usted tiene bajo peso";
        }
        else if (IMC > 13.9 && IMC < 19.9) {
            resul = "Usted tiene un peso normal";
        }
        else if (IMC >= 19.9 && IMC < 23.7) {
            resul = "Usted tiene sobrepeso";
        }
        else {
            resul = "Usted tiene obesidad";
        }
    }
    else if (edad == 12) {
        if (IMC <= 14.4) {
            resul = "Usted tiene bajo peso";
        }
        else if (IMC > 14.4 && IMC < 20.8) {
            resul = "Usted tiene un peso normal";
        }
        else if (IMC >= 20.8 && IMC < 25) {
            resul = "Usted tiene sobrepeso";
        }
        else {
            resul = "Usted tiene obesidad";
        }
    }
    else if (edad == 13) {
        if (IMC <= 14.9) {
            resul = "Usted tiene bajo peso";
        }
        else if (IMC > 14.9 && IMC < 21.8) {
            resul = "Usted tiene un peso normal";
        }
        else if (IMC >= 21.8 && IMC < 26.2) {
            resul = "Usted tiene sobrepeso";
        }
        else {
            resul = "Usted tiene obesidad";
        }
    }
    else if (edad == 14) {
        if (IMC <= 15.4) {
            resul = "Usted tiene bajo peso";
        }
        else if (IMC > 15.4 && IMC < 22.7) {
            resul = "Usted tiene un peso normal";
        }
        else if (IMC >= 22.7 && IMC < 27.3) {
            resul = "Usted tiene sobrepeso";
        }
        else {
            resul = "Usted tiene obesidad";
        }
    }
    else if (edad == 15) {
        if (IMC <= 15.9) {
            resul = "Usted tiene bajo peso";
        }
        else if (IMC > 15.9 && IMC < 23.5) {
            resul = "Usted tiene un peso normal";
        }
        else if (IMC >= 23.5 && IMC < 28.2) {
            resul = "Usted tiene sobrepeso";
        }
        else {
            resul = "Usted tiene obesidad";
        }
    }
    else if (edad == 16) {
        if (IMC <= 16.2) {
            resul = "Usted tiene bajo peso";
        }
        else if (IMC > 16.2 && IMC < 24.1) {
            resul = "Usted tiene un peso normal";
        }
        else if (IMC >= 24.1 && IMC < 28.9) {
            resul = "Usted tiene sobrepeso";
        }
        else {
            resul = "Usted tiene obesidad";
        }
    }
    else if (edad == 17) {
        if (IMC <= 16.4) {
            resul = "Usted tiene bajo peso";
        }
        else if (IMC > 16.4 && IMC < 24.5) {
            resul = "Usted tiene un peso normal";
        }
        else if (IMC >= 24.5 && IMC < 29.3) {
            resul = "Usted tiene sobrepeso";
        }
        else {
            resul = "Usted tiene obesidad";
        }
    }
    else if (edad == 18) {
        if (IMC <= 16.4) {
            resul = "Usted tiene bajo peso";
        }
        else if (IMC > 16.4 && IMC < 24.8) {
            resul = "Usted tiene un peso normal";
        }
        else if (IMC >= 24.8 && IMC < 29.5) {
            resul = "Usted tiene sobrepeso";
        }
        else {
            resul = "Usted tiene obesidad";
        }
    }
    else if (edad == 19) {
        if (IMC <= 16.5) {
            resul = "Usted tiene bajo peso";
        }
        else if (IMC > 16.5 && IMC < 25) {
            resul = "Usted tiene un peso normal";
        }
        else if (IMC >= 25 && IMC < 29.7) {
            resul = "Usted tiene sobrepeso";
        }
        else {
            resul = "Usted tiene obesidad";
        }
    }
    else {
        if (IMC < 18.5) {
            resul = "Usted tiene bajo peso";
        }
        else if (IMC >= 18.5 && IMC <= 25) {
            resul = "Usted tiene un peso normal";
        }
        else if (IMC > 25 && IMC <= 30) {
            resul = "Usted tiene sobrepeso";
        }
        else if (IMC > 30 && IMC <= 35) {
            resul = "Usted tiene obesidad tipo I";
        }
        else if (IMC > 35 && IMC <= 40) {
            resul = "Usted tiene obesidad tipo II";
        }
        else {
            resul = "Usted tiene obesidad tipo III";
        }
    }
    return resul;
}


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
/* harmony import */ var _ui_imc_ui_imc_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-imc/ui-imc.component */ "9XxO");



class AppComponent {
    constructor() {
        this.title = 'imc-calculator';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-ui-imc");
    } }, directives: [_ui_imc_ui_imc_component__WEBPACK_IMPORTED_MODULE_1__["UiImcComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ui_imc_ui_imc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui-imc/ui-imc.component */ "9XxO");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _ui_imc_ui_imc_component__WEBPACK_IMPORTED_MODULE_4__["UiImcComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _ui_imc_ui_imc_component__WEBPACK_IMPORTED_MODULE_4__["UiImcComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


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