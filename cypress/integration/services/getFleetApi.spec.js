import { baseURL } from '../../../cypress'

describe('API Testing with Cypress', () => {
  beforeEach(() => {
    cy.request('get', `/fleet`).as('fleet')
    cy.server() // enable response stubbing
    cy.route({
      method: 'GET', // Route all GET requests
      url: '/fleet', // that have a URL that matches '/users/*'
      response: [
        {
          id: { N: '12345678' },
          name: { S: 'Executive car 5' },
          vin: { S: 'ASD423E3D3RF5' },
          make: { S: 'Mazda' },
          model: { S: 'CX-5' },
          year: { S: '2019' },
          fuelType: { S: 'petrol' },
          type: { S: 'SUV' },
          Position: {
            M: {
              lat: { N: '3.995' },
              lon: { N: '43.2221' },
            },
          },
          odometer: { N: '43546' },
          fuel: { N: '33.4' },
          battery: { N: '12.7' },
        },
      ],
    })
  })

  it('Validate the header', () => {
    cy.get('@fleet')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json; charset=utf-8')
  })

  it('Validate the status code', () => {
    cy.get('@fleet').its('status').should('equal', 200)
  })

  it("Validate the pokemon's name", () => {
    cy.get('@fleet').then((response) => {
      expect(response.body).to.have.length(1)
      expect(response.body[0].name).equal('Executive car 1')
    })
  })
})
