const Functions = {
    importServer: function(xhr){

        return new Promise( (resolve, reject) => {
            xhr.open('GET', 'negociacoes/semana');
    
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        resolve(JSON.parse(xhr.responseText).map(obj => {
                            return new Negociacao(DateHelpers.stringToDate(obj.data), obj.quantidade, obj.valor)
                        }));
                    }else{
                        console.log("Erro na obtencao das negociacoes no servidor");
                        reject("Nao foi possivel obter as negociacoes");
                    }
                }
            }
    
            xhr.send();
        })

    },

    importServerAnterior: function(xhr){
        
        return new Promise( (resolve, reject) => {
            xhr.open('GET', 'negociacoes/anterior');

            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        resolve(JSON.parse(xhr.responseText).map(obj => {
                            return new Negociacao(DateHelpers.stringToDate(obj.data), obj.quantidade, obj.valor)
                        }));
                    }else{
                        console.log("Erro na obtencao das negociacoes no servidor");
                        reject("Nao foi possivel obter as negociacoes");
                    }
                }
            }

            xhr.send();
        }
    },

    importServerRetrasada: function(xhr){
        
        return new Promise( (resolve, reject) => {
            xhr.open('GET', 'negociacoes/retrasada');
    
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        resolve(JSON.parse(xhr.responseText).map(obj => {
                            return new Negociacao(DateHelpers.stringToDate(obj.data), obj.quantidade, obj.valor)
                        }));
                    }else{
                        console.log("Erro na obtencao das negociacoes no servidor");
                        reject("Nao foi possivel obter as negociacoes");
                    }
                }
            }
            xhr.send();
        })

    }

}


export default Functions;