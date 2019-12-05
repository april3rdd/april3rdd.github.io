Init();

// 마우스 휠 이벤트 - jQuery Mouse Wheel Plugin
$('.pane,.scrzone').mousewheel(function(event) {
	event.preventDefault();
	if ($ScrollState == false) {
		$ScrollState = true;
		if (event.deltaY < 0) {
			UpdateScreen('+');
		}
		else if (event.deltaY > 0) {
			UpdateScreen('-');
		}
		else {
			$ScrollState = false;
		}
	}
});


// Init
function Init() {
	// 스크롤 속도
	$ScrollSpeed = 1.0; 
	$ScrollState = false;

	// 첫 번째 슬라이드
	$ActualSlide = $CibleSlide = $('.pane').first().attr('data-id');

	$ListSlides = new Array();
	// 슬라이드 목록 (.pane)
	$('.pane').each(function(){
		$ListSlides.push($(this).attr('data-id'));
	}); 

	TweenMax.to(window, 0, {scrollTo:0});
	TweenMax.to('.spane', 0, {scrollTo:{y:0, x:0}});
}

//ANIMATE
function UpdateScreen(operator) {
	$ActualSlide = $CibleSlide;
	// + 다음 슬라이드 / - 이전 슬라이드
	if (operator == "+") {
		$CibleSlide = $ListSlides[$ListSlides.indexOf($ActualSlide)+1];
	}
	else {
		$CibleSlide = $ListSlides[$ListSlides.indexOf($ActualSlide)-1];
	}

	if (!$CibleSlide) {
		$ScrollState = false;
		$CibleSlide = $ActualSlide;
		return;
	}

	$ActualSlideDOM = $('.pane[data-id = ' + $ActualSlide + ']');
	$CibleSlideDOM = $('.pane[data-id = ' + $CibleSlide + ']');

	// 수평 or 수직
	if ($ActualSlideDOM.closest('.prt').find('.spane').length
		&& (operator=="+" && $ActualSlideDOM.next('.pane').length  ||  operator=="-" && $ActualSlideDOM.prev('.pane').length)) {
			TweenMax.to($ActualSlideDOM.closest('.spane'),
			$ScrollSpeed,
			{scrollTo : '.pane[data-id = ' + $CibleSlide + ']', ease: Power2.easeOut, onComplete : function(){$ScrollState = false;}
	});
	}
	// 일반
	else {
		TweenMax.to(
			window,
			$ScrollSpeed,
			{scrollTo : '.pane[data-id = ' + $CibleSlide + ']',
			ease: Power2.easeOut,
			onComplete : function(){$ScrollState = false;}
		}); 
	}
}

// Init() On Resize
$(window).resize(function(){
	Init();
});