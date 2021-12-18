(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pendientes-pendientes-module"],{

/***/ "./src/app/pages/pendientes/pendientes-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/pendientes/pendientes-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PendientesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendientesRoutingModule", function() { return PendientesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pendientes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pendientes.component */ "./src/app/pages/pendientes/pendientes.component.ts");





const routes = [
    { path: '', component: _pendientes_component__WEBPACK_IMPORTED_MODULE_2__["PendientesComponent"] }
];
class PendientesRoutingModule {
}
PendientesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PendientesRoutingModule });
PendientesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PendientesRoutingModule_Factory(t) { return new (t || PendientesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PendientesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PendientesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/pendientes/pendientes.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/pendientes/pendientes.component.ts ***!
  \**********************************************************/
/*! exports provided: PendientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendientesComponent", function() { return PendientesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_mantenimientos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/mantenimientos.service */ "./src/app/services/mantenimientos.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_table_pendientes_table_pendientes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/table-pendientes/table-pendientes.component */ "./src/app/components/table-pendientes/table-pendientes.component.ts");





function PendientesComponent_app_table_pendientes_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-table-pendientes", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r0.dataSource.Mpreventivo)("titulo", "mantenimiento preventivo");
} }
function PendientesComponent_app_table_pendientes_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-table-pendientes", 1);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r1.dataSource.Mcorrectivo)("titulo", "mantenimiento correctivo");
} }
class PendientesComponent {
    constructor(_mantenimientoS) {
        this._mantenimientoS = _mantenimientoS;
    }
    ngOnInit() {
        this.dataSource = this._mantenimientoS.ObtenerMantenimientos();
    }
}
PendientesComponent.ɵfac = function PendientesComponent_Factory(t) { return new (t || PendientesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mantenimientos_service__WEBPACK_IMPORTED_MODULE_1__["MantenimientosService"])); };
PendientesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PendientesComponent, selectors: [["app-pendientes"]], decls: 2, vars: 2, consts: [[3, "dataSource", "titulo", 4, "ngIf"], [3, "dataSource", "titulo"]], template: function PendientesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PendientesComponent_app_table_pendientes_0_Template, 1, 2, "app-table-pendientes", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PendientesComponent_app_table_pendientes_1_Template, 1, 2, "app-table-pendientes", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.Mpreventivo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.Mcorrectivo != undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_table_pendientes_table_pendientes_component__WEBPACK_IMPORTED_MODULE_3__["TablePendientesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlbmRpZW50ZXMvcGVuZGllbnRlcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PendientesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pendientes',
                templateUrl: './pendientes.component.html',
                styleUrls: ['./pendientes.component.css']
            }]
    }], function () { return [{ type: _services_mantenimientos_service__WEBPACK_IMPORTED_MODULE_1__["MantenimientosService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/pendientes/pendientes.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/pendientes/pendientes.module.ts ***!
  \*******************************************************/
/*! exports provided: PendientesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendientesModule", function() { return PendientesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pendientes_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pendientes-routing.module */ "./src/app/pages/pendientes/pendientes-routing.module.ts");
/* harmony import */ var _pendientes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pendientes.component */ "./src/app/pages/pendientes/pendientes.component.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");






class PendientesModule {
}
PendientesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PendientesModule });
PendientesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PendientesModule_Factory(t) { return new (t || PendientesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _pendientes_routing_module__WEBPACK_IMPORTED_MODULE_2__["PendientesRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PendientesModule, { declarations: [_pendientes_component__WEBPACK_IMPORTED_MODULE_3__["PendientesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _pendientes_routing_module__WEBPACK_IMPORTED_MODULE_2__["PendientesRoutingModule"],
        src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PendientesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_pendientes_component__WEBPACK_IMPORTED_MODULE_3__["PendientesComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _pendientes_routing_module__WEBPACK_IMPORTED_MODULE_2__["PendientesRoutingModule"],
                    src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-pendientes-pendientes-module.js.map