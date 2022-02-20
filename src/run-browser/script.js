//HTML
window.addEventListener('load', () => {

    const divbotoes = document.querySelector('#botoes');
    const div = document.getElementById('campo-questoes');
    const divresposta = document.getElementById('campo-resposta');
    const h1 = document.querySelector('h1');

    divbotoes.addEventListener('click', criandoQuestao);

    function criandoQuestao(event) {
        div.innerHTML = ``;
        //id da questao
        let id = event.target.getAttribute('id');

        //criando
        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('id', 'input-resposta');
        input.setAttribute('placeholder', 'Responda aqui');
        input.setAttribute('class', 'form-control')
        div.appendChild(input);
        let buttoncampo = document.createElement('button');
        buttoncampo.setAttribute('type', 'submit');
        buttoncampo.setAttribute('class', 'buttonquestion btn btn-info my-2');
        buttoncampo.textContent = "enviar resposta";
        div.appendChild(buttoncampo);

        if (id == '1') {
            buttoncampo.setAttribute('id', '1');
            h1.innerText = "Digite um número:";
        } else if (id == '2') {
            buttoncampo.setAttribute('id', '2');
            h1.textContent = "Digite uma senha:";
        } else if (id == '3') {
            buttoncampo.setAttribute('id', '3');
            h1.textContent = "Digite uma palavra:";
        }

        let buttonquestion = document.querySelector('.buttonquestion');

        buttonquestion.addEventListener('click', () => {
            let usuario = document.querySelector('#input-resposta').value;
            respostaQuestao(id, usuario);
        });
    }

    function respostaQuestao(id, resposta) {
        divresposta.innerHTML = ``;
        let p = document.createElement('p');
        divresposta.append(p);

        if (id == '1') {
            let pre = document.createElement('pre');
            divresposta.append(pre)
            pre.textContent = drawStairs(resposta)
        } else if (id == '2') {
            p.textContent = checkStrongPassword(resposta)
        } else if (id == '3') {
            p.innerText = checkCountAnagrams(resposta)
        }
    }
});

//QUESTÃO1
function drawStairs(tamanho) {
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
        return stairs;
    } else {
        return "Precisa ser um número";
    }
}

//QUESTÃO2
function checkStrongPassword(senha) {
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


    let mensagemErro = erroAtual.join(", ");

    let mensagem = `Faltam ${contadorCriterio} critérios para senha segura.\n${mensagemErro}`

    if (contadorCriterio > 0) {
        return mensagem;
    } else {
        return "Senha segura!";
    }
}

//QUESTÃO3
function checkCountAnagrams(palavra) {

    let arraySubstring = [];
    const tamanhoString = palavra.length;
    const numeroRegex = (/[0-9]/).test(palavra);

    if (typeof palavra == "number" || numeroRegex) {
        return "Não é permitido número!"
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

    //contando anagramas
    //total do anagrama:
    let totalAnagramaNumero = resultado.length;
    let totalAnagramaLetra = `[${resultado.join("] [")}]`;
    let mensagem = `Total de ${totalAnagramaNumero} anagramas. Que são: ${totalAnagramaLetra}`;

    return totalAnagramaNumero == 0 ? "Não há anagramas!" : mensagem;
}