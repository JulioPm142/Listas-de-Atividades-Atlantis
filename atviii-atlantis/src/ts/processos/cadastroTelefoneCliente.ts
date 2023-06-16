import Processo from "../abstracoes/processo";
import MenuTipoDocumento from "../menus/menuTipoDocumento";
import Cliente from "../modelos/cliente";
import CadastroRg from "./cadastroRg";
import Telefone from "../modelos/telefone";


export default class cadastroTelefoneCliente extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this.execucao = true
    }

    processar(): void {
        console.log('Inciando o cadastro de Telefones')
        let nTelefones = this.entrada.receberNumero('Quantos telefones adicionar? ')
        for (let i = 0; i < nTelefones; i++) {
            let ddd = this.entrada.receberTexto('Qual o seu Ddd? ')
            let numero = this.entrada.receberTexto('Qual o seu Número? ')
            let telefone = new Telefone (ddd,numero)
            this.cliente.Telefones.push(telefone)            
        }

    }
}