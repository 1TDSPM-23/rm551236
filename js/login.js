// //CRIAR OBJETOS
// let usuario1 = {
//     nomeCompleto : "Jorge de Castro",
//     nomeUsuario : "jorginho",
//     senhaUsuario : "40028922",
//     ccuUsuario : "sc"
// }

// let usuario2 = {
//     nomeCompleto : "Fabricio Souza",
//     nomeUsuario : "Fabr",
//     senhaUsuario : "mlkneutri",
//     ccuUsuario : "rj"
// }

// usuario1 = usuario2;

// console.log("NOME DO USUÁRIO : " + usuario1.nomeCompleto);

// usuario1.nomeCompleto = "Lukas";
// console.log("NOME DO USUÁRIO : " + usuario1.nomeCompleto);

// usuario1["cpf"] = "12345678900";
// console.log("CPF DO USUÁRIO : " + usuario1.cpf);


//Lista de Usuários
//poderia ser feito dessa forma:
// let listaDeUsuarios = [];
// listaDeUsuarios.push(usuario1);
// listaDeUsuarios.push(usuario2);
let listaDeUsuarios = [
    {
    nomeCompleto : "Jorge de Castro",
    nomeUsuario : "jorginho",
    senhaUsuario : "40028922",
    ccuUsuario : "sc"
    },
    {
        nomeCompleto : "Fabricio Souza",
        nomeUsuario : "Fabr",
        senhaUsuario : "mlkneutri",
        ccuUsuario : "rj"
    },
    {
        nomeCompleto : "Edulado Biolante",
        nomeUsuario : "dudu",
        senhaUsuario : "123456",
        ccuUsuario : "sp"
    },
    {
    nomeCompleto : "Danid Silva",
    nomeUsuario : "danid",
    senhaUsuario : "123456",
    ccuUsuario : "rj"
    },
    {
        nomeCompleto : "Enio Casper",
        nomeUsuario : "enio",
        senhaUsuario : "123456",
        ccuUsuario : "sc"
    }
];

const msgStatus = document.querySelector("#msg");
const formLogin = document.querySelector("form[name='frm01']")

const botaoSubmit = document.querySelector("#btnSubmit");
botaoSubmit.addEventListener("click", ()=>{
    
    const inputUser = document.querySelector("#idNm");
    const inputPass = document.querySelector("#idPass");
    const selCentroCusto = document.querySelector("#idCusto");

    //OBJETO USUÁRIO-LOGADO
    const usuarioLogado = {
        nomeUsuarioLogado : inputUser.value,
        senhaUsuarioLogado : inputPass.value,
        ccuUsuarioLogado : selCentroCusto.value
    }

    //OBJETO USUÁRIO-VALIDADO
    let usuarioValidado = {};

    if(usuarioLogado.nomeUsuarioLogado != "" && usuarioLogado.senhaUsuarioLogado != "" && usuarioLogado.ccuUsuarioLogado != "0"){

       for (let x = 0; x < listaDeUsuarios.length; x++) {
        
           if(usuarioLogado.nomeUsuarioLogado == listaDeUsuarios[x].nomeUsuario && usuarioLogado.senhaUsuarioLogado == listaDeUsuarios[x].senhaUsuario && usuarioLogado.ccuUsuarioLogado == listaDeUsuarios[x].ccuUsuario){
            usuarioValidado = listaDeUsuarios[x];
    
           }
       
       }

    }else{
        console.log("EXISTE ALGUM CAMPO SEM PREENCHIMENTO!")
    }


    if(usuarioValidado != null){
        msgStatus.setAttribute("style","color:#00ff00");
        msgStatus.innerHTML = `<span><strong>O usuário ${usuarioValidado.nomeCompleto} fez o login com SUCESSO!!</strong></span>`;
    }
    else{
        msgStatus.setAttribute("style","color:#ff0000");
        msgStatus.innerHTML = `<span><strong>Nome de usuário ou senha inválidos...</strong></span>`;
    }


});

function validaFormularioCompleto() {

    const inputUser = document.querySelector("#idNm");
    const inputPass = document.querySelector("#idPass");
    const selCentroCusto = document.querySelector("#idCusto");

    //OBJETO USUÁRIO-LOGADO
    const usuarioLogado = {
        nomeUsuarioLogado : inputUser.value,
        senhaUsuarioLogado : inputPass.value,
        ccuUsuarioLogado : selCentroCusto.value
    }

    //OBJETO USUÁRIO-VALIDADO
    let usuarioValidado = {};

    if(usuarioLogado.nomeUsuarioLogado != "" && usuarioLogado.senhaUsuarioLogado != "" && usuarioLogado.ccuUsuarioLogado != "0"){

       for (let x = 0; x < listaDeUsuarios.length; x++) {
        
           if(usuarioLogado.nomeUsuarioLogado == listaDeUsuarios[x].nomeUsuario && usuarioLogado.senhaUsuarioLogado == listaDeUsuarios[x].senhaUsuario && usuarioLogado.ccuUsuarioLogado == listaDeUsuarios[x].ccuUsuario){
            usuarioValidado = listaDeUsuarios[x];
                
                msgStatus.setAttribute("style","color:#00ff00");
                msgStatus.innerHTML = `<span><strong>O usuário ${usuarioValidado.nomeCompleto} fez o login com SUCESSO!!</strong></span>`;
           }
        //    }else{
        //     msgStatus.setAttribute("style","color:#ff0000");
        //     msgStatus.innerHTML = `<span><strong>Nome de usuário ou senha inválidos...</strong></span>`;
        //    }
       }

    }else{
        console.log("EXISTE ALGUM CAMPO SEM PREENCHIMENTO!")
    }
}

// const form1 = document.querySelector("form[name='frm01']");
// // console.log(form1);

// form1.addEventListener("submit", ()=>{
    const inputUser = document.querySelector("#idNm");
    const inputPass = document.querySelector("#idPass");
    const selectCusto = document.querySelector("#idCusto");

    const labelUser = document.querySelector("label[for='idNm']");
    const labelPass = document.querySelector("label[for='idPass']");

    inputUser.addEventListener("keyup" ,()=>{

        if(inputUser.value.length < 4){
            labelUser.setAttribute("style","color:#ff0000;");
        }else{
            labelUser.setAttribute("style","color:#00ff00;");
        }
    });

    inputPass.addEventListener("keyup" ,()=>{

        if(inputPass.value.length < 5){
            labelPass.setAttribute("style","color:#ff0000;");
        }else{
            labelPass.setAttribute("style","color:#00ff00;");
        }
    });