const prompt = require("prompt-sync")();
const modulo = require ("./modulo.js");

while(opcao != '5'){
    console.log("[1] Adicionar usuário\n[2] Listar usuários");
    console.log("[3] Alterar usuário\n[4] Excluir usuário\n[5] Sair");
    const opcao = prompt("Digite o que deseja fazer: ").trim();
    switch(opcao){
        case '1':
            modulo.cadastrar();
            break;
        case '2':
            modulo.listar();
            break;
        case '3':
            modulo.alterar();
            break;
        case '4':
            modulo.excluir();
            break;
        case '5':
            console.log("Até mais!");
            break;
        default:
            console.log("Opção inválida");        
    }
}