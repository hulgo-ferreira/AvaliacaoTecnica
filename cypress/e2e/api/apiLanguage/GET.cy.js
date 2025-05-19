describe('Validar o formato da request', () => {
    it('Deve validar o formato da request', () => {
        const endpoint = "/pt/houses";

        cy.api(endpoint).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.an('array')
            expect(response.body).to.have.length(4)

            response.body.forEach(house => {

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

    it('Deve validar a URL inválida', () => {
        const endpoint = "/jp";

        cy.api({
            url: endpoint,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).to.be.an('object');
            expect(response.body).to.have.property('error', 'Invalid language')
        })
    })

    it('Deve validar se o retorno está em inglês', () => {
        const endpoint = '/en';

        cy.api(endpoint).then(response => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('lang', 'en')
            expect(response.body).to.have.property('langName', 'English')
            expect(response.body.languagesAvailable).to.include('en')
        })
    })
})

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
                expect(response.status).to.eq(200);
                expect(response.body).to.exist;
            })
        })
    })
})