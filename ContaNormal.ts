import { ContaBancaria } from './ContaBancaria'

export class ContaNormal extends ContaBancaria {
    constructor(correntista: String, saldo: number) {
        super(correntista, saldo)
    }

    public ContaNormal(correntista: String, saldo: number) {
        return this.correntista, this.saldo
    }
    public valorDisponível(): number {
        return this.saldo
    }
    public saque(quantidade: number): void {}
}
