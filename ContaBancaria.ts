import { agencia } from "./Agencia";


export abstract class ContaBancaria {
    constructor(protected correntista: String, protected saldo: number) {}

    public ContaBancaria(correntista: String, saldo: number) {}
    public abstract valorDisponível(): void
    public abstract saque(quantidade: number): void
}
