/*global define */
define(['jquery', 'bootstrapModal', 'bootstrapInputMask', 'jqueryValidate'], function () {
    'use strict';

    $('#add-contact-form').validate({
        rules: {
            'contact-email': {
                email: true
            },
            'contact-number': {
                digits: true
            }
        },
        messages: {
            'contact-email': 'O campo E-mail deve conter um e-mail válido.',
            'contact-number': 'O campo Número deve conter somente dígitos.'
        },
        highlight: function (element) {
            $(element)
                .closest('.form-group')
                .removeClass('has-success')
                .addClass('has-error');
        },
        success: function (element) {
            element
                .addClass('valid')
                .closest('.form-group')
                .removeClass('has-error')
                .addClass('has-success');
        }
    });

    return '\'Allo \'Allo!';
});
