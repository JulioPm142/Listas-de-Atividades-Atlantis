import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";
import ImpressorDocumentos from "./impressorDocumentos";
import ImpressorEndereco from "./impressorEndereco";
import ImpressorTelefone from "./impressorTelefone";

export default class ImpressaorCliente implements Impressor {
    private cliente: Cliente
    private impressor!: Impressor

    constructor(cliente: Cliente) {
        this.cliente = cliente

    }
    imprimir(): string {
        let impressao = `****************************\n`
            + `| Nome: ${this.cliente.Nome}\n`
            + `| Nome social: ${this.cliente.NomeSocial}\n`
            + `| Data de nascimento: ${this.cliente.DataNascimento.toLocaleDateString()}\n`
            + `| Data de cadastro: ${this.cliente.DataCadastro.toLocaleDateString()}`
            + `| Dependentes: ${this.cliente.Dependentes}`

        this.impressor = new ImpressorEndereco(this.cliente.Endereco)
        impressao = impressao + `\n${this.impressor.imprimir()}`

        impressao = impressao +('\n ============== Telefones ==============')
        this.cliente.Telefones.forEach(telefone => {
            this.impressor = new ImpressorTelefone(telefone)
            impressao = impressao + `\n${this.impressor.imprimir()}`
        });

        impressao = impressao +('\n ============== Dependentes ==============')
        this.cliente.Dependentes.forEach(dependente => {
            impressao = impressao +('\n Nome: ' +dependente.Nome+' Data cadastro: ' + dependente.DataCadastro + ' Documentos ' + dependente.Documentos + '\n')
        });
        impressao = impressao +('\n ==============-=========-==============')

        this.impressor = new ImpressorDocumentos(this.cliente.Documentos)
        impressao = impressao + `\n${this.impressor.imprimir()}`

        impressao = impressao + `\n****************************`
        return impressao
    }

}