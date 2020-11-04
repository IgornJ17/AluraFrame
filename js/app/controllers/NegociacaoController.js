import { Functions as Reqfunctions }  from "../helpers/modules_aux/functions-ajax";

class NegociacaoController{

    constructor(){
        let selectElement = document.querySelector.bind(document)
        this._dadosNegocio = {            
            qtd: selectElement("#quantidade"),
            data: selectElement("#data"),
            valor: selectElement("#valor")
        };

        this._listNegoc = new Bind(new ListaNegociacao(), 
        new NegociacoesView(selectElement("#ViewNegociacao")), 
        'add', 'flushList');

        this._mensagem = new Bind(new Mensagem(), 
        new MensagemView(selectElement("data-mensagemView")),
         'texto');
        
        Object.freeze(this);
    }

    adiciona(event){
        event.preventDefault()

        let dataTratada = DataHelpers.stringToDate(this._dadosNegocio.data);

        let negociacao = this._makeNegociacao(dataTratada);
        this._listNegoc.add(negociacao);
        this._cleanForm();
        this._mensagem.texto = "Negociacao adicionado com sucesso";
    }

    importNegoci(){
        let xhr = new XMLHttpRequest(), negociacoesImport = Reqfunctions.requestServer(xhr);
        negociacoesImport.map(obj => {
            return new Negociacao(DateHelpers.stringToDate(obj.data), obj.quantidade, obj.valor)
        }).forEach(negociacao => {
            this._listNegoc.add(negociacao);
        });
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

    clearNegocicoes(){
        this._listNegoc.flushList();
        this._mensagem.texto = "Negociacoes apagadas com sucesso";
    }
}