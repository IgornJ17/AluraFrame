class Bind{
    
    constructor(model, view, ...props){
        let proxy = Bind.proxyCreate(model, props, view);
        view.update;
        
        return proxy;
    }
    
    
    static proxyCreate(model, props, view){
        try{
            ProxyFactory.create(model, props, (model) => view.update(model));
        }
        catch(error){
            console.log("error ao criar a instancia")
            console.log(error.message);
            return 1;
        }
    }

}