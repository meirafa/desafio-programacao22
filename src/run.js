const drawStairs = require('./questions/drawStairs');
const checkStrongPassword = require('./questions/checkStrongPassword');
const checkCountAnagrams = require('./questions/checkCountAnagrams');

//-------------------------------------EXECUTAR FUNÇÃO NO IDE----------------------------------------------
//Se preferir invocar a função sem utilizar o terminal
//só comentar o código que obtem a entrada de usuario a partir da linha 20

//drawStairs(6);
//checkStrongPassword('aA1~l#');
//checkStrongPassword('aA1~l');
//checkStrongPassword("0")
//checkCountAnagrams("ifailuhkqq");
//checkCountAnagrams("o");
//checkCountAnagrams("ovo");
//checkCountAnagrams("rafa");


//----------------------------------ENTRADA DE USUARIO TERMINAL--------------------------------------------
// Código para obter a entrada de usuario no node.js

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite um número: ', num => {
    drawStairs(num);
    readline.question('Digite uma senha: ', pass => {
        checkStrongPassword(pass);
        readline.question('Digite uma palavra: ', word => {
            checkCountAnagrams(word);
            //console.log("Press the key 'CTRL+D' to closing the console");
            readline.close();
        });
    });
});