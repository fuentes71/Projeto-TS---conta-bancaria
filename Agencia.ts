import { ContaBancaria } from './ContaBancaria';
//import { ContaEspecial } from './ContaEspecial';
//let banco: ContaBancaria = new ContaBancaria('nome', 111, 222)
let contasBancarias: ContaBancaria[] = [];
export class agencia {
    constructor(
        protected _codigo: number,
        
    ) {}

    public adicionaContaBancaria(conta: ContaBancaria): void {
        contasBancarias.push(conta)
    }
    public excluirContaBancaria(conta: ContaBancaria): void {
       const posicao = contasBancarias.indexOf(conta)
       contasBancarias.splice(posicao,1)
        
    }

    public listarContas() {
        for (let i = 0; i < contasBancarias.length; i++) {
            console.log(contasBancarias[i])
        } //: list <Conta Bancaria>
    }
}