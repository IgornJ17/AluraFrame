class ListaNegociacao{

    constructor(){
        this._negociacoes = [];
    }

    add(item){
        this._negociacoes.push(item);
    }

    get negociacoes(){
        return [].concat(this._negociacoes);
    }

}