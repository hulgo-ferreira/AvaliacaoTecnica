
//Cenário de teste 8 - Validar se Harry Potter existe
describe('Validação da API de personagens Harry Potter', () => {
    it('Deve validar se Harry Potter existe', () => {
        const endpoint = '/pt/characters';

        cy.api(endpoint).then((response) => {
            //validar o status da reposta
            expect(response.status).to.eq(200);

            //verifica se o corpo da resposta é um array
            expect(response.body).to.be.an('array');

            //Procura o personagem Harry Potter
            const harryPotter = response.body.find(character => character.nickname === 'Harry');

            //validar que Harry Potter existe
            expect(harryPotter).to.exist;

            //Validar o nome completo e o ator que o interpretou
            expect(harryPotter.fullName).to.eq('Harry James Potter');
            expect(harryPotter.interpretedBy).to.eq('Daniel Radcliffe');
        })
    })
    //Cenário de teste 9 - Validar o json de retorno do persongem de index valido
    it('Deve validar o personagem de index 0', () => {

        cy.api('GET', 'https://potterapi-fedeperin.vercel.app/pt/characters')
            .its('body')                //acessa o corpo da resposta
            .should('be.an', 'array')   //verifica se o retorno é um array
            .then((characters) => {
                //Acessando o personagem no índice 0
                const characterAtIndex0 = characters[0];

                //valida se o personagem no índice 0 existe
                expect(characterAtIndex0).to.exist;
            })
    })
})