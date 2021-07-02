// Declaração de função (function hosting)
dizoi();
function dizoi(){
    console.log("oiiiiiiiiiiiii")
}


// as funcoes sao objetos de primeira classe
// funcao como dado
const souDado = function() {
    console.log("OI");
}
souDado();


function ezecutafuncao(funcao){
    funcao();
}
ezecutafuncao(souDado);



//arrow function
const arrowfuncao = () => {
    console.log("OI arrow function");
}
arrowfuncao();

// dentro de um objeto
const obj = {
    falar: function(){
        console.log('falando');
    }
};
obj.falar();

//Tarcisio