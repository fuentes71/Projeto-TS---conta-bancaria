import { ContaBancaria } from './ContaBancaria'

export class ContaEspecial extends ContaBancaria {
    constructor(correntista: String, saldo: number, private _limite: number) {
        super(correntista, saldo)
    }

    public set limite(limite: number) {
        this._limite = limite
    }

    public ContaEspecial(
        _correntista: string,
        _saldo: number,
        _limite: number
    ) {
        return this.correntista, this.saldo, this.limite
    }

    

    public valorDisponível(): number {
        return this.saldo
    }

    public saque(quantidade: number): void {}
}
