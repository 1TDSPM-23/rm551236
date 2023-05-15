function validaFormularioCompleto(inputUser, inputPass,selCentroCusto) {
    
    console.log(inputUser);
    console.log(inputPass);
    console.log(selCentroCusto);

    if(inputUser.value != "" && inputPass.value != "" && selCentroCusto.value != "0"){
        return true;
    }else{
        return false;
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

        if(inputUser.value.length < 5){
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