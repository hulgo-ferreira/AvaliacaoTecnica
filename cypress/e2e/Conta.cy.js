
describe('Conta', () => {

    beforeEach(() => {
        cy.goHome()
        cy.login('hulgo.ferreira@teste.com.br', 'tray123')    
    })

    it('Deve cadastrar uma nova conta', () => {
        cy.conta('Bradesco')
        cy.mensagemAlerta('Conta adicionada com sucesso!')
    })

    it('Não deve cadastrar a mesma conta', () => {
        cy.conta('Bradesco')
        cy.mensagemAlerta('Já existe uma conta com esse nome!')
    })

    it('Deve listar todas as contas cadastradas', () => {
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(2) > a').click()
    })
})