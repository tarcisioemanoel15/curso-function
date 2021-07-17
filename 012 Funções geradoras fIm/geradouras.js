function* geradora1() {
    
    //codigo qualquer
    yield 'valor 1';
    //codigo qualquer
    yield 'valor 2';
    //codigo qualquer
    yield 'valor 3';
    
}

const g1 = geradora1();

console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);

// função geradoura [função preguisosa]
//trocou oretrun pelo yield
// se colocarmos tres yield
// e fazermos tres chamadas
// faz o retorno dando uma pequena pausa
//EX abaixo



function* geradora2() {
    
    //codigo qualquer
    yield 'valor A1';
    //codigo qualquer
    yield 'valor A2';
    //codigo qualquer
    yield 'valor A3';
    
}

const g2 = geradora2();


// interando no valor

for(let valor of g2){
    console.log(valor);
}

