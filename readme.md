## DESAFIO DE PROGRAMAÇÃO - ACADEMIA CAPGEMINI
Terceira etapa do processo de seleção para a Academia Capgemini 2022.

A implementação das questões foram realizadas com as seguintes linguagens e ferramentas:
- Linguagens: JavaScript
- Testes: Jest
- Runtime: Node.js
- Bônus: HTML e Bootstrap

### Questão 01 - Escada
- Nome do arquivo: drawStairs.js
- Localização: raiz do projeto > src > questions

### Questão 02 - Senha forte
- Nome do arquivo: checkStrongPassword.js
- Localização: raiz do projeto > src > questions

### Questão 03 - Anagrama
- Nome do arquivo: checkCountAnagrams.js
- Localização: raiz do projeto > src > questions

### Especificação de outras pastas:
- Localização: raiz do projeto > src
- Nota: Arquivo para rodar aplicação no terminal e outros códigos fonte do projeto

- Localização: raiz do projeto > src > run-browser
- Nota: Arquivos com intuito de rodar as aplicações no navegador

- Localização: raiz do projeto > src > tests
- Nota: Arquivos com intuito de realizar os testes unitarios de cada questão

## Instruções para rodar a aplicação e as tecnologias utilizadas:
    ● Clonar o projeto, ou baixar o zip e extrair
    
    1# Rodar utilizando o browser:
        ● Localização: raiz do projeto > src > run-browser
        ● Nome do arquivo: page.html
        ● Explicação: 
            Abra o arquivo page.html que se encontra na pasta 'run-browser'
            para que possa abrir no navegador e interaja com a página.

    2# Rodar utilizando o terminal (entrada do usuario):
    Obs. É necessário ter o node instalado. Site para download: https://nodejs.org/en/.
        ● Localização: raiz do projeto > src
        ● Nome do arquivo: run.js
        ● Explicação: 
            Abra o terminal de sua máquina, verifique se tem o node.js instalado com o comando:
            "node --version", caso contrário necessitará instalação.
            Por meio do terminal navegue até a pasta 'src'.
            Rode o arquivo executando o comando: "node run.js" e interaja com as questões.
            Obs. Cada pergunta rodará uma única vez em sequencia, caso queira responder novamente
            basta rodar novamente o arquivo executando o comando: "node run.js"

    3# Rodar testes unitario:
        ● Localização: raiz do projeto > src > tests
        
        #Teste Questão 1 - Escada
            ● Nome do arquivo: drawStairs.test.js
        #Teste Questão 2 - Senha forte
            ● Nome do arquivo: checkStrongPassword.test.js
        #Teste Questão 3 - Anagrama
            ● Nome do arquivo: checkCountAnagrams.test.js
        
        ● Explicação:
            Por meio do terminal, instale as dependencias do projeto utilizando o comando:
            "npm install". Após executar o comando: "npm run test".