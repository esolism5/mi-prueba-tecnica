"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnoSchema = exports.Alumno = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var Alumno = function () {
    var _classDecorators = [(0, mongoose_1.Schema)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = mongoose_2.Document;
    var _nombre_decorators;
    var _nombre_initializers = [];
    var _nombre_extraInitializers = [];
    var _fechaNacimiento_decorators;
    var _fechaNacimiento_initializers = [];
    var _fechaNacimiento_extraInitializers = [];
    var _nombrePadre_decorators;
    var _nombrePadre_initializers = [];
    var _nombrePadre_extraInitializers = [];
    var _nombreMadre_decorators;
    var _nombreMadre_initializers = [];
    var _nombreMadre_extraInitializers = [];
    var _grado_decorators;
    var _grado_initializers = [];
    var _grado_extraInitializers = [];
    var _seccion_decorators;
    var _seccion_initializers = [];
    var _seccion_extraInitializers = [];
    var _fechaIngreso_decorators;
    var _fechaIngreso_initializers = [];
    var _fechaIngreso_extraInitializers = [];
    var Alumno = _classThis = /** @class */ (function (_super) {
        __extends(Alumno_1, _super);
        function Alumno_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.nombre = __runInitializers(_this, _nombre_initializers, void 0);
            _this.fechaNacimiento = (__runInitializers(_this, _nombre_extraInitializers), __runInitializers(_this, _fechaNacimiento_initializers, void 0));
            _this.nombrePadre = (__runInitializers(_this, _fechaNacimiento_extraInitializers), __runInitializers(_this, _nombrePadre_initializers, void 0));
            _this.nombreMadre = (__runInitializers(_this, _nombrePadre_extraInitializers), __runInitializers(_this, _nombreMadre_initializers, void 0));
            _this.grado = (__runInitializers(_this, _nombreMadre_extraInitializers), __runInitializers(_this, _grado_initializers, void 0));
            _this.seccion = (__runInitializers(_this, _grado_extraInitializers), __runInitializers(_this, _seccion_initializers, void 0));
            _this.fechaIngreso = (__runInitializers(_this, _seccion_extraInitializers), __runInitializers(_this, _fechaIngreso_initializers, void 0));
            __runInitializers(_this, _fechaIngreso_extraInitializers);
            return _this;
        }
        return Alumno_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Alumno");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _nombre_decorators = [(0, mongoose_1.Prop)()];
        _fechaNacimiento_decorators = [(0, mongoose_1.Prop)()];
        _nombrePadre_decorators = [(0, mongoose_1.Prop)()];
        _nombreMadre_decorators = [(0, mongoose_1.Prop)()];
        _grado_decorators = [(0, mongoose_1.Prop)()];
        _seccion_decorators = [(0, mongoose_1.Prop)()];
        _fechaIngreso_decorators = [(0, mongoose_1.Prop)()];
        __esDecorate(null, null, _nombre_decorators, { kind: "field", name: "nombre", static: false, private: false, access: { has: function (obj) { return "nombre" in obj; }, get: function (obj) { return obj.nombre; }, set: function (obj, value) { obj.nombre = value; } }, metadata: _metadata }, _nombre_initializers, _nombre_extraInitializers);
        __esDecorate(null, null, _fechaNacimiento_decorators, { kind: "field", name: "fechaNacimiento", static: false, private: false, access: { has: function (obj) { return "fechaNacimiento" in obj; }, get: function (obj) { return obj.fechaNacimiento; }, set: function (obj, value) { obj.fechaNacimiento = value; } }, metadata: _metadata }, _fechaNacimiento_initializers, _fechaNacimiento_extraInitializers);
        __esDecorate(null, null, _nombrePadre_decorators, { kind: "field", name: "nombrePadre", static: false, private: false, access: { has: function (obj) { return "nombrePadre" in obj; }, get: function (obj) { return obj.nombrePadre; }, set: function (obj, value) { obj.nombrePadre = value; } }, metadata: _metadata }, _nombrePadre_initializers, _nombrePadre_extraInitializers);
        __esDecorate(null, null, _nombreMadre_decorators, { kind: "field", name: "nombreMadre", static: false, private: false, access: { has: function (obj) { return "nombreMadre" in obj; }, get: function (obj) { return obj.nombreMadre; }, set: function (obj, value) { obj.nombreMadre = value; } }, metadata: _metadata }, _nombreMadre_initializers, _nombreMadre_extraInitializers);
        __esDecorate(null, null, _grado_decorators, { kind: "field", name: "grado", static: false, private: false, access: { has: function (obj) { return "grado" in obj; }, get: function (obj) { return obj.grado; }, set: function (obj, value) { obj.grado = value; } }, metadata: _metadata }, _grado_initializers, _grado_extraInitializers);
        __esDecorate(null, null, _seccion_decorators, { kind: "field", name: "seccion", static: false, private: false, access: { has: function (obj) { return "seccion" in obj; }, get: function (obj) { return obj.seccion; }, set: function (obj, value) { obj.seccion = value; } }, metadata: _metadata }, _seccion_initializers, _seccion_extraInitializers);
        __esDecorate(null, null, _fechaIngreso_decorators, { kind: "field", name: "fechaIngreso", static: false, private: false, access: { has: function (obj) { return "fechaIngreso" in obj; }, get: function (obj) { return obj.fechaIngreso; }, set: function (obj, value) { obj.fechaIngreso = value; } }, metadata: _metadata }, _fechaIngreso_initializers, _fechaIngreso_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Alumno = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Alumno = _classThis;
}();
exports.Alumno = Alumno;
exports.AlumnoSchema = mongoose_1.SchemaFactory.createForClass(Alumno);
