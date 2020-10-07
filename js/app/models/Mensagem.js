class Mensagem{

    constructor(dado=''){
        this._texto = dado;
    }

    get texto(){
        return this._texto;
    }

    set texto(dado){
        this._texto = dado;
    }

}