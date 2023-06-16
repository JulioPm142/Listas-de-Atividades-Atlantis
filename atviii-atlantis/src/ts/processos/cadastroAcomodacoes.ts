import Processo from "../abstracoes/processo";
import DiretorCasalSimples from "../diretores/diretorCasalSimples";
import DiretorFamiliaPlus from "../diretores/diretorFamiliaPlus";
import DiretorFamiliaSimples from "../diretores/diretorFamiliaSimples";
import DiretorFamiliaSuper from "../diretores/diretorFamiliaSuper";
import DiretorSolteiroPlus from "../diretores/diretorSolteiroPlus";
import DiretorSolteiroSimples from "../diretores/diretorSolteiroSimples";
import Armazem from "../dominio/armazem";
import Acomodacao from "../modelos/acomodacao";

export default class CadastroAcomodacoes extends Processo {
    private acomodacoes: Acomodacao[]
    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    processar(): void {
        let diretorSolteiro = new DiretorSolteiroSimples()
        this.acomodacoes.push(diretorSolteiro.construir())

        let diretorSolteiroPlus = new DiretorSolteiroPlus()
        this.acomodacoes.push(diretorSolteiroPlus.construir())

        let diretorCasalSimples = new DiretorCasalSimples()
        this.acomodacoes.push(diretorCasalSimples.construir())

        let diretorFamiliaSimples = new DiretorFamiliaSimples()
        this.acomodacoes.push(diretorFamiliaSimples.construir())    

        let diretorFamiliaPlus = new DiretorFamiliaPlus()
        this.acomodacoes.push(diretorFamiliaPlus.construir())

        let diretorFamiliaSuper = new DiretorFamiliaSuper()
        this.acomodacoes.push(diretorFamiliaSuper.construir())
    }
}