$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $('.bg2').css('background', '#000');
    } else {
        $('.bg2').css('background', 'transparent');
    }
});