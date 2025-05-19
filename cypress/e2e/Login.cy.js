
describe('Login', () => {

  beforeEach(() => {
    cy.goHome()
  })

  it('Deve logar com sucesso', () => {
    cy.login('hulgo.ferreira@teste.com.br', 'tray123')
    cy.mensagemAlerta('Bem vindo, Hulgo!')
  })

  it('Não deve logar com usuário inválido', () => {
    cy.login('hulgo@teste.com.br', 'tray123')
    cy.mensagemAlerta('Problemas com o login do usuário')
  })

  it('Não deve logar com senha inválida', () => {
    cy.login('hulgo.ferreira@teste.com.br', 'tray12345')
    cy.mensagemAlerta('Problemas com o login do usuário')
  })
})



