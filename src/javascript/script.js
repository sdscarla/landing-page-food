$(document).ready(function () {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x'); //.find('i') é para ele encontrar o icone do botão para ai ele trocar
    });
});