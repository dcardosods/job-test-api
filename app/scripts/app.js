/*global define */
define(['jquery', 'bootstrapModal', 'bootstrapInputMask', 'bootstrapFileUpload', 'jqueryValidate'], function () {
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

    $('.filter-contact').on('keyup', function () {
        var inputId = this.id;
        var regex = new RegExp($(this).val(), 'i');
        var $searchableLines = $('.searchable tr');

        $searchableLines.hide();
        $searchableLines.filter(function () {
            var textToFilter = $('.' + inputId, this).text();
            return regex.test(textToFilter);
        }).show();
    });

    return '\'Allo \'Allo!';
});
