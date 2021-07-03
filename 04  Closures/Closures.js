// Global

function retornafuncao(nome){


    return function(){


        
        return nome;
        
        
    };

}

const fun = retornafuncao("Tarcisio");
const func = retornafuncao("Emanoel");

console.dir(fun);
console.dir(func);

console.log(fun(), func());




//Closures é a abilibade de acesar seu escopo léxico 'por fora';