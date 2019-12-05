(function($) {
    var $scene1 = $('.s1');
    var $s1Title = $('.s1-title');
    var $scene2 = $('.s2');
    var $s2Title = $('.s2-title');
    var $scene3 = $('.s3');
    var $s3Title = $('.s3-title');
    var $scene4 = $('.s4');
    var $s4Title = $('.s4-title');
    var $scene5 = $('.s5');
    var $s5Title = $('.s5-title');
    var $scene6 = $('.s6');
    var $s6Title = $('.s6-title');

    $scene1.mouseover(function() {
        $s1Title.html('“가지고 있는 것에 행복해 하라.”');
        $scene1.css({
            'cursor' : 'pointer',
            'opacity' : '0.7',
            'transition' : 'opacity 1.5s',
            'font-family' : 'Nanum Myeongjo',
            'font-size' : '20px',
            'line-height' : ' 36px',
            'letter-spacing' : '2px',
            'padding-top' : '40px'
        });
    });

    $scene1.mouseout(function() {
        $s1Title.html('SCENE#.1');
        $scene1.css({
            'opacity' : '1',
            'font-family' : 'EB Garamond',
            'font-size' : '50px',
            'letter-spacing' : '2px',
            'padding-top' : '20px'
        });
    });

    $scene2.mouseover(function() {
        $s2Title.html('“인증서는 없지만 코셔 음식을 만들어요. <br> 손님이 결정하세요.”');
        $scene2.css({
            'cursor' : 'pointer',
            'opacity' : '0.7',
            'transition' : 'opacity 1.5s',
            'font-family' : 'Nanum Myeongjo',
            'font-size' : '20px',
            'line-height' : ' 36px',
            'letter-spacing' : '2px',
            'padding-top' : '40px'
        });
    });

    $scene2.mouseout(function() {
        $s2Title.html('SCENE#.2');
        $scene2.css({
            'opacity' : '1',
            'font-family' : 'EB Garamond',
            'font-size' : '50px',
            'letter-spacing' : '2px',
            'padding-top' : '20px'
        });
    });

    $scene3.mouseover(function() {
        $s3Title.html('“반죽은 잘 다루어야 해요. <br> 손을 따뜻하게 하고 …”');
        $scene3.css({
            'cursor' : 'pointer',
            'opacity' : '0.7',
            'transition' : 'opacity 1.5s',
            'font-family' : 'Nanum Myeongjo',
            'font-size' : '20px',
            'line-height' : ' 36px',
            'letter-spacing' : '2px',
            'padding-top' : '40px'
        });
    });

    $scene3.mouseout(function() {
        $s3Title.html('SCENE#.3');
        $scene3.css({
            'opacity' : '1',
            'font-family' : 'EB Garamond',
            'font-size' : '50px',
            'letter-spacing' : '2px',
            'padding-top' : '20px'
        });
    });

    $scene4.mouseover(function() {
        $s4Title.html('“반죽은 잘 다루어야 해요. <br> 손을 따뜻하게 하고 …”');
        $scene4.css({
            'cursor' : 'pointer',
            'opacity' : '0.7',
            'transition' : 'opacity 1.5s',
            'font-family' : 'Nanum Myeongjo',
            'font-size' : '20px',
            'line-height' : ' 36px',
            'letter-spacing' : '2px',
            'padding-top' : '40px'
        });
    });

    $scene4.mouseout(function() {
        $s4Title.html('SCENE#.4');
        $scene4.css({
            'opacity' : '1',
            'font-family' : 'EB Garamond',
            'font-size' : '50px',
            'letter-spacing' : '2px',
            'padding-top' : '20px'
        });
    });

    $scene5.mouseover(function() {
        $s5Title.html('“모티가 토마스가 만든 <br> 케이크는 먹지 말라고 했어.”');
        $scene5.css({
            'cursor' : 'pointer',
            'opacity' : '0.7',
            'transition' : 'opacity 1.5s',
            'font-family' : 'Nanum Myeongjo',
            'font-size' : '20px',
            'line-height' : ' 36px',
            'letter-spacing' : '2px',
            'padding-top' : '40px'
        });
    });

    $scene5.mouseout(function() {
        $s5Title.html('SCENE#.5');
        $scene5.css({
            'opacity' : '1',
            'font-family' : 'EB Garamond',
            'font-size' : '50px',
            'letter-spacing' : '2px',
            'padding-top' : '20px'
        });
    });

    $scene6.mouseover(function() {
        $s6Title.html('“아무 것도 없는 사람들도 있어. <br> 혼자 태어나서 죽을 때도 혼자이고 …”');
        $scene6.css({
            'cursor' : 'pointer',
            'opacity' : '0.7',
            'transition' : 'opacity 1.5s',
            'font-family' : 'Nanum Myeongjo',
            'font-size' : '20px',
            'line-height' : ' 36px',
            'letter-spacing' : '2px',
            'padding-top' : '40px'
        });
    });

    $scene6.mouseout(function() {
        $s6Title.html('SCENE#.6');
        $scene6.css({
            'opacity' : '1',
            'font-family' : 'EB Garamond',
            'font-size' : '50px',
            'letter-spacing' : '2px',
            'padding-top' : '20px'
        });
    });
})(jQuery);