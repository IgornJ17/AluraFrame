class NegociacaoController{

    constructor(){
        let selectElement = document.querySelector.bind(document)
        this._dadosNegocio = {            
            qtd: selectElement("#quantidade"),
            data: selectElement("#data"),
            valor: selectElement("#valor")
        }
        this.listNegoc = new ListaNegociacao();
        Object.freeze(this);
    }

    adiciona(event){
        event.preventDefault()

        let dataTratada = DataHelpers.stringToDate(this._dadosNegocio.data);

        let negociacao = this._makeNegociacao(dataTratada);
        this.listNegoc.add(negociacao);
        this._cleanForm();

        console.log(this.listNegoc.negociacoes);
    }

    _cleanForm(){
        this._dadosNegocio.qtd.value = 1;
        this._dadosNegocio.data.value = '';
        this._dadosNegocio.valor.value = 0.0;

        this._dadosNegocio.data.focus();

    }

    _makeNegociacao(date){
        return new Negociacao(
            date,
            this._dadosNegocio.qtd.value,
            this._dadosNegocio.valor.value);
    }
}