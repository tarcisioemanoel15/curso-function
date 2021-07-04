//IIFE -> Imediately function exprecion
//funcao auto envocada

(function(){
    //OBS posso digitar qualquer coisa aque dentro 
    //que não toca o escopo global
    //sem precisar fazer a chamada
})();

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  
(function(peso, altura, idade){

    const sobrenome = "Emanuel";

        function crianome(nome){
            return nome + " " + sobrenome;
        }


      function falanome(){
            console.log(crianome('Tarcisio'));
        }

        falanome()

        
        console.log(peso, altura, idade);
        
})(1.80, 30, 80);


