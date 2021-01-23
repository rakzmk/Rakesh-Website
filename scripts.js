$(window).scroll(function () {
    if ($(window).scrollTop() >= 600) {
        $('.bg3').css('background', '#000');
    } else {
        $('.bg3').css('background', 'transparent');
    }
});
