//não esquecer de colocau a estrelinha perto da função
function* geradora2(){
    let i = 0;
    
    while(true){
        yield i;
        i++;
    }

}

const g2 = geradora2();

console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

// duas jeradoras dividindo as funçoes
function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
   yield* geradora3();

   yield 3;
   yield 4;
   yield 5;
}

const g4 = geradora4();
for(let valor of g4){
    console.log(valor);
}

//quando usa o [next] pega o valor


function* geradora5() {

    yield function(){
        console.log("A1");
    };
    
    yield function(){
        console.log("A2");
    };

    return function(){
        console.log("return");
    };
    
    // este não vai ser ezecutado pois o return esta a cima
    yield function(){
        console.log("A4");
    };
}


const g5 = geradora5();
const f1 = g5.next().value;
const f2 = g5.next().value;
const f3 = g5.next().value;
//const f4 = g5.next().value;
 


f1();
f2();
f3();
//f4();