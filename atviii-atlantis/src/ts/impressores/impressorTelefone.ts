import Impressor from "../interfaces/impressor";
import Telefone from "../modelos/telefone";

export default class ImpressorTelefone implements Impressor {
    private telefone: Telefone
    constructor(telefone: Telefone) {
        this.telefone = telefone
    }
    imprimir(): string {
        let impressao = ''
            + `| Ddd: ${this.telefone.Ddd}\n`
            + `| numero: ${this.telefone.Numero}\n`

        return impressao
    }
}