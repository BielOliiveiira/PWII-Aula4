var Viagem = /** @class */ (function () {
    function Viagem(tempoGasto, velocidadeMedia, rendimentoVeiculo) {
        this.tempoGasto = tempoGasto;
        this.velocidadeMedia = velocidadeMedia;
        this.rendimentoVeiculo = rendimentoVeiculo;
    }
    Viagem.prototype.distancia = function () {
        return this.tempoGasto * this.rendimentoVeiculo;
    };
    Viagem.prototype.consumo = function () {
        return this.distancia() / this.rendimentoVeiculo;
    };
    return Viagem;
}());
