
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



function MediaDeAlunos(){
    //Media de alunos sinples
const a = 7;
const b = 7;
const c = 7;
const d = 7;

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

}
MediaDeAlunos();


