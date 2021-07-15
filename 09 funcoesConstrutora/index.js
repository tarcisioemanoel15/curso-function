//funcao construtora 
//lembrar de iniciar com letra maiuscula
// lembrar que nas funcoes constrtoras tem o NEW 
  function Pessoa(nome, sobrenome){

    // atributos privados
    const ID = 123123;
    const metodos = function(){
        
    }


    //atributos ou metodos publicos
    this.Pessoa = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log("Oi sou o Metodo");
    }
  }
const p1 = new Pessoa('Tarcisio', 'Emanuel');
const p2 = new Pessoa('Andressa', 'Bispo');
console.log(p2.metodo());
