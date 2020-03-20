// Если на проекте jQuery
$(document).ready(function () {

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

  $('.p-card').hover(

    function () { $(this).addClass('p-card--hover') },

    function () { $(this).removeClass('p-card--hover') }

  );

  $(".p-card__options .options-block__item").click(function () {
    $(this).toggleClass("selected");
    return false;
  });

  $('.slider-rang-wrap').each(function () {
    var th = $(this),
      inMinus = th.find('.minus'),
      inPlus = th.find('.plus');
    var slider = th.find(".range-slider").ionRangeSlider({
      type: "double",
      skin: "round",
      grid: false,
      min: 0,
      max: 1000,
      grid_snap: false,
      force_edges: true,
      hide_min_max: true,
      hide_from_to: true,
      // hide_grid_text: true,
      onStart: function (data) {
        inMinus.val(data.from);
        inPlus.val(data.to);
      },
      onChange: function (data) {
        inMinus.val(data.from);
        inPlus.val(data.to);
      },
      onFinish: function (data) {
        inMinus.val(data.from);
        inPlus.val(data.to);
      },
      onUpdate: function (data) {
        inMinus.val(data.from);
        inPlus.val(data.to);
      }
    });
  });

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

  // kit-carousel

  var slideCount = $('.kit-carousel__count');
  var slickSlide = $('.kit-carousel');

  slickSlide.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $(this).find('.kit-carousel__count').html('<span class="slideCountItem">' + i + '</span> ' + 'из' + ' <span class="slideCountAll">' + slick.slideCount + '</span>');
  });

  slickSlide.slick({
    slide: '.kit-card',
    slideToShow: 1,
    fade: true,
    arrows: true,
    prevArrow: '<button type="button" class="kit-carousel__btn kit-carousel__btn-prev"><img src="img/ic_arrow_forward.svg" alt="image"></button>',
    nextArrow: '<button type="button" class="kit-carousel__btn kit-carousel__btn-next"><img src="img/ic_arrow_forward.svg" alt="image"></button>',

  });

  // $('.kit-carousel').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: true,
  //   dots: false,
  //   centerMode: false,
  //   focusOnSelect: true
  // });
  // end kit-carousel


  // https://www.jqueryscript.net/time-clock/psg-countdown-timer.html
  var timer = new PsgTimer({
    selector: '#bonus-timer',
    currentDateTime: Date.UTC(2018, 0, 26, 12, 0, 0),
    endDateTime: 'UTC+02:00 26.02.2018 13:00:00',
    multilpeBlocks: true,
    animation: 'fade',
    labels: {
      days: 'Дней',
      hours: 'Часов',
      minutes: 'Минут',
      seconds: 'Секунд'
    },
    callbacks: {
      onInit: function () {
        console.log('Hello world!');
      }
    }
  });

  $('.rating.edit .star').hover(function () {
    var block = $(this).parents('.rating');
    block.find('.rating__activeline').css({ width: '0%' });
    var ind = $(this).index() + 1;
    var linew = ind / block.find('.star').length * 100;
    setrating(block, linew);
  }, function () {
    var block = $(this).parents('.rating');
    block.find('.star').removeClass('active');
    var ind = block.find('input').val();
    var linew = ind / block.find('.star').length * 100;
    setrating(block, linew);
  });
  $('.rating.edit .star').click(function (event) {
    var block = $(this).parents('.rating');
    var re = $(this).index() + 1;
    block.find('input').val(re);
    var linew = re / block.find('.star').length * 100;
    setrating(block, linew);
  });
  $.each($('.rating'), function (index, val) {
    var ind = $(this).find('input').val();
    var linew = ind / $(this).parent().find('.star').length * 100;
    setrating($(this), linew);
  });
  function setrating(th, val) {
    th.find('.rating__activeline').css({ width: val + '%' });
  }

});
