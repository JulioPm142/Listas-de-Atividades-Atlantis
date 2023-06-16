import Processo from "../abstracoes/processo";
import MenuTipoAcomodacaoCliente from "../menus/menuTipoAcomodacao";
import CadastroAcomodacaoTitular from "./cadastroAcomodacaoCliente";

export default class TipoAcomodacaoCliente extends Processo {
    constructor(){
        super()
        this.menu = new MenuTipoAcomodacaoCliente()
    }
    
    processar(): void {
        this.processo.processar()
    }
}