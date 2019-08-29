"use strict";
exports.__esModule = true;
var Diaria = /** @class */ (function () {
    function Diaria(qtdeHoras, valorHora, horaAdicional) {
        this.qtdeHoras = qtdeHoras;
        this.valorHora = valorHora;
        this.horaAdicional = horaAdicional;
    }
    Diaria.prototype.total = function () {
        return this.valorHora + this.horaAdicional * (this.qtdeHoras - 1);
    };
    return Diaria;
}());
exports.Diaria = Diaria;
