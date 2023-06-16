import Menu from "../interfaces/menu";

export default class MenuPrincipal implements Menu {
    mostrar(): void {
        console.log(`****************************`)
        console.log(`| Por favor, selecione uma opção...`)
        console.log(`----------------------`)
        console.log(`| Opções para cliente:`)
        console.log(`----------------------`)
        console.log(`| 1 - Solteiro Simples`)
        console.log(`| 2 - Solteiro Mais`)
        console.log(`| 3 - Casal Simples`)
        console.log(`| 4 - Familia Simples`)
        console.log(`| 5 - Familia Mais`)
        console.log(`| 6 - Familia Super`)
        console.log(`----------------------`)
        console.log(`****************************`)
        console.log(`| 7 - Descrição`)
        console.log(`----------------------`)
    }
}