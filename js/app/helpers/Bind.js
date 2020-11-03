class Bind{
    
    constructor(model, view, ...props){
        
        this.model = model;
        this.props = props;
    
        let proxy = proxyCreate(view);
        view.update;
        
        return proxy;
    }
    
    
    static proxyCreate(view){
        try{
            ProxyFactory.create(this.model, this.props, (model) => view.update(model));
        }
        catch(error){
            console.log("error ao criar a instancia")
            console.log(error.message);
            return 1;
        }
    }

}