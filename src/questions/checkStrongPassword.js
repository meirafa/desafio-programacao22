/*# Questão 02
Débora se inscreveu em uma rede social para se manter em contato com seus amigos.
A página de cadastro exigia o preenchimento dos campos de nome e senha, porém a senha precisa ser forte.
O site considera uma senha forte quando ela satisfaz os seguintes critérios:
Possui no mínimo 6 caracteres.
Contém no mínimo 1 digito.
Contém no mínimo 1 letra em minúsculo.
Contém no mínimo 1 letra em maiúsculo.
Contém no mínimo 1 caractere especial. Os caracteres especiais são: !@#$%^&*()-+
Débora digitou uma string aleatória no campo de senha, porém ela não tem certeza se é uma
senha forte. Para ajudar Débora, construa um algoritmo que informe qual é o número mínimo de
caracteres que devem ser adicionados para uma string qualquer ser considerada segura.*/

module.exports = function checkStrongPassword(senha) {
    // \d ou [0-9] = digitos, \w = alfanumérico incluindo underline, \s = espaço em branco
    //[a-z] = letras minúsculas, [A-Z] = letras maiúsculas
    //simboloRegex = não inclue alfanumerico nem com acentos, nem espaços, nem tio e ponto
    const simboloRegex = /[^\wÀ-ú\s ~ .]/;
    const numeroRegex = /\d/;
    const minusculoRegex = /[a-zà-ú]/;
    const maiusculoRegex = /[A-ZÀ-Ú]/;
    const frasesError = ["Precisa conter 6 caracteres", "Precisa conter no mínimo 1 digito", "Deve conter no minimo 1 letra minuscula", "Deve conter no minimo 1 letra maiuscula", "Precisa de um desses caracteres especiais: !@#$%^&*()-+"];
    let contadorCriterio = 5;
    const erroAtual = [];

    //Possui no mínimo 6 caracteres.
    (senha.length < 6) ? erroAtual.push(frasesError[0]) : --contadorCriterio;
    //Contém no mínimo 1 digito.
    (senha.search(numeroRegex) == -1) ? erroAtual.push(frasesError[1]) : --contadorCriterio;
    //Contém no mínimo 1 letra em minúsculo.
    (senha.search(minusculoRegex) == -1) ? erroAtual.push(frasesError[2]) : --contadorCriterio;
    //Contém no mínimo 1 letra em maiúsculo.
    (senha.search(maiusculoRegex) == -1) ? erroAtual.push(frasesError[3]) : --contadorCriterio;
    //Contém no mínimo 1 caractere especial.
    (senha.search(simboloRegex) == -1) ? erroAtual.push(frasesError[4]) : --contadorCriterio;

    let mensagemErro = erroAtual.join("\n")

    let mensagem = `Faltam ${contadorCriterio} critérios para senha segura.\n${mensagemErro}`

    if (contadorCriterio > 0) {
        console.log(mensagem);
    } else {
        console.log("Senha segura!");
    }
}