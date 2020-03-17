// Если на проекте jQuery
$( document ).ready(function() {

    	// закрыть/открыть мобильное меню
	var toggMnu = $(".toggle-mnu").click(function () {

		// $(this).toggleClass("on");
		// $(".toggle-mnu-2").toggleClass("on");
		// $("body").toggleClass("fixed");
		$(".hidden-mnu").toggleClass("active");
		$("body, html").toggleClass("fixed");
		return false;
	});

	$(document).mouseup(function (e) {
		var container = $(".hidden-mnu.active");
		if (container.has(e.target).length === 0) {
			$(".toggle-mnu-1").removeClass("on");
			// $("body").toggleClass("fixed");
			$(".hidden-mnu").removeClass("active");
			$("body, html").removeClass("fixed");
		}
	});

	// /закрыть/открыть мобильное меню

    // main-slider
    $('.main-slider__carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.main-slider__nav',
        responsive: [
            {
              breakpoint: 1199,
              settings: {
                arrows: false,
                dots: true
              }
            }
          ]
        });
    $('.main-slider__nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.main-slider__carousel',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 1199,
              settings: {

              }
            }
          ]
    });
    // end main-slider

    // options-carousel
    $('.options-carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        centerMode: true,
        focusOnSelect: true
      });
    // end options-carousel

    $('.rating.edit .star').hover(function() {
        var block=$(this).parents('.rating');
    block.find('.rating__activeline').css({width:'0%'});
        var ind=$(this).index()+1;
        var linew=ind/block.find('.star').length*100;
    setrating(block,linew);
},function() {
        var block=$(this).parents('.rating');
    block.find('.star').removeClass('active');
        var ind=block.find('input').val();
        var linew=ind/block.find('.star').length*100;
    setrating(block,linew);
});
$('.rating.edit .star').click(function(event) {
        var block=$(this).parents('.rating');
        var re=$(this).index()+1;
        block.find('input').val(re);
        var linew=re/block.find('.star').length*100;
    setrating(block,linew);
});
$.each($('.rating'), function(index, val) {
        var ind=$(this).find('input').val();
        var linew=ind/$(this).parent().find('.star').length*100;
    setrating($(this),linew);
});
function setrating(th,val) {
    th.find('.rating__activeline').css({width:val+'%'});
}

});
