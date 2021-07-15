
function calk(){
    
    return {
        display: document.querySelector('.display'),


        inicia(){
            this.iniciabtn();
            this.precionaenter();
        },

        precionaenter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.realicaconta();
                }
            });
        },

        btnparadisplay(valor){
            this.display.value+=valor;
        },
        btnapagatudo(){
            this.display.value = '';
        },
        apagaum(){
            this.display.value = this.display.value.slice(0, -1)
        },
        realicaconta(){

            let conta = this.display.value;

            try{  // aque é aonde esta sendo realizado a conta usando [eval]
                 conta = eval(conta);
                 if(!conta){
                     alert("Conta invalida ou o resultadi é zero");
                    return;
                    }
                    
                    this.display.value = String(conta)

                }catch{
                alert("Conta invalida, só é permitido numeros ");
                    return;
            }
        },

        naoterminado(){
            alert("Não Terminado ;)");
        },

        
        iniciabtn(){
            document.addEventListener('click', e => {
                const el = e.target;
          
                if(el.classList.contains('btn-num')){
                    this.btnparadisplay(el.innerText); 
                }
                if(el.classList.contains('btn-clear')){
                    this.btnapagatudo();
                }                
                if(el.classList.contains('btn-del')){
                    this.apagaum();
                }
                if(el.classList.contains('btn-igual')){
                    this.realicaconta();
                }
                if(el.classList.contains('btn-n')){
                    this.naoterminado();
                }
                
            });

        },
    }
}
const calculadora = calk();
calculadora.inicia();