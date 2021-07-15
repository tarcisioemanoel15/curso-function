function criaCalculadora (){
    // posso criar aque tb
    //
    return {
        display: document.querySelector('.display'),
        btnclear: document.querySelector('.btn-cleaR'),
        
        
        inicia(){
            this.cliquebotoes();
            this.precionaenter();
        },

        precionaenter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.realizaconta();
                }
            });
        },
        
        cleardisplay(){
            this.display.value = '';
        },
        
        apagarum(){
            this.display.value = this.display.value.slice(0, -1); 
        },

        realizaconta(){
            let conta = this.display.value;

            try {
                conta = eval(conta);
                
                if(!conta){
                    alert("connta INValida ou é [0]")
                    return;
                }  
            
                this.display.value = String(conta);  

            }catch(e){
                alert("connta INValida");
                return;
            }
        },
        
        //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX           

        cliquebotoes() {
            document.addEventListener('click',  function(e) {
                const el = e.target;
                //Para pegar todos os numeros e juntar com o valor
                if(el.classList.contains('btn-num')) {
                    this.btnparadisplay(el.innerText);
                }

                //Para appagar (C) clear
                if(el.classList.contains('btn-cleaR')){
                    this.cleardisplay();
                }
                //Appagar de um em um
                if(el.classList.contains('btn-del')){
                    this.apagarum();

                }
                if(el.classList.contains('btn-eq')){
                    this.realizaconta();
                }

            }.bind(this));
        },

        btnparadisplay(valor){
            this.display.value+=valor;
        }, 
    };
}
const calculadora = criaCalculadora();
calculadora.inicia();
