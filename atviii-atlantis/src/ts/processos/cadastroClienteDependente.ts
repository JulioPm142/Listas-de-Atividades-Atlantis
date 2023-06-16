import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastroDocumentosCliente";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular";
import cadastroTelefoneCliente from "./cadastroTelefoneCliente";


export default class CadastroClienteDependente extends Processo {
    private clientes: Cliente[]
    private dependentes:Cliente[]=[]
    private impressor!: Impressor
    TitularNome !: string
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.dependentes=[]
    }
    processar(): void {
        console.log('Iniciando o cadastro de um novo cliente... ')
        this.clientes.forEach(cliente => {
            console.log(cliente.Nome,cliente.Documentos)
        });

        this.TitularNome = this.entrada.receberTexto('Para qual cliente titular deseja atribuir um dependente?')

        let numeroDependentes = this.entrada.receberNumero('Quantos dependentes adicionar? ')
        for(let i = 0; i < numeroDependentes; i++) {
            let nome = this.entrada.receberTexto('Qual o nome do novo cliente?')
            let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente?')
            let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')
            let cliente = new Cliente(nome, nomeSocial, dataNascimento)

            this.processo = new CadastroEnderecoTitular(cliente)
            this.processo.processar()

            this.processo = new CadastrarDocumentosCliente(cliente)
            this.processo.processar()

            this.processo = new cadastroTelefoneCliente(cliente)
            this.processo.processar()

            this.dependentes.push(cliente)
        }
        this.clientes.forEach(cliente => {
            if (cliente.Nome==this.TitularNome){
                for (let dep of this.dependentes) {
                    cliente.setDependente(dep);
                  }
            }
        });

        console.log('Finalizando o cadastro do cliente...')
    }
}