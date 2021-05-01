$(document).ready( function() {
	// join_agree
	var YorN = new Array;
	$('.agreement_list input').each(function(num, obj){
		YorN[num] = $(this).prop('checked');
	});
	$('.agreement_all input').click(function(){
		if($(this).prop('checked') == true){
			$(this).parent().siblings('.agreement_list').find('input').prop('checked',true);
			for(var i=0; i<=5; i++){
				YorN[i] = true;
			}
		}else{
			$(this).parent().siblings('.agreement_list').find('input').prop('checked',false);
			for(var i=0; i<=5; i++){
				YorN[i] = false;
			}
		}
	});
	$('.agreement_list input').click(function(){
		var Inx = $(this).parent('li').index();
		if($(this).prop('checked') == true){
			YorN[Inx] = true;
			if(YorN.indexOf(false) < 0){
				$('.agreement_all input').prop('checked',true);
			}
		}else{
			YorN[Inx] = false;
			$('.agreement_all input').prop('checked',false);
		};
	});


	// popupArea
	var popOpenBtn = $('.popOpenBtn');
	var popCloseBtn = $('.popCloseBtn');
	var popupArea = $('#popupArea');

	popOpenBtn.click(function(){
		popupArea.show();
	});
	popCloseBtn.click(function(){
		popupArea.hide();
	});

	// admin_mobile_menu
	var adminM = $('.nav_m');
	var adminMMenu = $('.nav_m ul');
	var adminMOpenBtn = $('.btn_nav_m');
	var adminMCloseBtn = $('.btn_m_close');

	adminMOpenBtn.click(function(){
		adminM.show();
		adminMMenu.animate({'right':'0'},300);
	});
	adminMCloseBtn.click(function(){
		adminM.hide();
		adminMMenu.css('right','-250px');
	});

});
