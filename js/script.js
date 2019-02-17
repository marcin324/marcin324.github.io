$('[class^=header-]').on('click', function () {
    const goToSection = $(this).attr('class');
    $('body, html').animate({
        scrollTop: $('[data-section=' + goToSection + ']').offset().top
    }, 1000)
});

$('.burger').on('click', function () {
    $(this).toggleClass('active');
    $('nav').toggleClass('active');
});

$(document).ready(function () {
    $('.arrow-up').hide();

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $('.arrow-up').fadeIn();
            } else {
                $('.arrow-up').fadeOut();
            }
        });

        $('.arrow-up').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
    });
});