//const cypressConfig = require("../../../../cypress.config");

//Cenário de teste 1 - Validar o formato da request
describe('Validar o formato da request', () => {
    it('Deve validar o formato da request', () => {
        const endpoint = "/pt/houses";

        cy.api(endpoint).then((response) => {
            expect(response.status).to.eq(200)

            //verifica se o corpo da resposta é um array
            expect(response.body).to.be.an('array')

            //verifico se o array contém 4 casas
            expect(response.body).to.have.length(4)

            //valido a estrutura de cada casa no array
            response.body.forEach(house => {

                //verifico se cada item do meu array está com a propriedade/tipo certo
                expect(house).to.have.property("house").that.is.a("string")
                expect(house).to.have.property("emoji").that.is.a("string")
                expect(house).to.have.property("founder").that.is.a("string")
                expect(house).to.have.property("colors").that.is.an("array")
                house.colors.forEach(color => {
                    expect(color).to.be.a("string")
                })
                expect(house).to.have.property("animal").that.is.a("string")
                expect(house).to.have.property("index").that.is.a("number")
            })
        })
    })

    //Cenário de teste 2 - Validar URL inválida
    it('Deve validar a URL inválida', () => {
        const endpoint = "/jp";

        cy.api({
            url: endpoint,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404)

            //verifica se o corpo da resposta é um array
            expect(response.body).to.be.an('object');

            expect(response.body).to.have.property('error', 'Invalid language')
        })
    })

    //Cenário de teste 5 - Validar API de Língua Inglesa e se o retorno está em inglês;
    it('Deve validar se o retorno está em inglês', () => {
        const endpoint = '/en';

        cy.api(endpoint).then(response => {
            //verificar se o status da resposta é 200 (sucesso)
            expect(response.status).to.eq(200)

            //verificar se a língua retornada é "en"
            expect(response.body).to.have.property('lang', 'en')

            //verificar se o nome da língua é "English"
            expect(response.body).to.have.property('langName', 'English')

            // Verificar se "en" está disponível na lista de idiomas
            expect(response.body.languagesAvailable).to.include('en')
        })
    })
})

//Cenário de teste 6 - Validar as quatro rotas disponíveis e se estão sendo acessadas
describe('Validação das rotas da API', () => {
    const endpoint = 'https://potterapi-fedeperin.vercel.app'
    const routes = [
        '/pt/books',
        '/pt/characters',
        '/pt/houses',
        '/pt/spells'
    ]

    routes.forEach(route => {
        it(`Deve validar se a rota ${route} está acessível`, () => {
            cy.request(`${endpoint}${route}`).then(response => {
                //Verificar se a resposta tem status 200
                expect(response.status).to.eq(200);

                //verifica se o corpo da resposta do endpoint existe
                expect(response.body).to.exist;
            })
        })
    })
})