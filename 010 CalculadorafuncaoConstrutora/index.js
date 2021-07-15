

function Calculadora(){
    this.display = document.querySelector('.display');

    this.inicia = () =>{
         this.capturacliques();
         this.apenter();
        };
        
        this.apenter = ()=>{
            document.addEventListener('keypress', e => {
            
                if(e.keyCode !== 13) return;
                this.realizaconta();
            });


            
        }

    this.capturacliques = () =>{

        document.addEventListener('click', e => {
            const el = e.target;
            if(el.classList.contains('btn-num')) {
                this.addNumDisplay(el);
                this.display.focus();
            }
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-del')) this.del();
            if(el.classList.contains('btn-igual')) this.realizaconta();
            
        });
 
    };

    this.realizaconta = () => {

     try{
         const conta = eval(this.display.value);
         if(!conta) return;
         this.display.value = conta;

        }catch(e){
            alert("Não valido")
        }   
        
    };

        
    this.clear = ()=> this.display.value = '';
    
    this.addNumDisplay = el => this.display.value += el.innerText;
    
    
    this.del = () => this.display.value = this.display.value.slice(0, -1);
}


const Calculador = new Calculadora();
Calculador.inicia();
    
    
