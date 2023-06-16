import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import ImpressaorDependente from "../impressores/impressorDependente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemDependente extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    private nomeTitular !: string
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        console.log('Iniciando a listagem dos clientes dependentes...')
        this.clientes.forEach(cliente => {
            console.log('Titular: '+cliente.Nome)
            this.nomeTitular=this.entrada.receberTexto('Qual o nome do titular? ')
            if (cliente['Nome']==this.nomeTitular){
                cliente.Dependentes.forEach(dependente => {
                    this.impressor = new ImpressaorDependente(dependente)
                    console.log(this.impressor.imprimir())
                });  
            }
        })
    }
}