const usuarios = [];
const prompt = require("prompt-sync")();
let ultimoId = 1;

const validarNome = () => {
    while(true){
        const nome = prompt("Digite o seu nome: ").trim();
        if(nome != ""){
            return nome
        } else{
            console.log("Nome inválido.");
        }
    }
}

const validarEmail = () => {
    while(true){
        const email = prompt("Digte o seu email: ").trim();
        let validacao = true;
        usuarios.forEach((usuario) => {
            if(usuario.email == email){
                validacao = false;
            }
        })
        if(!validacao || email == "" || !email.includes("@")){
            console.log("Email inválido.");
        } else{
            return email;
        }
    }
}

const telefones = () => {
    const telefones = [];
    while(true){
        const telefone = prompt("Digite o número de telefone: ").trim();
        if(telefone == ""){
            console.log("Telefone inválido.");
        } else{
            telefones.push(telefone);
            const resp = prompt("Deseja adicionar mais telefones para esse usuário?[s/n]").trim().toLowerCase();
            if(resp == "n" || resp == "nao" || resp == "não" && telefones.length > 0){
                return telefones;
            } 
        }
    }
}

const cadastrar = () => {
    const usuario = {};
    usuario.id = ultimoId;
    ultimoId++;
    usuario.nome = validarNome();
    usuario.email = validarEmail();
    usuario.telefones = telefones();
}

module.exports = {
    cadastrar
}