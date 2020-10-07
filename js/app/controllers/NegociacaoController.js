class NegociacaoController{

    constructor(){
        let selectElement = document.querySelector.bind(document)
        this._dadosNegocio = {            
            qtd: selectElement("#quantidade"),
            data: selectElement("#data"),
            valor: selectElement("#valor")
        }
        this._listNegoc = new ListaNegociacao();
        this._listViewNegociacao = new NegociacoesView(selectElement('#ViewNegociacao'));

        this.ListaNegociacao.update();
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView(selectElement("data-mensagemView"))
        this._mensagemView.update(this._mensagem);
        Object.freeze(this);
    }

    adiciona(event){
        event.preventDefault()

        let dataTratada = DataHelpers.stringToDate(this._dadosNegocio.data);

        let negociacao = this._makeNegociacao(dataTratada);
        this._listNegoc.add(negociacao);
        this._cleanForm();
        this._mensagem.texto = "Negociacao adicionado com sucesso";
        this.ListaNegociacao.update(this.ListaNegociacao);
        this._mensagemView.update(this._mensagem);
        console.log(this._listNegoc.negociacoes);
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