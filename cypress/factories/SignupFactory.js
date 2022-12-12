var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11988776655',
            address: {
                postalcode: '13212241',
                street: 'Avenida Francisco Nobre',
                number: '1234',
                details: 'Bl 11 Apto 32',
                district: 'Medeiros',
                city_state: 'Jundiaí/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}