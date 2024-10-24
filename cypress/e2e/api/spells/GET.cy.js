
//Cenário de teste 3 - Retornar a listagem de feitiços com a estrutura correta
describe("Retorna a listagem de feitiços", () => {
  it("Deve retornar a listagem de feitiços", () => {
    const endpoint = '/pt/spells';

    cy.api(endpoint).then((response) => {
      //verifica o status da resposta
      expect(response.status).to.eq(200);

      // Verifica se o corpo da resposta é um array
      expect(response.body).to.be.an('array');
    })
  })

  //Cenário de teste 4 - Retornar o feitiço "Accio" com as propriedades corretas
  it('Deve retornar o feitiço "Accio', () => {
    const spellName = 'Accio'; //Nome do feitiço
    const endpoint = '/pt/spells';

      //Aqui estou fazendo uma requisição diretamente com o nome do feitiço
      cy.api(endpoint).then(response => {

          //verificar se o status da resposta é 200 (sucesso)
          expect(response.status).to.eq(200);

          //realizo um filtro no endpoint para encontrar o feitiço "Accio"
          const spellAccio = response.body.find(spell => spell.spell === spellName)

          expect(spellAccio).to.exist;
          expect(spellAccio).to.have.property('spell', spellName);
          expect(spellAccio).to.have.property('use', 'Feitiço de invocação')

          //Aqui modifico o body para conter o feitiço 'Accio'
          cy.wrap({ body: spellAccio }).its('body').should('deep.equal', {
            spell: 'Accio',
            use: 'Feitiço de invocação',
            index: 0
          })
      })
  })
})
