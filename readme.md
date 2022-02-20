# DESAFIO DE PROGRAMAÇÃO - ACADEMIA CAPGEMINI
Terceira etapa do processo de seleção para a Academia Capgemini 2022.

A implementação das questões foram realizadas com as seguintes linguagens e ferramentas:
- Linguagens: JavaScript
- Testes: Jest
- Runtime: Node.js
- Bônus: HTML e Bootstrap

### Questão 01 - Escada
- Nome do arquivo: drawStairs.js
- Localização: desafio-programacao > src > questions

### Questão 02 - Senha forte
- Nome do arquivo: checkStrongPassword.js
- Localização: desafio-programacao > src > questions

### Questão 03 - Anagrama
- Nome do arquivo: checkCountAnagrams.js
- Localização: desafio-programacao > src > questions

### Especificação das outras pastas:
- Localização: desafio-programacao > src
- Nota: Arquivo para rodar aplicação no terminal e outros códigos fonte do projeto

- Localização: desafio-programacao > src > run-browser
- Nota: Arquivos com intuito de rodar as aplicações no navegador

- Localização: desafio-programacao > src > tests
- Nota: Arquivos com intuito de realizar os testes unitarios de cada questão

## Instruções para rodar a aplicação e as tecnologias utilizadas:
    ● Clonar o projeto, ou baixar o zip e extrair

    #Maneiras de rodar a aplição:
    
    1# Rodar utilizando o browser:
        ● Localização: desafio-programacao > src > run-browser
        ● Nome do arquivo: page.html
            ● Explicação: Após abrir o projeto e entrar na pasta indicada a cima, clique no arquivo PAGE.HTML
             para que possa abrir no navegador e interaja com a página.

    2# Rodar utilizando o terminal (entrada do usuario):
    Obs. É necessário ter o NODE instalado. Site para download: https://nodejs.org/en/.
        ● Localização: desafio-programacao > src
        ● Nome do arquivo: run.js
            ● Explicação: Abra o terminal de sua máquina, verifique se tem o node.js instalado com o comando:
             "node --version", caso contrário necessitará instalação.
            ● Verifique o local em que a pasta do projeto se encontra e entre nela pelo terminal,
            após entre na pasta src digitando: "cd src". Exemplo: C:\User\desafio-programacao\src>
            ● Rode o arquivo executando o comando: "node run.js" e interaja com as questões.
            Obs. Cada pergunta rodará uma única vez em sequencia, caso queira responder novamente
            basta rodar novamente o arquivo executando o comando: "node run.js"

    3# Rodar testes unitario:
        ● Localização: desafio-programacao > src > tests
        
        #Teste Questão 1 - Escada
            ● Nome do arquivo: drawStairs.test.js
        #Teste Questão 2 - Senha forte
            ● Nome do arquivo: checkStrongPassword.test.js
        #Teste Questão 3 - Anagrama
            ● Nome do arquivo: checkCountAnagrams.test.js
        
        ● Explicação:
            É necessário instalar as dependencias utilizando o comando: "npm install"
            no terminal dentro da pasta do projeto raiz. Após executar o comando: "npm run test"