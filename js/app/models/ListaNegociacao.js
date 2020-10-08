class ListaNegociacao{

    constructor(refFunction, instanceFunction){
        this._negociacoes = [];
        this._functionUpdate = refFunction; //Atributo que referencia a funcao recebida como argumento no construtor
        this._instance = instanceFunction; //Atributo que armazena a Instancia do contexto que sera utilizado pela funcao
    }

    add(item){
        this._negociacoes.push(item);
        Reflect.apply(this._functionUpdate, this._instance, [this]);
    }

    get negociacoes(){
        return [].concat(this._negociacoes);
    }

    flushList(){
        this._negociacoes = [];
        Reflect.apply(this._functionUpdate, this._instance, [this]);
    }

}