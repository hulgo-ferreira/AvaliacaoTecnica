
describe('Validação da API de personagens Harry Potter', () => {
    it('Deve validar se Harry Potter existe', () => {
        const endpoint = '/pt/characters';

        cy.api(endpoint).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');

            const harryPotter = response.body.find(character => character.nickname === 'Harry');

            expect(harryPotter).to.exist;
            expect(harryPotter.fullName).to.eq('Harry James Potter');
            expect(harryPotter.interpretedBy).to.eq('Daniel Radcliffe');
        })
    })
    
    it('Deve validar o personagem de index 0', () => {

        cy.api('GET', 'https://potterapi-fedeperin.vercel.app/pt/characters')
            .its('body')                
            .should('be.an', 'array')
            .then((characters) => {
                const characterAtIndex0 = characters[0];
                expect(characterAtIndex0).to.exist;
            })
    })
})