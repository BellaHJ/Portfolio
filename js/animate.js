$(document).ready(function () {
	// Portfolio Scroll Plugin Custom
	let scroll = false;
	angle("#main", window);
	$.mCustomScrollbar.defaults.axis = "yx";
	$("#portfolio .scrollArea").mCustomScrollbar({
		theme: "dark",
		scrollInertia: 200,
		scrollButtons: false,
		callbacks: {
			whileScrolling: function () {
				if (scroll === true) {
					this.mcs.topPct === 100 ? myFullpage.moveSectionDown() : scroll = false;
				}
			},
			onTotalScroll: function () {
				scroll = true;
			},
		},
	});
	$("#profile .scrollArea").mCustomScrollbar({
		theme: "dark-2",
		scrollInertia: 200,
		scrollButtons: false,
		callbacks: {
			whileScrolling: function () {
				if (scroll === true) {
					this.mcs.topPct === 100 ? myFullpage.moveSectionDown() : scroll = false;
				}
			},
			onTotalScroll: function () {
				scroll = true;
			},
		},
	});

	// Main Text Typing Effect
	var typingBool = false;
	var typingIdx = 0;
	var typingTxt = $(".mainText").text();
	typingTxt = typingTxt.split("");
	if (typingBool == false) {
		typingBool = true;
		var tyInt = setInterval(typing, 100);
	}
	function typing() {
		if (typingIdx < typingTxt.length) {
			$(".textVisual").append(typingTxt[typingIdx]);
			typingIdx++;
		} else {
			clearInterval(tyInt);
		}
	}

	$('#portfolio .modalOpen').click(function (event) {
		event.preventDefault();
		$(this).modal({
			fadeDuration: 250
		});
	});

	$('.modal').on($.modal.OPEN, (event, modal) => {
		fullpage_api.setAllowScrolling(false)
	})

	$('.modal').on($.modal.AFTER_CLOSE, (event, modal) => {
		$('#portfolio').trigger('click');
		fullpage_api.setAllowScrolling(true)
	})

	// profile mobile (max-width : 600px) skill folding
	$('.foldingButton').click(function () {
		var state = $(this).attr('data-open');
		if (state == 'true') {
			$(this).attr('data-open', 'false').text('show').next().removeClass('active');
		} else {
			$(this).attr('data-open', 'true').text('hide').next().addClass('active');
		}
	});
});

// Main visual cover resizing
$(window).resize(function () {
	angle("#main", window);
});

// Main visual cover position
function angle(select, object) {
	var winW = $(object).width();
	var winH = $(object).height();
	var r = Math.atan2(winH, winW);
	var d = r * 180 / Math.PI;
	$(select + " > .text").find(".line").css({ "transform": "rotate(-" + d + "deg)" });
	if ($(window).width() <= 480) {
		$(select).find(".coverBox").css({ "transform": "translate(-" + winW + "px, -" + (winH / 2) + "px) rotate(-" + d + "deg)", "-webkit-transform": "translate(-" + winW + "px, -" + (winH / 2) + "px) rotate(-" + d + "deg)", "-ms-transform": "translate(-" + winW + "px, -" + (winH / 2) + "px) rotate(-" + d + "deg)" });
	} else {
		$(select).find(".coverBox").css({ "transform": "translate(-" + (winW / 2) + "px, -" + (winH / 2) + "px) rotate(-" + d + "deg)", "-webkit-transform": "translate(-" + (winW / 2) + "px, -" + (winH / 2) + "px) rotate(-" + d + "deg)", "-ms-transform": "translate(-" + (winW / 2) + "px, -" + (winH / 2) + "px) rotate(-" + d + "deg)" });
	}
	$(select).find(".coverBox").find(".text").css({ "transform": "rotate(" + d + "deg)" }).find(".line").css({ "transform": "rotate(-" + d + "deg)" });
}
