import Computador from "./Computador";

export class Cliente {
    public nome: string;
    public cpf: number;


    constructor(
        nome?: string,
        cpf?: number
    ) {
        this.nome = nome!;
        this.cpf = cpf!;

    }


    static build(nome: string, cpf: number) {
        return Object.assign(new Cliente(), {
            nome,
            cpf
        })
    }

    static calculaTotalCompra(quantidadeCompraPositivo: number, quantidadeCompraAcer: number, quantidadeCompraVaio: number): number {
        return (Computador.precoDocomputador1 * quantidadeCompraPositivo +
            Computador.precoDocomputador2 * quantidadeCompraAcer +
            Computador.precoDocomputador3 * quantidadeCompraVaio)
    }
}

