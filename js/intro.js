(function($) {
    var $line1 = $('.line1');
    var $line2 = $('.line2');
    var $line3 = $('.line3');
    var $line4 = $('.line4');
    var $line5 = $('.line5');

    var $sub1 = $('.subject').children(':eq(0)');
    var $sub2 = $('.subject').children(':eq(1)');
    var $sub3 = $('.subject').children(':eq(2)');
    var $sub4 = $('.subject').children(':eq(3)');
    var $sub5 = $('.subject').children(':eq(4)');
    
    var $des1 = $('.ds1');
    var $des2 = $('.ds2');
    var $des3 = $('.ds3');
    var $des4 = $('.ds4');
    var $des5 = $('.ds5');

    $sub1.click(function(e) {
        e.preventDefault();
        $line1.css({
            'stroke-dasharray' : '100',
            'stroke-dashoffset': '100',
            'animation' : '2s lineAni 1 forwards',
            'animation-delay' : '0s'
        });
        $des1.css({
            'animation' : '3s textAni 1 forwards',
            'animation-delay' :'0.7s'
        });
    });

    $sub2.click(function(e) {
        e.preventDefault();
        $line2.css({
            'stroke-dasharray' : '100',
            'stroke-dashoffset': '100',
            'animation' : '2s lineAni 1 forwards',
            'animation-delay' : '0s'
        });
        $des2.css({
            'animation' : '3s textAni 1 forwards',
            'animation-delay' :'0.7s'
        });
    });

    $sub3.click(function(e) {
        e.preventDefault();
        $line3.css({
            'stroke-dasharray' : '100',
            'stroke-dashoffset': '100',
            'animation' : '2s lineAni 1 forwards',
            'animation-delay' : '0s'
        });
        $des3.css({
            'animation' : '3s textAni 1 forwards',
            'animation-delay' :'0.7s'
        });
    });

    $sub4.click(function(e) {
        e.preventDefault();
        $line4.css({
            'stroke-dasharray' : '100',
            'stroke-dashoffset': '100',
            'animation' : '2s lineAni 1 forwards',
            'animation-delay' : '0s'
        });
        $des4.css({
            'animation' : '3s textAni 1 forwards',
            'animation-delay' :'0.7s'
        });
    });

    $sub5.click(function(e) {
        e.preventDefault();
        $line5.css({
            'stroke-dasharray' : '100',
            'stroke-dashoffset': '100',
            'animation' : '2s lineAni 1 forwards',
            'animation-delay' : '0s'
        });
        $des5.css({
            'animation' : '3s textAni 1 forwards',
            'animation-delay' :'0.7s'
        });
    });
})(jQuery);