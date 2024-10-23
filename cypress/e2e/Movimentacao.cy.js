
//Como pré-condição para esse teste, eu preciso estar logado no sistema com meu usuário
describe('Movimentação', () => {
    beforeEach(() => {
        cy.goHome()
        cy.login('hulgo.ferreira@teste.com.br', 'tray123')
        cy.conta('Bradesco')     
    })

    it('Cadastrar movimentação com sucesso e validar no extrato', () => {
        cy.get('a[href="/movimentacao"]').click()
        cy.formularioMovimentacao(
            'Receita',
            '23/10/2024', 
            '23/11/2024', 
            'Compra de equipamento', 
            'Tray', 
            '1500', 
            'Bradesco',
            true
        )
        cy.mensagemAlerta('Movimentação adicionada com sucesso!')
        cy.extrato('Compra de equipamento')
    })
})