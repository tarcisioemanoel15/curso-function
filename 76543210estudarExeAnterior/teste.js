
function Callbacksoma(){
    // Callback //

    function somacalback(a, b, funcaoo){
        return funcaoo(a + b);
    } 

    var multiplica = function(total){
        return total * 2;
    };

    console.log(somacalback(5, 4, multiplica));
                
                                     //função completa e no retorno coloco o que quiser   
    console.log(somacalback(10, 8, function(total){
        return total - 8 ;
    }));
}
//   Callbacksoma();




//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


//      função auto invocado
/* (function(a, s, a){ ****})(); */
 
(function(a = 7, b = 7, c = 7, d = 7){  

function somaMrdia(a, b, c, d){
    return a + b + c + d;
}
const nota = somaMrdia(a, b, c, d);

function calculaMedia(nota){
    const media = nota / 4 ; 
    if(media >= 7){
        return (`Sua media é ${media} voce foi Aprovado`)
    }else{
        return (`Sua media é ${media} voçe foi Reprovado`)
    }
}

console.log(calculaMedia(nota));


})();



//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX



// Funcao fabrica sinples

function fabrica(){
    return {
        nome: "Tarcisio",
        sobrenome: "emanuel",
        idade: 30,
        peso: 60,
        altura: 1.60,
        
        imc () {
            const indice = this.peso / (this.altura **2);
            return `Seu indice de massa corporal é : ${indice.toFixed(2)}`;
        },
        
        fala: function(){
            return `${this.nome} diz OOOOOOOOOIIIIIIII`;
        }
        
    }
}

const p1 = fabrica();

// console.log(p1.imc());
// console.log(p1.fala());



//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/////////Testes funcoes de fabrica e getrer e seter  ///////


function tab(a, b){
    return {
        get soma(){
            const som = a + b;
            return som;
        },
        
        sub() {
        const y = a - b;
        return y;
        },
        
         mul: function(){
        const multiplica = a * b;
        return multiplica;
    },
    
        divi: function(){
        const dividir = a / b;
        return dividir;
        }
    }
}
        

/**/

const tabuada = tab(5, 6);

//console.log(tabuada.soma);
//console.log(tabuada.sub());
//console.log(tabuada.mul());

var _v = 0;

var oobj = { 
    get v (){
        return 'value' +  _v;
    },

    set v(value){
        return  _v = value + 2;
    }
}
    


//console.log(oobj.v = 7);
console.log(oobj._v = 7);


