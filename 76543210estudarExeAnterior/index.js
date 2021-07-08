function maiormenorparinpa() {
    const btn = document.querySelector('#btn');
    //função aerea                         
    btn.addEventListener('click', () => {
        resultado();
    });

    //função que calcula maior
    function maiormenor(num1, num2) {
        if (num1 > num2) {
            return num1;
        } else if (num1 < num2) {
            return num2;
        } else if (num1 === num2) {
            return num1;
        } else {
            return 'Não valido';
        }
    }



    //closures
    //verificar se é par ou inpar
    function parInpa(MaiorMenor) {
        return MaiorMenor % 2 === 0 ? 'par' : 'inpar';
    }


    function resultado() {
        const res = document.querySelector('#res');
        const numa = document.querySelector('#num1');
        const numb = document.querySelector('#num2');

        const num1 = Number(numa.value);
        const num2 = Number(numb.value);


        const MaiorMenor = maiormenor(num1, num2);
        const ParInpa = parInpa(MaiorMenor);


        if (num1 === num2) {
            res.innerHTML = ` ${MaiorMenor} e é ${ParInpa}`;
        } else {
            res.innerHTML = `O Numero maior é ${MaiorMenor} e é ${ParInpa}`;
        }
    }

}
maiormenorparinpa();


    const senha = '12345a';
    const inp = '12345';

    function btn(){
    const res = document.querySelector('#ent');
    const senha = document.querySelector('#senha').value;
    const senhaD = '12345a';
    
    if(senha === senhaD){
        res.innerHTML=('Bem vindo');
    }else{
        res.innerHTML=('Tente novamente');
    }
}

