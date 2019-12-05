(function($) {
    var $anatImage = $('.anat-image');
    var $hovertext1 = $('.hover-text1');
    var $thomasImage = $('.thomas-image');
    var $hovertext2 = $('.hover-text2');
    var $orenImage = $('.oren-image');
    var $hovertext3 = $('.hover-text3');
    var $itaiImage = $('.itai-image');
    var $hovertext4 = $('.hover-text4');
    var $actText = $('.cast-a-left').find('b');
    var $actSubText = $('.act');

    $anatImage.mouseover(function() {
        $hovertext1.css({
            'visibility' : 'visible',
            'opacity' : '0.8',
            'transition' : 'opacity 2s'
        });
        $anatImage.css({
            'cursor' : 'pointer',
            'opacity' : '0.7',
            'background-image' : 'linear-gradient(transparent, #3F1414)',
            'transition' : 'opacity 1.5s'
        });
    });

    $anatImage.mouseout(function() {
        $hovertext1.css({
            'visibility' : 'hidden',
            'opacity' : '0'
        });
        $anatImage.css({
            'opacity' : '1',
            'background-image' : 'none'
        });
    });


    $thomasImage.mouseover(function() {
        $hovertext2.css({
            'visibility' : 'visible',
            'opacity' : '0.8',
            'transition' : 'opacity 2s'
        });
        $thomasImage.css({
            'cursor' : 'pointer',
            'opacity' : '0.7',
            'background-image' : 'linear-gradient(transparent, #3F1414)',
            'transition' : 'opacity 1.5s'
        });
    });

    $thomasImage.mouseout(function() {
        $hovertext2.css({
            'visibility' : 'hidden',
            'opacity' : '0'
        });
        $thomasImage.css({
            'opacity' : '1',
            'background-image' : 'none'
        });
    });

    $orenImage.mouseover(function() {
        $hovertext3.css({
            'visibility' : 'visible',
            'opacity' : '0.8',
            'transition' : 'opacity 2s'
        });
        $orenImage.css({
            'cursor' : 'pointer',
            'opacity' : '0.7',
            'background-image' : 'linear-gradient(transparent, #3F1414)',
            'transition' : 'opacity 1.5s'
        });
    });

    $orenImage.mouseout(function() {
        $hovertext3.css({
            'visibility' : 'hidden',
            'opacity' : '0'
        });
        $orenImage.css({
            'opacity' : '1',
            'background-image' : 'none'
        });
    });


    $itaiImage.mouseover(function() {
        $hovertext4.css({
            'visibility' : 'visible',
            'opacity' : '0.8',
            'transition' : 'opacity 2s'
        });
        $itaiImage.css({
            'cursor' : 'pointer',
            'opacity' : '0.7',
            'background-image' : 'linear-gradient(transparent, #3F1414)',
            'transition' : 'opacity 1.5s'
        });
    });

    $itaiImage.mouseout(function() {
        $hovertext4.css({
            'visibility' : 'hidden',
            'opacity' : '0'
        });
        $itaiImage.css({
            'opacity' : '1',
            'background-image' : 'none'
        });
    });


    var isVisible = false;

    $(window).on('scroll', function() {
        if (checkVisible($('.anat-text')) && !isVisible) {
            $actText.html('Cast');
            $actSubText.html('Lead Role');
        } else if (checkVisible($('.thomas-text')) && !isVisible) {
            $actText.html('Cast');
            $actSubText.html('Lead Role');
        } else if (checkVisible($('.oren-text')) && !isVisible) {
            $actText.html('Cast');
            $actSubText.html('Supporting Role');
        } else if (checkVisible($('.itai-text')) && !isVisible) {
            $actText.html('Cast');
            $actSubText.html('Supporting Role');
        } else {
            isVisible = false;
            $actText.html('');
            $actSubText.html('');
        }
    });

    function checkVisible(elm, eval) {
        eval = eval || "object visible";
        var viewportHeight = $(window).height(), // Viewport Height
            scrolltop = $(window).scrollTop(), // Scroll Top
            y = $(elm).offset().top,
            elementHeight = $(elm).height();   
        
        if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
        if (eval == "above") return ((y < (viewportHeight + scrolltop)));
    }
})(jQuery);