
// recurciva uma funcao que se cama de volta
// lembrando que tem um limite
//obs funcao normal

function recursiva(max){
    
    console.log(max);
    if(max >= 10)return;
        max++;
    // ta aque
    recursiva(max);

}

recursiva(0);