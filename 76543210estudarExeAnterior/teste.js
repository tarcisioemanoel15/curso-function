//Callback
/*
function somacalback(a, b, funcaoo){
    return funcaoo(a + b);
} 

var multiplica = function(total){
    return total * 2;
};

console.log(somacalback(5, 4, multiplica));


console.log(somacalback(10, 8, function(total){
    return total - 8 ;
}));
*/ 

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX







function maiormenor(num1, num2){
    if(num1 > num2){
        return num1; 
    }else if(num1 < num2){
        return num2;
    }else if(num1 === num2){
        return num1;
    }else{
        return  'Não é valido so é permitido numeros';
    }
}

const tt = maiormenor(8, 7);
//console.log(tt);

function par(tt){
   
    if(tt%2===0){
        return ("PAR");
    }else{
        return ("INPAR");
    }
}

const juntan = par(tt);

console.log(`O maior numero é ${tt} e é ${juntan}`);

