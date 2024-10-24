<img align="right" width="350" src="https://www.cypress.io/cypress_logo_social.png"/>

# Automação de testes E2E e API com Cypress!👋

## Preparação do ambiente

1- Instalar um editor de código fonte [VSCode](https://code.visualstudio.com/download);
- Entensões do VSCode que foram usadas no projeto:
  * One Dark Pro
  * Atom Material Icons
	
2- Instalar o [Node](https://nodejs.org/en/download) o gerenciador de pacotes;
- Para esse projeto foi utilizado o [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) um gerenciador de pacotes assim como o node, porém mais rápido e mais recente.
  * Nodejs: https://nodejs.org/en/download

3- Abaixo estão os comandos para preparação do ambiente utilizando o node, mas pode ser substituído pelo yarn:
  - Comando para inicializar um pacote e adicionar o cypress no arquivo package.json
     - npm init --yes
     - yarn init -2 (recomendação mais recente)
     - yarn add cypress (adiciona o cypress ao arquivo package.json)
  - Realiza a instalação do cypress como dependência de desenvolvimento
     - npm install cypress -D
     - yarn add cypress@13.15.0 -D
  - Estrutura as pastas no projeto e abre a interface do cypress pela primeira vez
     - npx cypress open
     - yarn cypress open
  - Executa o projeto no modo headless, ou seja, sem abrir a interface gráfica do navegador durante a execução
     - npx cypress run
     - yarn cypress run
- Como instalar todos os pacotes de dependência do projeto?
  - npm install
  - yarn install
 
- Instalação do plugin como dependência de desenvolvimento, para execução de testes de API com o cypress.
  - https://www.npmjs.com/package/cypress-plugin-api
    - comando: npm i cypress-plugin-api -D
  - https://yarnpkg.com/package?q=cypress%20api&name=cypress-plugin-api
    - comando: yarn add cypress-plugin-api -D

## Dependências do projeto:

- No arquivo package-lock.json, existem várias dependências que foram utilizadas durante a criação do projeto como por exemplo:
  - Dependência responsável por imprimir as informações sobre a chamada de API na UI do aplicativo Cypress, como se fosse a interface gráfica do POSTMAN
     - cypress-plugin-api: é possível 
