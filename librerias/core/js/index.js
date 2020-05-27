$(document).ready(function () {
    $("#nombre").focus();

    $("#registrar").click(function() {
        registrar();
    });

    $("#formulario").validate({
        errorElement: 'div',
        errorClass: 'error',
        validClass: 'valid',  
        errorPlacement: function (error, element) {
            error.insertAfter(element.parent().hasClass('input-group') ? element.parent() : element);
        },
        rules: {
            nombre: {
                required: true,
                maxlength: 200
            },
            apellido: {
                required: true,
                maxlength: 200
            },
            celular: {
                required: true,
                number: true,
                maxlength: 9
            },
            correo: {
                required: true,
                email: true,
                maxlength: 50
            },
            contraseña: {
                required: true,
                maxlength: 50
            },
            codigopromo: {
                required: true,
                maxlength: 50
            }
        },
        messages: {
            nombre: {
                required: 'Falta ingresar Nombre.',
                maxlength: 'La cantidad de caracteres máximo es de 200.'
            },
            apellido: {
                required: 'Falta ingresar Apellido.',
                maxlength: 'La cantidad de caracteres máximo es de 200.'
            },
            celular: {
                required: 'Falta ingresar Celular.',
                number: 'Ingresar un número de celular válido.',
                maxlength: 'La cantidad de caracteres máximo es de 9.'
            },
            correo: {
                required: 'Falta ingresar Correo.',
                email: 'Ingresar un correo electrónico válido.',
                maxlength: 'La cantidad de caracteres máximo es de 50.'
            },
            contraseña: {
                required: 'Falta ingresar Contraseña.',
                maxlength: 'La cantidad de caracteres máximo es de 50.'
            },
            codigopromo: {
                required: 'Falta ingresar Código promo.',
                maxlength: 'La cantidad de caracteres máximo es de 50.'
            }
        }
    });
});

function registrar() {
    return $('#formulario').validate().form();
}