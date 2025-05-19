
describe("Retorna a listagem de feitiços", () => {
  it("Deve retornar a listagem de feitiços", () => {
    const endpoint = '/pt/spells';

    cy.api(endpoint).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
    })
  })

  it('Deve retornar o feitiço "Accio', () => {
    const spellName = 'Accio'; 
    const endpoint = '/pt/spells';

      cy.api(endpoint).then(response => {

          expect(response.status).to.eq(200);

          const spellAccio = response.body.find(spell => spell.spell === spellName)

          expect(spellAccio).to.exist;
          expect(spellAccio).to.have.property('spell', spellName);
          expect(spellAccio).to.have.property('use', 'Feitiço de invocação')

          cy.wrap({ body: spellAccio }).its('body').should('deep.equal', {
            spell: 'Accio',
            use: 'Feitiço de invocação',
            index: 0
          })
      })
  })
})
