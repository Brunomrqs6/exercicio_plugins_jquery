$(document).ready(function() {
    })
    
    $('#telefone').mask("(00) 00000-0000", {
        placeholder:"(11) 99999-9999"
    })

    $('#cep').mask('00000-000', {
        placeholder: "00000-000"
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, digite seu nome.',
            email: 'Por favor, digite seu e-mail',
            telefone: 'Por favor, digite seu telefone',
            endereco: 'Por favor, digite seu endereco',
            cep: 'Por favor, digite seu CEP',
            cpf: 'Por favor, digite seu CPF'
        }

})
