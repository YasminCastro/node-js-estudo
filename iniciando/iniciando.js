// node iniciando
console.log("Alguma coisa");
console.log("----------------------------------------------------------");
console.log(global); //Variaveis globais do node
console.log("----------------------------------------------------------");
console.log(__dirname); //diretorio que estou
console.log(__filename); //nomde do arquivo q estou
console.log("----------------------------------------------------------");
console.log(require("path")); //Provides utilities for working with file and directory paths.
//require chama modulos

console.log("------Adicionando modulos nativos do node-----------------");
const path = require("path");
console.log(path.basename(__filename)); //qual a nome base do arquivo que estamos

//"------------------Criando modulos-------------------------");
module.exports = "Enviando dados do módulo";

// console.log("------------------Adicionando meus modulos------------------");
// const MyModule = require("./nomedoarquivo");
// console.log(MyModule);

console.log("-----------------Pegando informações do processo--------------");
console.log(process); //traz informações do modulo do process
console.log(process.argv); //traz uma lista de argumentos que estão rodando no node

console.log("seu nome é", process.argv[2] + " " + process.argv[3]);
//console: node process Yas Castro
