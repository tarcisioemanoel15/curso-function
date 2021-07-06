    const btn = document.querySelector('#btn');
    const res = document.querySelector('#res');
    

    
                            //função aerea                         
    btn.addEventListener('click', () => {
        const numa = document.querySelector('#num1');
        const numb = document.querySelector('#num2');
        
        const num1 = Number(numa.value);
        const num2 = Number(numb.value);
        
        
        
        const num = calculando(num1, num2);        
        calculando(num1, num2);
        parInpa(num);

        
    });
    
    
    //função que calcula maior e menor
    function calculando(num1, num2){
        if(num1 > num2){
            return res.innerHTML= (num1); 
        }else if(num1 < num2){
            return res.innerHTML= (num2);
        }else if(num1 === num2){
            return res.innerHTML= ("sao iguais");
        }
    }
    

    //closures
    //verificar se é par ou inpar
    function parInpa(num){
       //return num%2===0 ? res.innerHTML = "par" : res.innerHTML= "inpar";   
        if (num%2 === 0){
            return res.innerHTML= ("PAR");
        }else{
            return res.innerHTML= ("INPAR");
        }
    }

    
    
    function criaP(){
        const p = document.createElement('p');
        return p;
    }



/*
já diz se é par ou inpa falta juntar os dois separando
 numa funcao de resultado

 */





