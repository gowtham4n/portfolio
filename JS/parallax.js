$(window).scroll(function() {
    parallax();
})

function parallax() {
    var wScroll = $(window).scrollTop();
    
    $('.parallax-bg').css('background-position','left '+(wScroll*0.55)+'px')

    $('.parallax-bg2').css('background-position','center '+(wScroll*0.45)+'px')

    $('.parallax-bg3').css('letter-spacing' +(wScroll*0.8)+'px')

    if(wScroll > $('.large-window').offset().top - $(window).height()) {
        //$('.large-window').css({'background-position':'center '+ (wScroll- $('.large-window').offset().top+ '')});
        //$('.large-window').css('background-position','center '+ (wScroll- $('.large-window').offset().top - 100));
        $('.large-window').css('background-position','center '+ (wScroll- $('.large-window').offset().top - 100));

        //var opacity = (wScroll - $('.large-window').offset().top+ 400) / (wScroll / 4)
        var opacity = (wScroll - $('.large-window').offset().top+ 400) / (wScroll / 4)

        $('.window-tint').css('opacity', opacity)
    }
}
