
describe('Validação da casa Grifinória', () => {
    const endpoint = 'https://potterapi-fedeperin.vercel.app/pt/houses';

    it('Deve validar se casa Grifinória existe', () => {
        cy.api(endpoint).then(response => {
            expect(response.status).to.eq(200);

            const grifinoria = response.body.find(house => house.house === 'Grifinória')

            expect(grifinoria).to.exist;
            expect(grifinoria).to.have.property('emoji', '🦁');
            expect(grifinoria).to.have.property('founder', 'Godric Grifinória');
            expect(grifinoria).to.have.property('colors').that.includes('red', 'gold');
            expect(grifinoria).to.have.property('animal', 'Leão');
            expect(grifinoria).to.have.property('index', 0);
        })
    })
})