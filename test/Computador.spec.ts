import { Cliente } from "../src/Cliente";


describe(('Cliente testing'), () => {

    const cliente = new Cliente();

    it('should return when only option one is selected', () => {
        const result: Cliente = new Cliente();

        const response = Cliente.calculaTotalCompra();
        expect(response).toStrictEqual(result);

    })
}

)