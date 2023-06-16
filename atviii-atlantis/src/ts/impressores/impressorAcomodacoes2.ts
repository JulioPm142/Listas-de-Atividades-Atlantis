import Impressor from "../interfaces/impressor";
import Acomodacao from "../modelos/acomodacao";


export default class ImpressorTelefone implements Impressor {
    private acomodacao: Acomodacao
    constructor(acomodacao: Acomodacao) {
        this.acomodacao = acomodacao
    }
    imprimir(): string {
        let impressao = ''
            + `| Nome: ${this.acomodacao.NomeAcomadacao}\n`
            + `| Garagem: ${this.acomodacao.Garagem}\n`

        return impressao
    }
}