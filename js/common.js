//NAVI SP
$(function() {
	$('#sp-menu').click(function(){
		$(".menu-icon").toggleClass('active');
		$("#navMenu ul").slideToggle(800);
	});
});

//NAVI CHANGE
$(function(){
	$('#navMenu ul li').each(function(){
		$('a', this).attr({ 
			'data-label': $('img', this).attr('alt')
		});
	});
});