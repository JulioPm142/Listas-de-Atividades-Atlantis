import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";
import MenuTipoUpdateCliente from "../menus/menuTipoUpdateCliente";
import MenuTipoListagemClientesEndereco from "../menus/menuTipoUpdateClienteEndereco";
import { stringify } from "querystring";
import Telefone from "../modelos/telefone";
import Acomodacao from "../modelos/acomodacao";
import MenuAcomodacoes from "../menus/menuCadastroAcomodacao"

export default class UpdateCliente extends Processo {
    private clientes: Cliente[]
    private acomodacoes:Acomodacao[]
    private impressor!: Impressor
    private nome!:string
    private opcao2 !: number
    private qualTel !: number
    private menu2
    private menu3
    private nomeDep !:string
    

    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
        this.menu = new MenuTipoUpdateCliente()
        this.menu2 = new MenuTipoListagemClientesEndereco()
        this.menu3 = new MenuAcomodacoes

    }
    processar(): void {
        console.log('Iniciando a atualizacao dos clientes')
        this.nome = this.entrada.receberTexto('Qual o Nome do cliente deseja alterar? ')
        this.clientes.forEach(cliente => {
            console.log(cliente)
            if (cliente.Nome==this.nome){
                this.menu.mostrar()
                this.opcao = this.entrada.receberNumero('Qual a opção desejada? ')
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
                    
                    case 7:

                        cliente.Dependentes.forEach(element => {
                            console.log(element.Nome)
                        });

                        this.nomeDep = this.entrada.receberTexto('Qual o nome do dependente que deseja alterar? ')
                        cliente.Dependentes.forEach(element => {
                            if (element['nome']==this.nomeDep){
                                this.menu.mostrar()
                                this.opcao2 = this.entrada.receberNumero('Qual a opção desejada? ')
                                switch (this.opcao) {
                                    case 1:
                                        element['nome']=this.entrada.receberTexto('Qual o novo Nome do cliente? ')
                                        break;
                
                                    case 2:
                                        element['nomeSocial']=this.entrada.receberTexto('Qual o novo Nome Social do cliente? ')
                                        break;
                
                                    case 3:
                                        element['dataNascimento']=this.entrada.receberData('Qual a nova data de nascimento do cliente?')
                                        break;                        
                                    
                                    case 4:
                                        element['dataCadastro']=this.entrada.receberData('Qual a nova data de Cadastro?')
                                        break;

                                    case 5:
                                        element.Telefones.forEach(telefone => {
                                            console.log(telefone)
                                        });
                                            this.qualTel = this.entrada.receberNumero('Qual telefone deseja alterar? 1, 2, 3 ... ? ')-1
                                            this.opcao2 = this.entrada.receberNumero('O que deseja alterar, 1-Ddd ou 2-Numero: ')
                                            switch (this.opcao2){
                                                case 1:
                                                    element.Telefones[this.qualTel].setDdd(this.entrada.receberTexto('Qual o novo Ddd? '))
                                                    break;
                                                case 2:
                                                    element.Telefones[this.qualTel].setNumero(this.entrada.receberTexto('Qual o novo Numero? '))
                                                    break;                                   
                                            }
                                        break;

                                    case 6:
                                        this.menu2.mostrar()
                                        this.opcao2 = this.entrada.receberNumero('')
                
                                            switch (this.opcao2){
                                                case 1:
                                                    element['endereco'].setRua(this.entrada.receberTexto('Qual a nova Rua? '))
                                                    break;
                
                                                case 2:
                                                    element['endereco'].setBairro(this.entrada.receberTexto('Qual o novo Bairro? '))
                                                    break; 
                
                                                case 3:
                                                    element['endereco'].setCidade(this.entrada.receberTexto('Qual a nova Cidade? '))
                                                    break;
                
                                                case 4:
                                                    element['endereco'].setEstado(this.entrada.receberTexto('Qual o novo Estado? '))
                                                    break; 
                
                                                case 5:
                                                    element['endereco'].setPais(this.entrada.receberTexto('Qual o novo Pais? '))
                                                    break; 
                
                                                case 6:
                                                    element['endereco'].setCodigoPostal(this.entrada.receberTexto('Qual o novo Codigo Postal? '))
                                                    break;                                                                                                                                                                               
                                            }
                                        break;
                                case 7:
                                    console.log('Um dependente não tem dependentes >:(')
                                    break;

                            }}
                        });
                    case 8:
                        
                        this.menu3.mostrar()
                        let escolha=this.entrada.receberNumero('')
                        switch (escolha) {
                            case 1:
                                var acomodacao = new Acomodacao(this.acomodacoes[0].NomeAcomadacao,this.acomodacoes[0].CamaSolteiro,
                                this.acomodacoes[0].CamaCasal,this.acomodacoes[0].Suite,this.acomodacoes[0].Climatizacao,this.acomodacoes[0].Garagem)
                                cliente.setAcomodacao(this.acomodacoes[0])
                                break
                            case 2:
                                var acomodacao = new Acomodacao(this.acomodacoes[1].NomeAcomadacao,this.acomodacoes[1].CamaSolteiro,
                                this.acomodacoes[1].CamaCasal,this.acomodacoes[1].Suite,this.acomodacoes[1].Climatizacao,this.acomodacoes[1].Garagem)
                                cliente.setAcomodacao(this.acomodacoes[1])
                                break
                            
                            case 3:
                                var acomodacao = new Acomodacao(this.acomodacoes[2].NomeAcomadacao,this.acomodacoes[2].CamaSolteiro,
                                this.acomodacoes[2].CamaCasal,this.acomodacoes[2].Suite,this.acomodacoes[2].Climatizacao,this.acomodacoes[2].Garagem)
                                cliente.setAcomodacao(this.acomodacoes[2])
                                break
                            case 4:
                                var acomodacao = new Acomodacao(this.acomodacoes[3].NomeAcomadacao,this.acomodacoes[3].CamaSolteiro,
                                this.acomodacoes[3].CamaCasal,this.acomodacoes[3].Suite,this.acomodacoes[3].Climatizacao,this.acomodacoes[3].Garagem)
                                cliente.setAcomodacao(this.acomodacoes[3])
                                break
                            case 5:
                                var acomodacao = new Acomodacao(this.acomodacoes[4].NomeAcomadacao,this.acomodacoes[4].CamaSolteiro,
                                this.acomodacoes[4].CamaCasal,this.acomodacoes[4].Suite,this.acomodacoes[4].Climatizacao,this.acomodacoes[4].Garagem)
                                cliente.setAcomodacao(this.acomodacoes[4])
                                break
                                
                            case 6:
                                var acomodacao = new Acomodacao(this.acomodacoes[5].NomeAcomadacao,this.acomodacoes[5].CamaSolteiro,
                                this.acomodacoes[5].CamaCasal,this.acomodacoes[5].Suite,this.acomodacoes[5].Climatizacao,this.acomodacoes[5].Garagem)
                                cliente.acomodacao=(acomodacao)
                                break
                                             
                            }
                        
                        break; 
                                            
                }
            }

        })
    }
}