
// argumentos que sustenta todos argumentos enviados só funciona para este
// tipo de funcoes
function funcao0(a, b, c){
console.log(arguments[5], c)
}
funcao0('valor', 1, 2, 3, 4, 5 );
/*
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx
*/

function funcao1(a, b, c, d, e){
    total = 0;
for (let argumento of arguments){
    total += argumento;
}
console.log(total, arguments[4], e );
}
funcao1(1, 2, 3, 4, 5 );
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

function funcao2(a, b){
    console.log(a + b);
} 
funcao2(1, 2, 3);

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

function funcao3({a, b, c}){
    console.log(a,  b, c);
} 
let obj = ({a:'Tarcisio', b:'Emanoel', c:'silva'});
funcao3(obj);
//funcao3({a:'Tarcisio', b:'Emanoel', c:'silva'});

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// desistruturacão de alwai

function funcao4([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3)
}

funcao4(["T1", "T2", 12]);

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//fazendo conta
function funcao5(operador, acumlador, ...numeros){ // OBS ... rest opereiton tem que ser o ultimo o resto

    for (numero of numeros){  // OBS in interage nos indece of no valor

        
        if (operador === '+') acumlador += numero;
        if (operador === '-') acumlador -= numero;
        if (operador === '*') acumlador *= numero;
        if (operador === '/') acumlador /= numero;
        
    }
    console.log(acumlador);
}
funcao5("/", 1, 2, 3 );

/*

No lugar da function coloca
const funcao5 = function(operador, acumlador, ...numeros){};;;;;; lembrar de colocar ; ponto e virgula



Mudando para eron function 
const funcao5 = (operador, acumlador, ...numeros) => {};;;;;; lembrar de colocar ; ponto e virgula

*/

