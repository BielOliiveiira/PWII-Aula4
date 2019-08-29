export class Diaria{
    constructor(
        public qtdeHoras:number,
        public valorHora:number,
        public horaAdicional:number){}
    total(){
        return this.valorHora + this.horaAdicional * (this.qtdeHoras -1)
    }
}