$(document).ready(function () {

	// main visual cover 
	angle("#main", window);

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

	$('#portfolio .modalOpen').click(function (e) {
		e.preventDefault();
		$(this).modal({
			fadeDuration: 250,
			clickClose: false,
		});
	});

	$('.modal').on($.modal.OPEN, (event, modal) => {
		$('.blocker').on('click.modal', function () {
			$.modal.close();
		})
	})

	// fullpage
	var myFullpage = new fullpage('#fullpage', {
		css3: true,
		scrollOverflow: true,
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
