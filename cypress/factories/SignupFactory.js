var faker = require ('faker')
var cpf = require ('gerador-validador-cpf')

export default {

    deliver: function() {
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '81998989898',
            adress:{
                postalcode:'54230212',
                street:'Rua Antônio de Alcântara Machado',
                number:'157',
                details:'casa',
                district:'Zumbi do Pacheco',
                city_state:'Jaboatão dos Guararapes/PE'
            },
            delivery_method:'Moto',
            cnh:'cnh-digital.jpg'

    }
    return data
}

}