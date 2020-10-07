class NegociacoesView extends View {
    
    constructor(element){
        super(element);
    }

    template() {
        
        return `       
                <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>QUANTIDADE</th>
                            <th>VALOR</th>
                            <th>VOLUME</th>
                        </tr>
                    </thead>
                    
                    <tbody data-form>
                        ${
                            model.negociacoes.map( (neg) => {
                                return `
                                    <tr>
                                        <td>${DataHelpers.convertToDateFormat(neg.data)}</td>
                                        <td>${neg.qtd}</td>
                                        <td>${neg.valor}</td>
                                        <td>${neg.volume}</td>
                                    </tr>
                                `
                            }).join('')}
                    </tbody>
                    
                    <tfoot>
                    </tfoot>
                </table>
            `;

    }
}