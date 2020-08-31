class NegociacaoController{

    constructor(){
        let selectElement = document.querySelector.bind(document)
        this._dadosNegocio = {            
            qtd: selectElement("#quantidade"),
            data: selectElement("#data"),
            valor: selectElement("#valor")
        }
        Object.freeze(this);
    }

    stringToDate(data){
        var result;
        let dado = data.value; 
        let date = dado.split('-');

        result = {
            ano: parseInt(date[0]),
            mes: parseInt(date[1]) - 1 ,
            dia: parseInt(date[2])

        }

        return result;
    }

    adiciona(event){
        event.preventDefault()

        let negociacao = new Negociacao(
            this.stringToDate(this._dadosNegocio.data),
            this._dadosNegocio.qtd.value,
            this._dadosNegocio.valor.value
        );

        console.log(negociacao);

    }
}