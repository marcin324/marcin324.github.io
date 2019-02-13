const arrowUp = document.querySelector('a.arrow-up');
const menuElements = document.querySelectorAll('[class^=header-]');

/*menuElements.forEach(function (menuElement) {
    menuElement.addEventListener('click', function () {

        const goToSection = menuElement.getAttribute('class');

        window.scrollTo({
            top: document.querySelector('[data-section=' + goToSection + ']').offsetTop,
            behavior: 'smooth'
        });
    });
});

arrowUp.addEventListener('click', function () {
    document.body.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});*/

$('[class^=header-]').on('click', function () {
    const goToSection = $(this).attr('class');
    $('body, html').animate({
        scrollTop: $('[data-section=' + goToSection + ']').offset().top
    }, 1000)
});

/*$('.arrow-up').on('click', function () {
    $('body, html').animate({
        scrollTop: 0
    }, 1000);
});*/

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

/*window.addEventListener('scroll', () => {
    const heightScroll = $(document).scrollTop()

    if (heightScroll > 500) {
        $iconUp.addClass('active');
    } else {
        $iconUp.removeClass('active');
    }
});*/