
//Cenário de teste 7 - validar se a casa “Grifinória” existe e com propriedades corretas
describe('Validação da casa Grifinória', () => {
    const endpoint = 'https://potterapi-fedeperin.vercel.app/pt/houses';

    it('Deve validar se casa Grifinória existe', () => {
        cy.api(endpoint).then(response => {
            //verificar se o status da reposta do endpoint é 200 (sucesso)
            expect(response.status).to.eq(200);

            //Encontrar a casa "Grifinória" no corpo da resposta
            const grifinoria = response.body.find(house => house.house === 'Grifinória')

            //verifica se a casa "Grifinória existe"
            expect(grifinoria).to.exist;

            //validar as propriedades da casa "Grifinória"
            expect(grifinoria).to.have.property('emoji', '🦁');
            expect(grifinoria).to.have.property('founder', 'Godric Grifinória');
            expect(grifinoria).to.have.property('colors').that.includes('red', 'gold');
            expect(grifinoria).to.have.property('animal', 'Leão');
            expect(grifinoria).to.have.property('index', 0);
        })
    })
})