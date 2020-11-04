const Functions = {
    requestServer: function(xhr){
        xhr.open('GET', 'negociacoes/semana');

        xhr.onreadystatechange = function(){
            let negociacaoResponse;
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    negociacaoResponse = JSON.parse(xhr.responseText);
                    return negociacaoResponse;
                }
                else{
                    console.log("Erro na obtencao das negociacoes no servidor");
                    console.log(xhr.responseText);

                }
            }
        }

        xhr.send();
    }

}


export default Functions;