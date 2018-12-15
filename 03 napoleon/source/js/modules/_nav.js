// код менюшки навигации
const burger = $('.js-burger'),
        nav = $('.js-nav');

$(burger).on('click', function () {
    $(this).toggleClass('is-active');
    $(nav).slideToggle('fast');
})