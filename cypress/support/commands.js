// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('goHome', ()=> {
    cy.viewport(1920, 1080)
    cy.visit('https://seubarriga.wcaquino.me/login')

    //Verificação de checkpoint de que estou na página certa
    cy.contains('a', 'Login')
    .should('be.visible')
})

Cypress.Commands.add('goUser', ()=> {
    cy.viewport(1920, 1080)
    cy.visit('https://seubarriga.wcaquino.me/cadastro')

    //Verificação de checkpoint de que estou na página certa
    cy.contains('label', 'Nome')
        .should('be.visible')
})

Cypress.Commands.add('login', (email, senha)=> {
    cy.get('#email').type(email)
    cy.get('#senha').type(senha)

    cy.get('.btn').click()
})

Cypress.Commands.add('Usuario', (nome, email, senha)=> {

    //verifica se o nome foi fornecido antes de preencher o campo
    if (nome) {
        cy.get('#nome').type(nome)    
    }
    
    //verifica se o email foi fornecido antes de preencher o campo
    if (email) {
        cy.get('#email').type(email)
    }
    
    //verifica se a senha foi fornecida antes de preencher o campo
    if (senha) {
        cy.get('#senha').type(senha)
    }

    cy.get(".btn").click()
})

Cypress.Commands.add('mensagemAlerta', (text)=> {
    cy.get('.alert')
        .should('be.visible')
        .and('have.text', text)
})

Cypress.Commands.add('extrato', (text)=> {
    cy.get('a[href="/extrato"]').click()
    cy.contains(text)
        .should('be.visible')
})

Cypress.Commands.add('conta', (nomeConta)=> {
    cy.get('.dropdown-toggle').click()
    cy.get('.dropdown-menu > :nth-child(1) > a').click()
    cy.get('#nome').type(nomeConta)
    cy.get('.btn').click()
})

Cypress.Commands.add('formularioMovimentacao', (tipo, dataTransacao, dataPagamento, descricao, interessado, valor, conta, statusPago) => {
    cy.get('select#tipo').select(tipo)
    cy.get('#data_transacao').type(dataTransacao)
    cy.get('#data_pagamento').type(dataPagamento)
    cy.get('#descricao').type(descricao)
    cy.get('#interessado').type(interessado)
    cy.get('#valor').type(valor)
    cy.get('select#conta').select(conta)

    // Verifica se deve marcar o checkbox "Pago"
    if (statusPago) {
        cy.get('#status_pago').check()
    } else {
        cy.get('#status_pago').uncheck()
    }

    cy.get('.btn').click()
})
