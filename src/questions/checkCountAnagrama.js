/*# Questão 03
Duas palavras podem ser consideradas anagramas de si mesmas se as letras de uma palavra podem ser realocada 
para formar a outra palavra. Dada uma string qualquer, desenvolva um algoritmo que encontre o número de 
pares de substrings que são anagramas.*/

module.exports = function checkCountAnagrama(palavra) {

    let arraySubstring = [];
    const tamanhoString = palavra.length;
    const numeroRegex = (/[0-9]/).test(palavra);

    if (typeof palavra == "number" || numeroRegex) {
        return console.log("Não é permitido número!");
    }

    //gerar todas substrings do parametro:
    for (let i = 0; i <= tamanhoString; i++) {
        for (let j = i; j < tamanhoString; j++) {

            let substrings = palavra.slice(i, j + 1);
            //cortar a string

            let key = substrings.split("").sort().join("");
            //cortar as substrings pra virar um array pra conseguir ordenar e juntar novamente,
            // criando uma chave pro objeto.
            arraySubstring[key] = arraySubstring[key] || [];
            arraySubstring[key].push(substrings);
        }
    }

    //Iterar sobre os valores do objeto:
    let resultado = [];
    for (keys in arraySubstring) {
        //considerando apenas objetos com mais de um valor:
        if (arraySubstring[keys].length > 1) {
            resultado.push(arraySubstring[keys]);
        }
    }

    //total do anagrama:
    let totalAnagramaNumero = resultado.length;
    let totalAnagramaLetra = `[${resultado.join("] [")}]`;
    let mensagem = `Total de ${totalAnagramaNumero} anagramas. Que são: ${totalAnagramaLetra}`;

    (totalAnagramaNumero == 0) ? console.log("Não há anagramas!") : console.log(mensagem);
};