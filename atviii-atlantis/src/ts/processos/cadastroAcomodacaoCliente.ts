import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";
import MenuTipoAcomodacao from "../menus/menuTipoAcomodacao";
import Acomodacao from "../modelos/acomodacao";
import Armazem from "../dominio/armazem";
import MenuCadastroAcomodacao from "../menus/menuCadastroAcomodacao";


export default class cadastroAcomodacaoCliente extends Processo {
        private cliente: Cliente
        private acomodacoes:Acomodacao[]
        constructor(cliente: Cliente) {
            super()
            this.cliente = cliente
            this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
            this.menu = new MenuCadastroAcomodacao()
        }

    processar(): void {
        console.log('Escolha uma acomodação: ')
        this.menu.mostrar()
        
        let escolha = this.entrada.receberNumero('Eschole 1: ')

        switch (escolha) {
            case 1:
                var acomodacao = new Acomodacao(this.acomodacoes[0].NomeAcomadacao,this.acomodacoes[0].CamaSolteiro,
                this.acomodacoes[0].CamaCasal,this.acomodacoes[0].Suite,this.acomodacoes[0].Climatizacao,this.acomodacoes[0].Garagem)
                this.cliente.setAcomodacao(acomodacao)
                break
            case 2:
                var acomodacao = new Acomodacao(this.acomodacoes[1].NomeAcomadacao,this.acomodacoes[1].CamaSolteiro,
                this.acomodacoes[1].CamaCasal,this.acomodacoes[1].Suite,this.acomodacoes[1].Climatizacao,this.acomodacoes[1].Garagem)
                this.cliente.setAcomodacao(acomodacao)
                break
            
            case 3:
                var acomodacao = new Acomodacao(this.acomodacoes[2].NomeAcomadacao,this.acomodacoes[2].CamaSolteiro,
                this.acomodacoes[2].CamaCasal,this.acomodacoes[2].Suite,this.acomodacoes[2].Climatizacao,this.acomodacoes[2].Garagem)
                this.cliente.setAcomodacao(acomodacao)
                break
            case 4:
                var acomodacao = new Acomodacao(this.acomodacoes[3].NomeAcomadacao,this.acomodacoes[3].CamaSolteiro,
                this.acomodacoes[3].CamaCasal,this.acomodacoes[3].Suite,this.acomodacoes[3].Climatizacao,this.acomodacoes[3].Garagem)
                this.cliente.setAcomodacao(acomodacao)
                break
            case 5:
                var acomodacao = new Acomodacao(this.acomodacoes[4].NomeAcomadacao,this.acomodacoes[4].CamaSolteiro,
                this.acomodacoes[4].CamaCasal,this.acomodacoes[4].Suite,this.acomodacoes[4].Climatizacao,this.acomodacoes[4].Garagem)
                this.cliente.setAcomodacao(acomodacao)
                break
                
            case 6:
                var acomodacao = new Acomodacao(this.acomodacoes[5].NomeAcomadacao,this.acomodacoes[5].CamaSolteiro,
                this.acomodacoes[5].CamaCasal,this.acomodacoes[5].Suite,this.acomodacoes[5].Climatizacao,this.acomodacoes[5].Garagem)
                this.cliente.setAcomodacao(acomodacao)
                break
                             
            }

    }
}