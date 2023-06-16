import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";
import MenuTipoUpdateCliente from "../menus/menuTipoUpdateCliente";
import MenuTipoListagemClientesEndereco from "../menus/menuTipoUpdateClienteEndereco";
import { stringify } from "querystring";
import Telefone from "../modelos/telefone";

export default class UpdateCliente extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    private nome!:string
    private opcao2 !: number
    private qualTel !: number
    private menu2
    

    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.menu = new MenuTipoUpdateCliente()
        this.menu2 = new MenuTipoListagemClientesEndereco()
    }
    processar(): void {
        console.log('Iniciando a atualizacao dos clientes')
        this.nome = this.entrada.receberTexto('Qual o Nome do cliente deseja alterar?')
        this.clientes.forEach(cliente => {
            console.log(cliente)
            if (cliente.Nome==this.nome){
                this.menu.mostrar()
                this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
                console.log(this.opcao)
                switch (this.opcao) {
                    case 1:
                        cliente['nome']=this.entrada.receberTexto('Qual o novo Nome do cliente? ')
                        break;

                    case 2:
                        cliente['nomeSocial']=this.entrada.receberTexto('Qual o novo Nome Social do cliente? ')
                        break;

                    case 3:
                        cliente['dataNascimento']=this.entrada.receberData('Qual a nova data de nascimento do cliente?')
                        break;                        
                    
                    case 4:
                        cliente['dataCadastro']=this.entrada.receberData('Qual a nova data de Cadastro?')
                        break;   

                    case 5:
                        cliente.Telefones.forEach(telefone => {
                            console.log(telefone)
                        });
                            this.qualTel = this.entrada.receberNumero('Qual telefone deseja alterar? 1, 2, 3 ... ? ')-1
                            this.opcao2 = this.entrada.receberNumero('O que deseja alterar, 1-Ddd ou 2-Numero: ')
                            switch (this.opcao2){
                                case 1:
                                    cliente.Telefones[this.qualTel].setDdd(this.entrada.receberTexto('Qual o novo Ddd? '))
                                    break;
                                case 2:
                                    cliente.Telefones[this.qualTel].setNumero(this.entrada.receberTexto('Qual o novo Numero? '))
                                    break;                                   
                            }
                        break;

                    case 6:
                        this.menu2.mostrar()
                        this.opcao2 = this.entrada.receberNumero('')

                            switch (this.opcao2){
                                case 1:
                                    cliente['endereco'].setRua(this.entrada.receberTexto('Qual a nova Rua? '))
                                    break;

                                case 2:
                                    cliente['endereco'].setBairro(this.entrada.receberTexto('Qual o novo Bairro? '))
                                    break; 

                                case 3:
                                    cliente['endereco'].setCidade(this.entrada.receberTexto('Qual a nova Cidade? '))
                                    break;

                                case 4:
                                    cliente['endereco'].setEstado(this.entrada.receberTexto('Qual o novo Estado? '))
                                    break; 

                                case 5:
                                    cliente['endereco'].setPais(this.entrada.receberTexto('Qual o novo Pais? '))
                                    break; 

                                case 6:
                                    cliente['endereco'].setCodigoPostal(this.entrada.receberTexto('Qual o novo Codigo Postal? '))
                                    break;                                                                                                                                                                               
                            }
                    break;                
                                            
                }
            }

        })
    }
}