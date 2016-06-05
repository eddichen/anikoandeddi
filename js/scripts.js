$(function(){
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this).attr('href');
        if( target.length ) {
            event.preventDefault();
            var targetOffset = $(target).offset();
            $('html, body').animate({
                scrollTop: targetOffset.top
            }, 1000);
        }
    });
});