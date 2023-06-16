import Menu from "../interfaces/menu";

export default class  MenuTipoListagemClientes implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| O que deseja atualizar? `)
        console.log(`----------------------`)
        console.log(`| 1 - Nome`)
        console.log(`| 2 - Nome Social`)
        console.log(`| 3 - Data Nascimento`)
        console.log(`| 4 - Data de Cadastro`)
        console.log(`| 5 - Telefone`)
        console.log(`| 6 - Endereco`)
        console.log(`----------------------`)
    }
}