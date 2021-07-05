// Factor function (funçao fábrica)

function criaPessoa(nome, sobrenome, alturaa, pesoo) {
return {
    nome,
    sobrenome,
    fala: function(assinto){
        //this (se le vis [OBS] o this é quem ta chamando)
        return `${this.nome} esta ${assinto}`
    },
    altura: alturaa,
    peso: pesoo,
    imc(){
        const indice = this.peso / (this.altura * this.altura);
        return indice.toFixed(2);
    }
}; 
}

const p1 = criaPessoa("tarcisio", "Emanoel", 1.80, 80);
const p2 = criaPessoa("Andressa", "Bispo", 1.50, 50);
console.log(p1.imc());
console.log(p1.fala('ESTUDANDO JS'));
console.log(p2.fala('ESTUDANDO JS'));

// funcao fabrica finalizada
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX





