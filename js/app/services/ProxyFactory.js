class ProxyFactory {
    
    static create(object, props, action){
        var result = new Proxy(object, {
            get(target, prop, receiver){
                
                if(props.includes(prop) && ProxyFactory._isFunction(target[prop])){
                    return function(){    
                        console.log(`interceptando ${prop}`)
                        let result = Reflect.apply(target[prop], target, arguments); // Reflect utilizado pra mudar o contexto da execucao e executar o metodo no objeto real.
                        action(target); //Action associada ao Update da View. Com essa Action a View so sera atualizada caso as functions do target forem chamadas
                        return result;
                    }
                }

                return Reflect.get(target, prop, receiver) // finaliza a trap do Proxy e retorna o controle da execucao para o real Object
            },

            set(target, prop, value, receiver){
                if(props.includes(prop)){
                    target(prop) = value
                    return action(target);
                }

                return Reflect.set(target, prop, value, receiver);
            }
        })

        return result;
    }

    static _isFunction(func){
        return typeof(func) == typeof(Function);
    }
}