//    //Declarar uma variável com a palavra reservada var.
//    var nr1 = "10";
//    var nr2 = "5";

//    //Vamos imprimir as variáveis com o objeto console.
//    console.log(nr1);
//    console.log(nr2);

//    //Realizando as operações básicas com estes valores:
//    // + / - / * e /

   
//    //REALIZE A CONCATENAÇÃO COM O TEXTO RESULTADO:
//    //EX: console.log(RESULTADO nr1 + nr2);
   
//    //ADIÇÃO
//    console.log("RESULTADO " + (nr1 + nr2));
//    console.log("RESULTADO : " + (parseInt(nr1) + parseInt(nr2)));
//    console.log(`RESULTADO ADIÇÃO: ${parseInt(nr1) + parseInt(nr2)}`);

//    //SUBTRAÇÃO
//    console.log(`RESULTADO SUBTRAÇÃO: ${parseInt(nr1) - parseInt(nr2)}`);

//    //MULTIPLICAÇÃO
//    console.log(`RESULTADO MULTIPLICAÇÃO: ${parseInt(nr1) * parseInt(nr2)}`);

//    //DIVISÃO
//    console.log(`RESULTADO SUBTRAÇÃO: ${parseInt(nr1) / parseInt(nr2)}`);

//    //OBTENHA O RESTO DA DIVISÃO
//    console.log(`OBTENDO O RESTO DA DIVISÃO: ${parseInt(nr1) % parseInt(nr2)}`);

   //DESCOBRINDO SE UM NÚMERO É PAR OU IMPAR
   //UTILIZANDO OPERADOR TERNÁRIO ( ? ).
//Declarar uma variável com a palavra reservada var.
// var nr1 = "10";
// var nr2 = "5";
// var resultado;

// resultado = !(parseInt(nr1)%parseInt(nr2)) ? "PAR" : "IMPAR";
// console.log(`O NÚMERO É : ${resultado}`);


//REGRAS DO CONST
//1ª Regra = Inicializar na declaração
// const nome3 = "Violante";
//2ª Regra = Não pode ser alterado durante o fluxo do programa.
// nome3 = "Jonathan";
//DIFERENÇA ENTRE VAR/LET/CONST
// var nome1 = "Beatriz";
// let nome2 = "Matheus";

// let nome = "Beatriz";

// if(nome != ""){
//     let nome = "Robson";
// }
// //Qual é o nome que será impresso no log?
// console.log(nome);

//ARRAY e seu métodos
let frutas = ["banana","maçã","morango","carambola","acerola","laranja"];
//Imprimindo um array
console.log(frutas);
console.table(frutas);
console.log(frutas[4]);

//Adicionar um iten ao final do array com o método push(iten);
frutas.push("melão");
console.log(frutas);
//Adicionar um iten no início do array com o método unshift(iten);
frutas.unshift("cajú");
console.log(frutas);
//Remover um iten do final do array com o método pop();
frutas.pop();
console.log(frutas);
//Remover um iten do início do array com o método shift();
frutas.shift();
console.log(frutas);

//Para localizar um itém dentro do array, utilizamos o método indexOf(itenNome);
// let indice = frutas.indexOf("morango");
// console.log(frutas[indice]);

//Para localizar um itém dentro do array, e apagar ele apagar ele utilizamos o método splice(indice do item, quantidade de vezes que o indice será removido).
//Obs: utilize o método indexOf(itenNome) para obter o indice do iten;
let indice = frutas.indexOf("carambola");
console.log("FRUTA Q ESTAVA NO INDICE ANTES DA REMOÇÃO : " + frutas[indice]);
frutas.splice(indice,1);
console.log("FRUTA Q FICOU NO INDICE PÓS REMOÇÃO : " + frutas[indice]);



