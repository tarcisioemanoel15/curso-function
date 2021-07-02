//return
//Retorna um valor
//Termina a função

// O que digitarmos no console do naegador fara a soma
function soma(a, b){
    return a + b;
}

//Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


/*
// Esta função so mudda a cor de fundo com um click
document.addEventListener('click', function(){
    document.body.style.backgroundColor = 'red';
});

*/

//Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

function criaPessoa(nome, sobrenome){
    return {nome, sobrenome};
    
}

// OBS sempre que for fazer os testes usar o console

const p1 = criaPessoa("Tar", "Emano");
const p2 = {
    nome: 'Tarcisio',
    sobrenome: 'Emanoel'
}


console.log(p1);
console.log( typeof p2);
// typeof pra dizer o que é: objs, estring, numeros 
// encima p1 e p2 são os dois objetos,


//Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


function falaFrase(comeso){
    function falaresto(resto){
        return comeso + ' ' + resto;
    }
    return falaresto;
}

const olaMundo = falaFrase('ola');
console.log(olaMundo("MUNDO!!"));

/*

È a mesma coisa que 
const fala = falaFrase("ola");
const resto = fala("MUNDO!!");
*/
