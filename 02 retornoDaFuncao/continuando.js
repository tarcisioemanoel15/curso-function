function criaMultipplicador(multiplicador){

    //Multiplicador

    return function(n){
        return n * multiplicador;
    };
}

const duplica = criaMultipplicador(2);
const triplica = criaMultipplicador(3);
const quadriplica = criaMultipplicador(4);

console.log(duplica(2));
console.log(triplica(3));
console.log(quadriplica(4));