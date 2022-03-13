import { ContaBancaria } from './ContaBancaria'
import { ContaNormal } from './ContaNormal'
import { ContaEspecial } from './ContaEspecial'
import { agencia } from './Agencia'
import prompt from 'prompt-sync'

let conta: ContaBancaria

let pessoas = [
    new ContaEspecial('joao', 1000, 2000),
    new ContaNormal('Pedro', 2000),
]

let teclado = prompt()
let number = +teclado('Escolha a conta:')

conta = pessoas[number - 1]


let opcao = 0;


/*let conta1: ContaBancaria = new ContaNormal('João', 1000)
let conta2: ContaBancaria = new ContaEspecial('Maria', 1000, 1000)
// let conta3 = new ContaBancaria('Pedro', 1000)

console.log(conta1)
console.log(conta2.saque(500))
// console.log(conta3.saldo)*/





while(opcao != 5){

    
    console.log('+===========+ Conta +=============+');
    console.log('|1. Dados da conta:                    |');
    console.log('|2. Valor Disponivel:                  |');
    console.log('|3. Limite   :                         |');
    console.log('|4. Saque:                             |');
    console.log('|5. Sair:                              |');
    console.log('+======================================+');

 

opcao = +teclado("Escolha uma opção: ")

   switch(opcao){
     
        case 1:
            console.log(conta);
          
                           
                            break;

                    
                        case 2:
                            console.log(conta.valorDisponível());
                           

                         
                            break;

                            
                           

                        case 3:
                            
                                   console.log(conta);

                                    
                                     break;
         
                                 
                                 

                         case 4:
                             console.log(conta.saque(500));
                    
                     break;

                            
                                    
                                        
                                    
                                
                            
                        
                    
                }
            
            }           
         
   
        


 


