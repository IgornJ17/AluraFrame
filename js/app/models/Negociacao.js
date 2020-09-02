

class Negociacao {
    constructor(date, qtd, valor){
        this._date = new Date(date.ano, date.mes, date.dia);
        this._qtd = qtd;
        this._valor = valor;
        this._volume = this.qtd * this.valor;
        Object.freeze(this);
    }
     
    get volume(){
        return this._volume;
    }

    get data(){
        return this._date;
    }

    get qtd(){
        return this._qtd;
    }

    get valor(){
        return this._valor;
    }
}