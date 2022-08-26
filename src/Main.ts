import Computador from "./Computador";
import prompt from "prompt-sync";
import { Cliente } from "./Cliente";

let teclado = prompt();
let option: number = 4;

const nomeCliente = teclado("Insira seu nome: ");
const cpfCliente = +teclado("Insira seu cpf: ");

const clienteBuild = Cliente.build(nomeCliente, cpfCliente)
let computador: Computador = new Computador();




    computador.mostrarPCConfigs();
    computador.addMemorialUSB();


let quantidadeCompraPositivo = 0;
let quantidadeCompraAcer = 0;
let quantidadeCompraVaio = 0;


while (option != 0) {
    console.log('+=========Promoções=========+');
    console.log('|1.Promoção 1               |');
    console.log('|2.Promoção 2               |');
    console.log('|3.Promoção 3               |');
    console.log('|0.Sair                     |');
    console.log('+===========================+');

    option = +teclado('Escolha uma ação: ')

    switch (option) {
        case 1:
            console.log("Computador da marca Positivo adicionada ao carrinho!")
            quantidadeCompraPositivo++;
            break;
        case 2:
            console.log("Computador da marca Acer adicionada ao carrinho!")
            quantidadeCompraAcer++;
            break;

        case 3:
            console.log("Computador da marca Vaio adicionada ao carrinho!")
            quantidadeCompraVaio++;
            break;

        default:
            break;
    }
}
const valorTotalComprasCliente = Cliente.calculaTotalCompra(quantidadeCompraPositivo, quantidadeCompraAcer, quantidadeCompraVaio)


console.log(
    "Obrigado por sua compra, " +
    clienteBuild.nome + " " + clienteBuild.cpf +
    " seu pedido foi de: "
);

if (quantidadeCompraPositivo != 0) {
    console.log(quantidadeCompraPositivo + "computador(es) da marca Positivo");
} else if (quantidadeCompraAcer != 0) {
    console.log(quantidadeCompraAcer + "computador(es) da marca Acer");
} else if (quantidadeCompraVaio != 0) {
    console.log(quantidadeCompraVaio + "computador(es) da marca Vaio");
}

console.log(
    "e o total foi de: R$ " +
    valorTotalComprasCliente
);




