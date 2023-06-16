import Processo from "../abstracoes/processo";
import MenuTipoUpdateCliente from "../menus/menuTipoUpdateCliente";
import ListagemTitulares from "./listagemTitulares";
import UpdateCliente from "./updateCliente";

export default class TipoUpdateClientes extends Processo {
    constructor(){
        super()
        this.menu = new MenuTipoUpdateCliente()
    }
    
    processar(): void {
        this.processo = new UpdateCliente()
        this.processo.processar()
    }
}