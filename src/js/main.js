/* Development stats */
import Development from './development.js';
if (process.env.NODE_ENV === "development") {Development.addWindowStatsElement();}

/* App styles */
import "@/scss/main.scss";

import $ from "jquery";
window.jQuery = $;
import slick from "slick-carousel";
require("@fancyapps/fancybox"); 
// import mediumZoom from 'medium-zoom';

/* Program tabs */
{{
  const $programList = document.querySelector(".js-program-list");
  const $programBox1All = document.querySelectorAll(".js-program-box1");
  const $programContentAll = document.querySelectorAll(".js-program-content");
  $programList.addEventListener("click", programListClickHandler, false);

  const programClick = new Event("click", {bubbles: true});
  $programBox1All[0].dispatchEvent(programClick);


  function programListClickHandler(e) {
    $programBox1All.forEach( (item) => {item.classList.remove("program__box1--active");} );
    // $programContentAll.forEach( (item) => {item.classList.add("fade");} );
    $programContentAll.forEach( (item) => {item.classList.add("program__content--collapse");} );
    const $programBox1 = e.target.closest(".js-program-box1");
    if ($programBox1) {
      const $content = $programBox1.nextElementSibling;
      if ($content) {$content.classList.remove("program__content--collapse");}
      // if ($content) {$content.classList.remove("fade");}
      $programBox1.classList.add("program__box1--active");
    }
  }
}}

{{
  let isOpened = false;
  let yOffset = null;
  const $speakersButton = $(".js-speakers-btn");
  // const $speakersBox = $(".js-speakers-box");
  const $speakersFirstList = $(".js-speakers-first-list");
  const $speakersSecondList = $(".js-speakers-second-list");
  $speakersButton.on("click", speakersButtonClickHandler);
  
  const $secondarySpeakers = document.querySelectorAll(".js-speakers-item");
  if (!$secondarySpeakers.length) {
    $speakersButton.classList.add("hide");
  }
  
  function speakersButtonClickHandler(e) {
     if (!isOpened) {
      yOffset = window.pageYOffset;
      isOpened = true;
      // $speakersFirstList.addClass("speakers__list--margin");
      $speakersSecondList.slideDown(300);
      $speakersButton.text('Скрыть спикеров');
    } else {
      window.scrollTo(0, yOffset);
      isOpened = false;
      // $speakersFirstList.removeClass("speakers__list--margin");
      $speakersSecondList.slideUp(300);
      $speakersButton.text('Показать больше спикеров');
    }
    // $speakersButton.classList.add("hide");
  }
}}

/* Result block slider */

{{
  const resultSlider = $(".js-result-slider").slick({
    arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		accessibility: false,
		prevArrow: $(".js-result-prev"),
    nextArrow: $(".js-result-next"),
	  infinite: true,
	  speed: 500,
	  pauseOnFocus: true,
	  pauseOnHover: false,
  });
}}

/* Result block slider */
{{
  const feedbackSlider = $(".js-feedback-slider").slick({
    arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		prevArrow: $(".js-feedback-prev"),
    nextArrow: $(".js-feedback-next"),
	  infinite: true,
  });
}}



/* Countdown */
{{

  const $countdown = document.querySelector(".js-countdown");
  // console.log($countdown.dataset.to);
  const targetDate = new Date($countdown.dataset.to).getTime();
  // console.log(targetDate);
  const $days = document.querySelector(".js-countdown-days");
  const $hours = document.querySelector(".js-countdown-hours");
  const $minutes = document.querySelector(".js-countdown-minutes");
  const $seconds = document.querySelector(".js-countdown-seconds");

  const $daysLabel = document.querySelector(".js-countdown-days-label");
  const $hoursLabel = document.querySelector(".js-countdown-hours-label");
  const $minutesLabel = document.querySelector(".js-countdown-minutes-label");
  const $secondsLabel = document.querySelector(".js-countdown-seconds-label");
  
  let timer = setInterval( () => {
    const now = Date.now();
    const diff = (targetDate - now)/1000;
    if (diff < 0) {
      clearInterval(timer);
      return;
    }
    let days = Math.floor(diff/3600/24);
    let hours = Math.floor(diff/3600%24);
    let minutes = Math.floor(diff/60%60);
    let seconds = Math.floor(diff%60);
    
    const daysLabel = declOfNum(days, ['День', 'Дня', 'Дней']);
    const hoursLabel = declOfNum(hours, ['Час', 'Часа', 'Часов']);
    const minutesLabel = declOfNum(minutes, ['Минута', 'Минуты', 'Минут']);
    const secondsLabel = declOfNum(seconds, ['Секунда', 'Секунды', 'Секунд']);
    
    days = `${days}`;
    hours < 10 ? hours = `0${hours}` : hours = `${hours}`;
    minutes < 10 ? minutes = `0${minutes}` : minutes = `${minutes}`;
    seconds < 10 ? seconds = `0${seconds}` : seconds = `${seconds}`;
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = seconds;

    $daysLabel.innerHTML = daysLabel;
    $hoursLabel.innerHTML = hoursLabel;
    $minutesLabel.innerHTML = minutesLabel;
    $secondsLabel.innerHTML = secondsLabel;
  }, 1000 );

  function declOfNum(n, textForms) {  
    n = Math.abs(n) % 100;
    const n1 = n % 10;
    if (n > 10 && n < 20) { return textForms[2]; }
    if (n1 > 1 && n1 < 5) { return textForms[1]; }
    if (n1 == 1) { return textForms[0]; }
    return textForms[2];
  }
}}
{{
  /* increment digits */
  !function(t){t.extend(t.easing,{spincrementEasing:function(t,a,e,n,r){return a===r?e+n:n*(-Math.pow(2,-10*a/r)+1)+e}}),t.fn.spincrement=function(a){function e(t,a){if(t=t.toFixed(a),a>0&&"."!==r.decimalPoint&&(t=t.replace(".",r.decimalPoint)),r.thousandSeparator)for(;o.test(t);)t=t.replace(o,"$1"+r.thousandSeparator+"$2");return t}var n={from:0,to:null,decimalPlaces:null,decimalPoint:".",thousandSeparator:",",duration:1e3,leeway:50,easing:"spincrementEasing",fade:!0,complete:null},r=t.extend(n,a),o=new RegExp(/^(-?[0-9]+)([0-9]{3})/);return this.each(function(){var a=t(this),n=r.from;a.attr("data-from")&&(n=parseFloat(a.attr("data-from")));var o;if(a.attr("data-to"))o=parseFloat(a.attr("data-to"));else if(null!==r.to)o=r.to;else{var i=t.inArray(r.thousandSeparator,["\\","^","$","*","+","?","."])>-1?"\\"+r.thousandSeparator:r.thousandSeparator,l=new RegExp(i,"g");o=parseFloat(a.text().replace(l,""))}var c=r.duration;r.leeway&&(c+=Math.round(r.duration*(2*Math.random()-1)*r.leeway/100));var s;if(a.attr("data-dp"))s=parseInt(a.attr("data-dp"),10);else if(null!==r.decimalPlaces)s=r.decimalPlaces;else{var d=a.text().indexOf(r.decimalPoint);s=d>-1?a.text().length-(d+1):0}a.css("counter",n),r.fade&&a.css("opacity",0),a.animate({counter:o,opacity:1},{easing:r.easing,duration:c,step:function(t){a.html(e(t*o,s))},complete:function(){a.css("counter",null),a.html(e(o,s)),r.complete&&r.complete(a)}})})}}(jQuery);

  let done = false;
	const target = $('.js-stats-list');

	let initSpincrement = function() {
		$(".js-spincrement").each(
			function(){
				$(this).spincrement({
					//from: $(this).attr('data-from'),
					to: parseFloat($(this).attr('data-to')) || null,
          duration: parseInt($(this).attr('data-time')) || 1000,
          from: 0,
				});
			}
		);
		done = true;
	}
	if (!done && $(window).scrollTop() > target.position().top - $(window).height()) {
			initSpincrement();
		}
	$(window).on('scroll resize', function() {
		if (!done && $(window).scrollTop() > target.position().top - $(window).height()) {
			initSpincrement();
		}
	});
}}

/* fancybox */
{{
  /* закрывашки */
  $(".js-modal-close").on("click touchstart", () => {
    // console.log(111);
    $.fancybox.close(true);
  })
  /* дипломы */
  $('[data-fancybox="diploms"]').fancybox({
    loop: true,
  });
  /* модалки */
  $('.js-modal-btn').fancybox({
    smallBtn: false,
    btnTpl: {
      close: "",
    }
  });
  /* видео - на атрибутах, без опций */

  /* для теста - попапы в зависимости от ответа сервера */
  const options = {
    smallBtn: false,
    btnTpl: {
      close: "",
    }
  };
  $(".js-action-btn").on("click", (e) => {
    e.preventDefault();
    const rnd = Math.random();
    if (rnd > 0.5) {
      $.fancybox.open({
        src: '#js-modal-success',
        ...options,
      });
    } else {
      $.fancybox.open({
        src: '#js-modal-error',
        ...options,
      });
    }
  });
}}