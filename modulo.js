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

const validarIndice = () => {
    while(true){
        let indice = prompt("Digite o índice do usuário que deseja alterar: ").trim();
        usuarios.forEach((usuario) => {
            if(usuario.indice == indice){
                return Number(indice);
            }
        })
        console.log("Índice inválido")
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
    usuarios.push(usuario);
}

const listar = () => {
    if(usuarios.length > 0){
        usuarios.forEach((usuario) => {
            console.log("=========================");
            console.log("Id: " + usuario.id);
            console.log("Nome: " + usuario.nome);
            console.log("Email: " + usuario.email);
            console.log("Telefones:");
            for(let c=0; c<usuario.telefones.length; c++){
                console.log("• " + usuario.telefones[c]);
            }
            console.log("=========================");
        })
    } else{
        console.log("Não foi cadastrado nenhum usuário.");
    }
        
}

const alterar = () => {
    if(usuarios.length > 0){
        listar();
        const indice = validarIndice();
        usuarios[indice].nome = validarNome();
        usuarios[indice].email = validarEmail();
        usuarios[indice].telefones = telefones();
    } else{
        console.log("Não foi cadastrado nenhum usuário.");
    }
        
}

module.exports = {
    cadastrar,
    listar
}