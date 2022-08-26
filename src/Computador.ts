
import HardwareBasico from "./HardwareBasico";
import MemoriaUSB from "./MemoriaUSB";
import SistemaOperacional from "./SistemaOperacional";

export default class Computador {


    public nomeDocomputador1: string = "Positivo";
    public nomeDocomputador2: string = "Acer";
    public nomeDocomputador3: string = "Vaio";

    static readonly precoDocomputador1: number = 1300;
    static readonly precoDocomputador2: number = 1800;
    static readonly precoDocomputador3: number = 2800;




    mostrarPCConfigs() {
        console.log(
            "Configurações do Pc 1: " + "\n" +
            " Marca: " + this.nomeDocomputador1 + " \n" +
            " Hardware: " + HardwareBasico.hardwarebasico1 + " \n" +
            " Sistema Operacional: " + SistemaOperacional.sistemaOperacional1

        )

        console.log(
            "\n" + "Configurações do Pc 2: " + "\n" +
            " Marca: " + this.nomeDocomputador2 + " \n" +
            " Hardware: " + HardwareBasico.hardwarebasico2 + " \n" +
            " Sistema Operacional: " + SistemaOperacional.sistemaOperacional2
        )
        console.log(
            "\n" + "Configurações do Pc 3: " + "\n" +
            " Marca: " + this.nomeDocomputador3 + " \n" +
            " Hardware: " + HardwareBasico.hardwarebasico3 + " \n" +
            " Sistema Operacional: " + SistemaOperacional.sistemaOperacional3
        )
    }

    addMemorialUSB() {
        console.log(
            "\n Memória USB que acompanha o PC da Positivo: " + "\n" +
            MemoriaUSB.penDrive + MemoriaUSB.capacidadePenDrivePromo1 + " Gb" + "\n" +

            "\n Memória USB que acompanha o PC da Acer: " + "\n" +
            MemoriaUSB.penDrive + MemoriaUSB.capacidadePenDrivePromo2 + " Gb" + "\n" +

            "\n Memória USB que acompanha o PC da Vaio: " + "\n" +

            MemoriaUSB.hdExterno  + MemoriaUSB.capacidadeExterno + " Tb"
        );

    }


}