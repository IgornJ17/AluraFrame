class DataHelpers{

    cosntructor(){
        throw new Error("DataHelper is an class static, don`t try create a instance") 
    }

    static stringToDate(data){
        var result;
        let dado = data.value,  date = dado.split('-');

        result = {
            ano: parseInt(date[0]),
            mes: parseInt(date[1]) - 1 ,
            dia: parseInt(date[2])

        }

        return result;
    }

    static convertToDateFormat(date){
        return ` ${date.dia}/${(date.mes + 1)}/${date.ano} `
    }
}