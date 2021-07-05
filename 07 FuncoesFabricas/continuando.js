// Constructor function (funcão construtora)
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
        ////////    
        //getter
        get imc(){
            const indice = this.peso / (this.altura * this.altura);
            return indice.toFixed(2);
        },
        ////////    
        //getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        /////////
        // setter
        set nomeCompleto(t){
            t = t.split(' ');
            this.nome = t.shift();
            this.sobrenome = t.join(' ');    
                console.log(t); 
        },
    }; 
    }

    const p1 = criaPessoa("tarcisio", "Emanoel", 5.80, 80);
    const p2 = criaPessoa("Andressa", "Bispo", 1.00, 90);
    const p3 = criaPessoa("Tar", "ANd", 2.50, 20);

    p1.nomeCompleto = "Andressa Bispo Silva ";

    console.log(p1.imc);
    console.log(p2.imc);
    console.log(p3.imc);
    console.log(p2.nome, p2.sobrenome);
    console.log(p1.nomeCompleto);
// fingindo não ser uma funcao só acresenta o grt e tira os ()
/*
EX: get nomefuncao(){
    XXXXXXXXX
}
nomefuncao
*/
