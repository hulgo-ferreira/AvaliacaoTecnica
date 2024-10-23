//Cenário 1
describe('Cadastro de usuário', () => {
  
    beforeEach(() => {
        cy.goHome()
        cy.goUser()
    })

    it('Cadastrar um novo usuário', () => {
        cy.Usuario('usuariotray', 'usuario.tray@teste.com.br', 'tray123')
        cy.mensagemAlerta('Usuário inserido com sucesso')
    })

    it('Não deve cadastrar um usuário já existente', () => {
        cy.Usuario('usuariotray', 'usuario.tray@teste.com.br', 'tray123')
        cy.mensagemAlerta('Endereço de email já utilizado')
    })

    it('Não deve cadastrar usuário sem nome', () => {
        cy.Usuario('', 'usuario.tray@teste.com.br', 'tray123')
        cy.mensagemAlerta('Nome é um campo obrigatório')
    })

    it('Não deve cadastrar usuário sem email', () => {
        cy.Usuario('usuariotray', '', 'tray123');
        cy.mensagemAlerta('Email é um campo obrigatório')
    })

    it('Não deve cadastrar usuário sem informar senha', () => {
        cy.Usuario('usuariotray', 'usuario.tray@teste.com.br', '')
        cy.mensagemAlerta('Senha é um campo obrigatório')
    })
})

