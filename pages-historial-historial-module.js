(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-historial-historial-module"],{

/***/ "./src/app/pages/historial/historial-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/historial/historial-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: HistorialRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialRoutingModule", function() { return HistorialRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _historial_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./historial.component */ "./src/app/pages/historial/historial.component.ts");





const routes = [
    { path: '', component: _historial_component__WEBPACK_IMPORTED_MODULE_2__["HistorialComponent"] }
];
class HistorialRoutingModule {
}
HistorialRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HistorialRoutingModule });
HistorialRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HistorialRoutingModule_Factory(t) { return new (t || HistorialRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HistorialRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistorialRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/historial/historial.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/historial/historial.component.ts ***!
  \********************************************************/
/*! exports provided: HistorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialComponent", function() { return HistorialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_mantenimientos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/mantenimientos.service */ "./src/app/services/mantenimientos.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_table_historial_table_historial_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/table-historial/table-historial.component */ "./src/app/components/table-historial/table-historial.component.ts");





function HistorialComponent_app_table_historial_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-table-historial", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r0.dataSource.MpreventivoH)("titulo", "mantenimiento preventivo");
} }
function HistorialComponent_app_table_historial_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-table-historial", 1);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r1.dataSource.McorrectivoH)("titulo", "mantenimiento correctivo");
} }
class HistorialComponent {
    constructor(_mantenimientoS) {
        this._mantenimientoS = _mantenimientoS;
    }
    ngOnInit() {
        this.dataSource = this._mantenimientoS.ObtenerMantenimientosHistorial();
    }
}
HistorialComponent.ɵfac = function HistorialComponent_Factory(t) { return new (t || HistorialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mantenimientos_service__WEBPACK_IMPORTED_MODULE_1__["MantenimientosService"])); };
HistorialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HistorialComponent, selectors: [["app-historial"]], decls: 2, vars: 2, consts: [[3, "dataSource", "titulo", 4, "ngIf"], [3, "dataSource", "titulo"]], template: function HistorialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HistorialComponent_app_table_historial_0_Template, 1, 2, "app-table-historial", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HistorialComponent_app_table_historial_1_Template, 1, 2, "app-table-historial", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.MpreventivoH);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.McorrectivoH != undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_table_historial_table_historial_component__WEBPACK_IMPORTED_MODULE_3__["TableHistorialComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hpc3RvcmlhbC9oaXN0b3JpYWwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistorialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-historial',
                templateUrl: './historial.component.html',
                styleUrls: ['./historial.component.css']
            }]
    }], function () { return [{ type: _services_mantenimientos_service__WEBPACK_IMPORTED_MODULE_1__["MantenimientosService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/historial/historial.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/historial/historial.module.ts ***!
  \*****************************************************/
/*! exports provided: HistorialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialModule", function() { return HistorialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _historial_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./historial-routing.module */ "./src/app/pages/historial/historial-routing.module.ts");
/* harmony import */ var _historial_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./historial.component */ "./src/app/pages/historial/historial.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");







class HistorialModule {
}
HistorialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HistorialModule });
HistorialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HistorialModule_Factory(t) { return new (t || HistorialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _historial_routing_module__WEBPACK_IMPORTED_MODULE_2__["HistorialRoutingModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HistorialModule, { declarations: [_historial_component__WEBPACK_IMPORTED_MODULE_3__["HistorialComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _historial_routing_module__WEBPACK_IMPORTED_MODULE_2__["HistorialRoutingModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
        src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistorialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_historial_component__WEBPACK_IMPORTED_MODULE_3__["HistorialComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _historial_routing_module__WEBPACK_IMPORTED_MODULE_2__["HistorialRoutingModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                    src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-historial-historial-module.js.map