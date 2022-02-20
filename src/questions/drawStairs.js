/*# Questão 01
Escreva um algoritmo que mostre na tela uma escada de tamanho n utilizando o caractere * e espaços.
A base e altura da escada devem ser iguais ao valor de n. A última linha não deve conter nenhum espaço.*/

module.exports = function drawStairs(tamanho) {
    //&nbsp &lowast
    const espaco = " ";
    const asterisco = "*";
    let contador = tamanho;
    let array = [];
    let arrayfinal = [];
    const numeroRegex = (/[0-9]/).test(tamanho);

    if (typeof tamanho == "number" || numeroRegex) {
        while (contador > 1) {
            for (let i = 1; i <= contador; i++) {
                //adicionando asterisco
                if (i == contador) {
                    //saber quantos asterisco precisa para adicionar no array
                    const falta = tamanho - array.length;
                    array.push(asterisco.repeat(falta));
                    --contador;
                    //adicionando em outro array que junta todos os espaços e asteriscos
                    arrayfinal.push(array.join(''));
                    //limpando array para 
                    array = []
                } else {
                    array.push(espaco);
                }
            }
        }
        arrayfinal.push(asterisco.repeat(tamanho));
        let stairs = (arrayfinal.join('\n'));
        console.log(stairs);
    } else {
        console.log("Precisa ser um número");
    }
}
