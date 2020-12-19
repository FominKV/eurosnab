jQuery(document).ready(function($){

    $('.gamburger').click(function(){
        $('span:nth-child(1)').toggleClass('first');
        $('span:nth-child(2)').toggleClass('middle');
        $('span:nth-child(3)').toggleClass('last');
    });
    $('.gamburger').click(function(){
        $('.menu2').toggleClass('menu2-active');
    });
    $('.menu2 a').click(function() {
        $('.menu2').removeClass('menu2-active');
    });

    $('.callme_button').jbform({
        key: "592c8394ddbc9fcf454aea7b45da1f14",
        title: "Заказ обратного звонка",
        postfix: "callme_order",
        fields: {
            name: {
                type: "text",
                required: true,
                placeholder: "Ваше имя"
            },
            tel: {
                type: "text",
                required: true,
                placeholder: "Ваш номер телефона"
            },
            email: {
                type: "email",
                placeholder: "Ваш email (не обязательно)"
            },
            agreement: {
                type: "checkbox",
                label: "Я согласен с  <a href='http://jbcallme.ru/agreement.html' target='_blank'>политикой конфиденциальности</a>",
                value: "Да",
                checked: true,
                required: true
            },
            submit: {
                type: "submit",
                value: "Перезвоните мне"
            }
        }
    });

});
