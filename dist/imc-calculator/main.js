(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jacielpc/Escritorio/api/tdd/imc-calculator/src/main.ts */"zUnb");


/***/ }),

/***/ "0hi2":
/*!*************************************!*\
  !*** ./src/services/imc.service.ts ***!
  \*************************************/
/*! exports provided: ImcService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImcService", function() { return ImcService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/storage.service */ "61FP");





class ImcService {
    constructor(http, storageService) {
        this.http = http;
        this.storageService = storageService;
        this.apiURL = 'https://user-imc-api.herokuapp.com';
        /*========================================
          CRUD Methods for consuming RESTful API
        =========================================*/
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.storageService.getSession("token")
            })
        };
    }
    // HttpClient API post() method => Create employee
    createImc(imcApi) {
        return this.http.post(this.apiURL + '/imcs', JSON.stringify(imcApi), this.httpOptions);
    }
}
ImcService.ɵfac = function ImcService_Factory(t) { return new (t || ImcService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"])); };
ImcService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ImcService, factory: ImcService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImcService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "61FP":
/*!*****************************************!*\
  !*** ./src/services/storage.service.ts ***!
  \*****************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
class StorageService {
    constructor() {
        this.roles = [];
    }
    setSession(key, token) {
        window.sessionStorage.removeItem(key);
        window.sessionStorage.setItem(key, token);
    }
    getSession(key) {
        return sessionStorage.getItem(key);
    }
    signOut() {
        window.sessionStorage.clear();
    }
    saveUsername(key, username) {
        window.sessionStorage.removeItem(key);
        window.sessionStorage.setItem(key, username);
    }
    getUsername(key) {
        return sessionStorage.getItem(key);
    }
    saveAuthorities(key, authorities) {
        window.sessionStorage.removeItem(key);
        window.sessionStorage.setItem(key, JSON.stringify(authorities));
    }
    getAuthorities(key1, key2) {
        this.roles = [];
        if (sessionStorage.getItem(key1)) {
            JSON.parse(sessionStorage.getItem(key2)).forEach(authority => {
                this.roles.push(authority.authority);
            });
        }
        return this.roles;
    }
    saveId(key, id) {
        window.sessionStorage.removeItem(key);
        window.sessionStorage.setItem(key, id);
    }
    getId(key) {
        return sessionStorage.getItem(key);
    }
    saveEmail(key, email) {
        window.sessionStorage.removeItem(key);
        window.sessionStorage.setItem(key, email);
    }
    getEmail(key) {
        return sessionStorage.getItem(key);
    }
}


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
/* harmony import */ var _models_imcapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/imcapi */ "Ba1L");
/* harmony import */ var _services_imc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/imc.service */ "0hi2");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/storage.service */ "61FP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









class UiImcComponent {
    constructor(imcService, storageService) {
        this.imcService = imcService;
        this.storageService = storageService;
        this.result = '';
        this.estatura = 0;
        this.peso = 0;
        this.edad = 0;
        this.genero = '';
        this.myimc = 0;
    }
    ngOnInit() {
        this.userId = this.storageService.getId("id");
    }
    calcularIMC() {
        let Resultado = '';
        let myresultTxt = '';
        this.myimc = Object(_hombre_hombre__WEBPACK_IMPORTED_MODULE_1__["calcularIMC"])(this.peso, this.estatura);
        if (this.genero == 'hombre') {
            myresultTxt = Object(_hombre_hombre__WEBPACK_IMPORTED_MODULE_1__["diagnosticoHombre"])(this.edad, this.myimc);
        }
        else if (this.genero == 'mujer') {
            myresultTxt = Object(_mujer_mujer__WEBPACK_IMPORTED_MODULE_2__["diagnosticoMujer"])(this.edad, this.myimc);
        }
        else {
            myresultTxt = 'INVALIDO';
        }
        Resultado = `IMC: ${this.myimc.toFixed(2)}\nDiagnostico: ${myresultTxt}`;
        this.result = Resultado;
    }
    saveimc() {
        var imc = new _models_imcapi__WEBPACK_IMPORTED_MODULE_3__["ImcApi"];
        imc.iduser = this.userId;
        imc.imc = this.myimc;
        return this.imcService.createImc(imc)
            .subscribe((data) => {
            alert(JSON.stringify(data));
        });
    }
}
UiImcComponent.ɵfac = function UiImcComponent_Factory(t) { return new (t || UiImcComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_imc_service__WEBPACK_IMPORTED_MODULE_4__["ImcService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"])); };
UiImcComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UiImcComponent, selectors: [["app-ui-imc"]], decls: 38, vars: 5, consts: [["charset", "utf-8"], [1, "ui-box"], ["for", "estatura"], ["id", "estatura", "type", "number", "name", "estatura", "placeholder", "0.0", 1, "form-control", "estatura", 3, "ngModel", "ngModelChange"], ["for", "peso"], ["id", "peso", "type", "number", "name", "peso", "placeholder", "0.0", 1, "form-control", "peso", 3, "ngModel", "ngModelChange"], ["for", "edad"], ["id", "edad", "type", "number", "name", "edad", "placeholder", "0.0", 1, "form-control", "edad", 3, "ngModel", "ngModelChange"], ["for", "genero"], ["id", "genero", "type", "text", "name", "genero", "placeholder", "hombre/mujer", 1, "form-control", "genero", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Calcular tu IMC", 1, "enviarDatos-button", "btn", "btn-success", 3, "click"], ["type", "submit", "value", "Guardar IMC", 1, "save-imc-button", "btn", "btn-info", 3, "click"], ["for", "textarea"], ["name", "textarea"], ["src", "rango.jpg", "width", "500px", "height", "60px"], ["src", "hombreT.jpg", "width", "500px", "height", "190px"], ["src", "mujerT.jpg", "width", "500px", "height", "190px"]], template: function UiImcComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "IMC CALCULADORA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Estatura (cm)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UiImcComponent_Template_input_ngModelChange_10_listener($event) { return ctx.estatura = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Peso (kg)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UiImcComponent_Template_input_ngModelChange_13_listener($event) { return ctx.peso = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Edad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UiImcComponent_Template_input_ngModelChange_16_listener($event) { return ctx.edad = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Genero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UiImcComponent_Template_input_ngModelChange_19_listener($event) { return ctx.genero = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UiImcComponent_Template_input_click_21_listener() { return ctx.calcularIMC(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UiImcComponent_Template_input_click_23_listener() { return ctx.saveimc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Resultado Obtenido: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.estatura);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.peso);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.edad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.genero);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.result, "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: ["body[_ngcontent-%COMP%] {\r\n    background-size: cover;\r\n    font-family: sans-serif;\r\n}\r\n  \r\n  \r\n.ui-box[_ngcontent-%COMP%] {\r\n    width: 550px;\r\n    height: 1250px;\r\n    background-image: linear-gradient(101deg,#262929,#000000);\r\n    color: rgb(255, 255, 255);\r\n    top: 90%;\r\n    left: 50%;\r\n    position: absolute;\r\n    transform: translate(-50%, -40%);\r\n    box-sizing: border-box;\r\n    padding: 25px 30px;\r\n    border-radius: 10px;\r\n}\r\n  \r\n  \r\n.ui-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    color: rgb(255, 255, 255);\r\n    margin: 0;\r\n    padding: 0 0 20px;\r\n    text-align: center;\r\n    font-size: 2em;\r\n    text-shadow: gray 4px 0;\r\n    font-weight: bolder;\r\n    \r\n}\r\n  \r\n  \r\n.ui-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n    column-width: 10px;\r\n    color: rgb(255, 255, 255);\r\n\r\n}\r\n  \r\n  \r\n.ui-box[_ngcontent-%COMP%]   input[type=\"number\"][_ngcontent-%COMP%], .ui-box[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\r\n    background: rgb(240, 255, 240);\r\n    background-image: linear-gradient(101deg,#f8f8f8,#1cf7c8);\r\n    padding: 12px 30px;\r\n    background: transparent;\r\n}\r\n  \r\n  \r\n.enviarDatos-button[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    background: rgb(240, 255, 240);\r\n    border-radius: 24px;\r\n    background-image: linear-gradient(101deg,#e91e63,#f7681c);\r\n    padding: 12px 30px;\r\n}\r\n  \r\n  \r\n.save-imc-button[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    background: rgb(240, 255, 240);\r\n    border-radius: 24px;\r\n    background-image: linear-gradient(101deg,#e91e63,#f7681c);\r\n    padding: 12px 30px;\r\n}\r\n  \r\n  \r\n.ui-btn[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    background: rgb(240, 255, 240);\r\n    border-radius: 24px;\r\n    background-image: linear-gradient(101deg,#1ebae9,#1cf7c8);\r\n    margin-top: 32px;\r\n    border: none;\r\n    padding: 12px 30px;\r\n    text-decoration: none;\r\n    \r\n}\r\n  \r\n  \r\ntextarea[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    resize : none;\r\n    color: rgb(8, 2, 2);\r\n    padding: 6%;\r\n    width: 500px;\r\n}\r\n  \r\n  \r\n.rango[_ngcontent-%COMP%]{\r\n    background: url(rango.jpg);\r\n    background-size: 100% 100%;\r\n}\r\n  \r\n  \r\n.hombre[_ngcontent-%COMP%]{\r\n    background: url(hombreT.jpg);\r\n}\r\n  \r\n  \r\n.mujer[_ngcontent-%COMP%]{\r\n    background: url(mujerT.jpg);\r\n}\r\n  \r\n  \r\n[_ngcontent-%COMP%]::placeholder {\r\n    color: rgb(255, 255, 255);\r\n    opacity: 0.7;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktaW1jL3VpLWltYy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLHlEQUF5RDtJQUN6RCx5QkFBeUI7SUFDekIsUUFBUTtJQUNSLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOzs7QUFJQTtJQUNJLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7QUFFdkI7OztBQUlBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix5QkFBeUI7O0FBRTdCOzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5Qix5REFBeUQ7SUFDekQsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQix5REFBeUQ7SUFDekQsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHlEQUF5RDtJQUN6RCxrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIseURBQXlEO0lBQ3pELGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjs7QUFFekI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7QUFDaEI7OztBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLDBCQUEwQjtBQUM5Qjs7O0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7OztBQUNBO0lBQ0ksMkJBQTJCO0FBQy9COzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC91aS1pbWMvdWktaW1jLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG4gIFxyXG4gIFxyXG4udWktYm94IHtcclxuICAgIHdpZHRoOiA1NTBweDtcclxuICAgIGhlaWdodDogMTI1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEwMWRlZywjMjYyOTI5LCMwMDAwMDApO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHRvcDogOTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTQwJSk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMjVweCAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4udWktYm94IGgxIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwIDAgMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgdGV4dC1zaGFkb3c6IGdyYXkgNHB4IDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgXHJcbn1cclxuICBcclxuIFxyXG4gIFxyXG4udWktYm94IGlucHV0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBjb2x1bW4td2lkdGg6IDEwcHg7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG5cclxufVxyXG4gIFxyXG4udWktYm94IGlucHV0W3R5cGU9XCJudW1iZXJcIl0sIC51aS1ib3ggaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI0MCwgMjU1LCAyNDApO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEwMWRlZywjZjhmOGY4LCMxY2Y3YzgpO1xyXG4gICAgcGFkZGluZzogMTJweCAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuICBcclxuLmVudmlhckRhdG9zLWJ1dHRvbiBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNDAsIDI1NSwgMjQwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTAxZGVnLCNlOTFlNjMsI2Y3NjgxYyk7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDMwcHg7XHJcbn1cclxuXHJcbi5zYXZlLWltYy1idXR0b24gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQwLCAyNTUsIDI0MCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEwMWRlZywjZTkxZTYzLCNmNzY4MWMpO1xyXG4gICAgcGFkZGluZzogMTJweCAzMHB4O1xyXG59XHJcbiAgXHJcbi51aS1idG4gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQwLCAyNTUsIDI0MCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEwMWRlZywjMWViYWU5LCMxY2Y3YzgpO1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEycHggMzBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIFxyXG59XHJcbiAgXHJcbnRleHRhcmVhe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcmVzaXplIDogbm9uZTtcclxuICAgIGNvbG9yOiByZ2IoOCwgMiwgMik7XHJcbiAgICBwYWRkaW5nOiA2JTtcclxuICAgIHdpZHRoOiA1MDBweDtcclxufVxyXG4ucmFuZ297XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwocmFuZ28uanBnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG59XHJcbi5ob21icmV7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaG9tYnJlVC5qcGcpO1xyXG59XHJcbi5tdWplcntcclxuICAgIGJhY2tncm91bmQ6IHVybChtdWplclQuanBnKTtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gIH1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiImcComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ui-imc',
                templateUrl: './ui-imc.component.html',
                styleUrls: ['./ui-imc.component.css']
            }]
    }], function () { return [{ type: _services_imc_service__WEBPACK_IMPORTED_MODULE_4__["ImcService"] }, { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/storage.service */ "61FP");



class HomeComponent {
    constructor(storageService) {
        this.storageService = storageService;
    }
    ngOnInit() {
        this.info = {
            token: this.storageService.getSession("token"),
            id: this.storageService.getId("id"),
            email: this.storageService.getEmail("email"),
            username: this.storageService.getUsername("username"),
            authorities: this.storageService.getAuthorities("token", "roles")
        };
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 30, vars: 4, consts: [[1, "row"], [1, "user"], [1, "col-md-5", "list"], [1, "list-group"], [1, "list-group-item"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Informaci\u00F3n personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Nombre de usuario:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Roles:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.info.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.info.username, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.info.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.info.authorities, "");
    } }, styles: [".back-img[_ngcontent-%COMP%] {\r\n    background: url('Calculate-Your-Body-Mass-Index.jpg');\r\n    background-size: 100% 100%;\r\n    height: 35.5em;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    padding-left: 10px;\r\n    padding-top: 25px;\r\n    font-size:1.6em;\r\n    transform: translate(40%, -2.2%);\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    padding-left: 10px;\r\n    font-size:1.6em;\r\n}\r\n\r\n.user[_ngcontent-%COMP%]{\r\n    background: url('user-profile.png') no-repeat center top;\r\n    background-size: 100% 100%;\r\n    width: 200px;\r\n    height: 200px;\r\n    transform: translate(280%, -2.2%);\r\n    border-radius: 100px;\r\n    margin: 0;\r\n    padding: 3%;\r\n    cursor: pointer;\r\n}\r\n\r\n.list[_ngcontent-%COMP%]{\r\n    left: 7%;\r\n    position: relative;\r\n    transform: translate(20%, 100%);\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxREFBNEU7SUFDNUUsMEJBQTBCO0lBQzFCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFHQTtJQUNJLHdEQUEwRTtJQUMxRSwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsb0JBQW9CO0lBQ3BCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrLWltZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvcmVzb3Vyc2UvQ2FsY3VsYXRlLVlvdXItQm9keS1NYXNzLUluZGV4LmpwZ1wiKSA7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGhlaWdodDogMzUuNWVtO1xyXG59XHJcblxyXG5oMXtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOjEuNmVtO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDAlLCAtMi4yJSk7XHJcbn1cclxuXHJcbmgye1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOjEuNmVtO1xyXG59XHJcblxyXG5cclxuLnVzZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy91c2VyLXByb2ZpbGUucG5nKSBuby1yZXBlYXQgY2VudGVyIHRvcDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI4MCUsIC0yLjIlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5saXN0e1xyXG4gICAgbGVmdDogNyU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMCUsIDEwMCUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: src_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"] }]; }, null); })();


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

/***/ "Ba1L":
/*!******************************!*\
  !*** ./src/models/imcapi.ts ***!
  \******************************/
/*! exports provided: ImcApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImcApi", function() { return ImcApi; });
class ImcApi {
}


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

/***/ "D/Am":
/*!********************************!*\
  !*** ./src/models/usersapi.ts ***!
  \********************************/
/*! exports provided: UserApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserApi", function() { return UserApi; });
class UserApi {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}


/***/ }),

/***/ "HPfj":
/*!***************************************!*\
  !*** ./src/services/users.service.ts ***!
  \***************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class UsersService {
    //API_URI = 'http://localhost:8080/api/auth';
    constructor(http) {
        this.http = http;
        // Define API
        this.API_URI = 'https://user-imc-api.herokuapp.com/api/auth';
        /*========================================
          CRUD Methods for consuming RESTful API
        =========================================*/
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    // HttpClient API post() method => Create employee
    loginUser(credentials) {
        return this.http.post(`${this.API_URI}/signin`, credentials, httpOptions);
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem('token');
        return !(user === null);
    }
    registrar(info) {
        return this.http.post(`${this.API_URI}/signup`, info, httpOptions);
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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

/***/ "Oj1a":
/*!****************************!*\
  !*** ./src/models/user.ts ***!
  \****************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(name, username, email, password) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = ['user'];
    }
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
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'imc-calculator';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/storage.service */ "61FP");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/users.service */ "HPfj");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"], _services_users_service__WEBPACK_IMPORTED_MODULE_12__["UsersService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _ui_imc_ui_imc_component__WEBPACK_IMPORTED_MODULE_4__["UiImcComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _ui_imc_ui_imc_component__WEBPACK_IMPORTED_MODULE_4__["UiImcComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                    _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
                ],
                providers: [_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"], _services_users_service__WEBPACK_IMPORTED_MODULE_12__["UsersService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/storage.service */ "61FP");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ "HPfj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function HeaderComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Iniciar Sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reg\u00EDstrate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mi CalculadoraIMC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cerrar sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(storageService, usersService, router) {
        this.storageService = storageService;
        this.usersService = usersService;
        this.router = router;
        this.result = '';
    }
    ngOnInit() {
    }
    logout() {
        this.storageService.signOut();
        this.result = 'logout';
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 9, vars: 5, consts: [[1, "navbar", "navbar-expand", "navbar-dark", "bg-dark"], [1, "navbar-nav"], ["class", "nav-item nav-link", "routerLink", "home", 4, "ngIf"], ["class", "nav-item nav-link", "routerLink", "login", 4, "ngIf"], ["class", "nav-item nav-link", "routerLink", "signup", 4, "ngIf"], ["class", "nav-item nav-link", "routerLink", "imc", 4, "ngIf"], ["class", "nav-item nav-link", "routerLink", "", 3, "click", 4, "ngIf"], ["routerLink", "home", 1, "nav-item", "nav-link"], ["routerLink", "login", 1, "nav-item", "nav-link"], ["routerLink", "signup", 1, "nav-item", "nav-link"], ["routerLink", "imc", 1, "nav-item", "nav-link"], ["routerLink", "", 1, "nav-item", "nav-link", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_a_3_Template, 2, 0, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_a_4_Template, 2, 0, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_a_5_Template, 2, 0, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_a_6_Template, 2, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_a_8_Template, 2, 0, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usersService.isUserLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.usersService.isUserLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.usersService.isUserLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usersService.isUserLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usersService.isUserLoggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"] }, { type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "hN/g":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone */ "pDpN");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ "rd1V":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/user */ "Oj1a");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ "HPfj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







function SignupComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.errorMessage, " ");
} }
class SignupComponent {
    constructor(usersService) {
        this.usersService = usersService;
        this.result = '';
        this.name = '';
        this.username = '';
        this.email = '';
        this.role = [];
        this.password = '';
        this.isSignedUp = false;
        this.isSignUpFailed = false;
        this.errorMessage = false;
    }
    ngOnInit() {
    }
    registar() {
        console.log(this.mydata);
        this.mydata = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"](this.name, this.username, this.email, this.password);
        this.mydata.role = ['user'];
        if (this.name == "" || this.username == "" || this.email == "" || this.password == "") {
            this.result = 'isEmpty';
            alert('CAMPOS REQUERIDOS');
        }
        else {
            this.usersService.registrar(this.mydata)
                .subscribe((data) => {
                console.log(data);
                this.isSignedUp = true;
                this.isSignUpFailed = false;
            }, error => {
                console.log(error);
                this.errorMessage = error.error.message;
                this.isSignUpFailed = true;
                this.result = 'failed';
            });
            this.result = 'success';
        }
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 33, vars: 5, consts: [["lang", "en"], [1, "body", "col-md-4", "form-control", "card-body"], [1, "card-title", "text-center"], ["class", "alert alert-warning", 4, "ngIf"], [1, "input-group", "form-group"], [1, "input-group-addon", "input-group-text"], [1, "fa", "fa-user-o"], ["id", "name", "type", "text", "name", "name", "placeholder", "Tu Nombre", 1, "form-control", "name", 3, "ngModel", "ngModelChange"], ["id", "username", "type", "text", "name", "username", "placeholder", "Nombre de Usuario", 1, "form-control", "username", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-envelope-o"], ["id", "email", "type", "text", "name", "email", "placeholder", "Direcci\u00F3n de correo electr\u00F3nico", 1, "form-control", "email", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-key"], ["id", "password", "type", "password", "name", "password", "placeholder", "Contrase\u00F1a", 1, "form-control", "password", 3, "ngModel", "ngModelChange"], [1, "form-group"], [1, "btn", "btn-primary", "button", 3, "click"], ["routerLink", "/login", 1, "btn", "btn-link"], [1, "alert", "alert-warning"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Reg\u00EDstrate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SignupComponent_div_6_Template, 4, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_11_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_16_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_21_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_26_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_29_listener() { return ctx.registar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Ya tengo mi cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSignUpFailed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".body[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n    transform: translate(120%, 20%);\r\n    font-size: 0.8em;\r\n    position: relative;\r\n    margin: 0;\r\n    padding: 3%;\r\n}\r\n\r\n.result[_ngcontent-%COMP%] {\r\n    font-size: 1.1em;\r\n    font-weight: bold;\r\n    color: red;\r\n}\r\n\r\n.name[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n    font-weight: lighter;\r\n    color: black;\r\n\r\n}\r\n\r\n.username[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n    font-weight: lighter;\r\n    color: black;\r\n\r\n}\r\n\r\n.email[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n    font-weight: lighter;\r\n    color: black;\r\n\r\n}\r\n\r\n.rol[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n    font-weight: lighter;\r\n    color: black;\r\n\r\n}\r\n\r\n.password[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n    font-weight: lighter;\r\n    color: black;\r\n\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    color: white;\r\n}\r\n\r\n.btn-block[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTIwJSwgMjAlKTtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxufVxyXG5cclxuLnJlc3VsdCB7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcblxyXG59XHJcblxyXG4udXNlcm5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG5cclxufVxyXG5cclxuLmVtYWlsIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuXHJcbn1cclxuXHJcbi5yb2wge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG5cclxufVxyXG5cclxuLnBhc3N3b3JkIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuXHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css']
            }]
    }], function () { return [{ type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }]; }, null); })();


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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _ui_imc_ui_imc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui-imc/ui-imc.component */ "9XxO");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");








const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'imc', component: _ui_imc_ui_imc_component__WEBPACK_IMPORTED_MODULE_4__["UiImcComponent"] },
    { path: '', pathMatch: 'full', redirectTo: 'login' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_usersapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/usersapi */ "D/Am");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/users.service */ "HPfj");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ "61FP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function LoginComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
} }
class LoginComponent {
    constructor(ruta, usersService, storageService) {
        this.ruta = ruta;
        this.usersService = usersService;
        this.storageService = storageService;
        this.result = '';
        this.username = '';
        this.password = '';
        this.errorMessage = '';
        this.isLoginFailed = false;
    }
    ngOnInit() {
    }
    logIn() {
        var mydata = new _models_usersapi__WEBPACK_IMPORTED_MODULE_1__["UserApi"](this.username, this.password);
        if (this.username == "" || this.password == "") {
            this.result = 'isEmpty';
            alert('CAMPOS VACIOS USUARIO Y CONTRASEÑA REQUERIDOS');
        }
        else {
            mydata.username = this.username;
            mydata.password = this.password;
            this.usersService.loginUser(mydata)
                .subscribe(data => {
                console
                    .log(data);
                this.storageService.setSession("token", data.accessToken);
                this.storageService.saveId("id", data.id);
                this.storageService.saveUsername("username", data.username);
                this.storageService.saveEmail("email", data.email);
                this.storageService.saveAuthorities("roles", data.authorities);
                this.isLoginFailed = false;
                this.ruta.navigate(['home']);
            }, error => {
                console.log(error);
                this.errorMessage = error.error.message;
                this.isLoginFailed = true;
                this.result = 'failed';
            });
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 21, vars: 3, consts: [["lang", "en"], [1, "calculator", "col-md-4", "form-control"], [1, "card-title", "text-center"], ["class", "alert alert-danger", 4, "ngIf"], [1, "input-group", "form-group"], [1, "input-group-addon", "input-group-text"], [1, "fa", "fa-user-o"], ["id", "username", "type", "text", "name", "operator1", "placeholder", "Nombre de Usuario", "required", "", 1, "form-control", "operator1", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-key"], ["id", "password", "type", "password", "name", "operator2", "placeholder", "Contrase\u00F1a", "required", "", 1, "form-control", "operator2", 3, "ngModel", "ngModelChange"], [1, "form-group"], [1, "btn", "btn-primary", "login-button", 3, "click"], [1, "alert", "alert-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Iniciar Sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginComponent_div_6_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_19_listener() { return ctx.logIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Iniciar sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoginFailed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: [".calculator[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n    transform: translate(120%, 40%);\r\n    font-size: 0.8em;\r\n    position: relative;\r\n    margin: 0;\r\n    padding: 3%;\r\n}\r\n\r\n.result[_ngcontent-%COMP%] {\r\n    font-size: 1.1em;\r\n    font-weight: bold;\r\n    color: red;\r\n}\r\n\r\n.operator1[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n    font-weight: lighter;\r\n    color: black;\r\n\r\n}\r\n\r\n.operator2[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n    font-weight: lighter;\r\n    color: black;\r\n\r\n}\r\n\r\n.login-button[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    color: white;\r\n}\r\n\r\n.btn-block[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FsY3VsYXRvciB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMjAlLCA0MCUpO1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG59XHJcblxyXG4ucmVzdWx0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5vcGVyYXRvcjEge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG5cclxufVxyXG5cclxuLm9wZXJhdG9yMiB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcblxyXG59XHJcblxyXG4ubG9naW4tYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }, { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills.ts */ "hN/g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
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