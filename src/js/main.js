/* Development stats */
import Development from './development.js';
if (typeof cfg != "undefined" && cfg.showStats === true) {Development.addWindowStatsElement();}

/* App styles */
import "@/scss/main.scss";

import $ from "jquery";
import slick from "slick-carousel";

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

/* Modals */
{{
  /* Modal components*/
  const $gift = document.querySelector(".js-modal-gift");
  const $consult = document.querySelector(".js-modal-consult");
  const $plan = document.querySelector(".js-modal-plan");
  const $discount = document.querySelector(".js-modal-discount");
  const $components = [$gift, $consult, $plan, $discount];

  /* Init */
  const $modal = document.querySelector(".js-modal");
  const $modalClose = document.querySelector(".js-modal-close");
  const $modalComponent = document.querySelector(".js-modal-component");
  $components.forEach( item => {
    if (item) {
      item.classList.add("hide");
      $modalComponent.append(item);
    }
  } );

  $modal.addEventListener("click", closeModalSelf);
  $modalClose.addEventListener("click", closeModal);

  /* Functions */
  function openModal($component) {
    $components.forEach( item => {
      if (item) {
        item.classList.add("hide");
      }
    } );
    $component.classList.remove("hide");
    $modal.classList.add("modal--show");
    window.addEventListener("keyup", closeModalKeyboard); 
  }

  function closeModal() {
    $modal.classList.remove("modal--show");
    window.removeEventListener("keyup", closeModalKeyboard); 
  }
  
  function closeModalSelf(e) {
    if (e.target == this) {closeModal();}
  }

  function closeModalKeyboard(e) {
    if (e.code === "Escape" || e.keyCode === 27) {
      closeModal();
    }
  }

  /* Buttons actions */
  const $consultButtons = document.querySelectorAll(".js-btn-consult");
  $consultButtons.forEach( item => {item.addEventListener( "click", () => {openModal($consult);} );} );

  // const $giftButtons = document.querySelectorAll(".js-btn-gift");
  // $giftButtons.forEach( item => {item.addEventListener( "click", () => {openModal($gift);} );} );
  
  const $discountButtons = document.querySelectorAll(".js-btn-discount");
  $discountButtons.forEach( item => {item.addEventListener( "click", () => {openModal($discount);} );} );

  const $planButtons = document.querySelectorAll(".js-btn-plan");
  $planButtons.forEach( item => {item.addEventListener( "click", () => {openModal($plan);} );} );

  // openModal($discount);
}}

/* youtube video */
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.player;

const $video = document.querySelector(".js-video");
//клик на тумане - уничтожить плеер
$video.addEventListener("click", function(e) {
 if (e.target == this) {
    //уничтожить плеер
    window.player.stopVideo();
    window.player.destroy();
    // window.player.clearVideo();
    //закрыть модал
    $video.classList.remove("video--show");
 }
});

const $videoButtons = document.querySelectorAll(".js-video-btn");
$videoButtons.forEach( item => {item.addEventListener( "click", (e) => {
  $video.classList.add("video--show");
  //слушатели esc
  window.addEventListener("keyup", (e) => {
    if (e.code === "Escape" || e.keyCode === 27) {
      //уничтожить плеер
      window.player.stopVideo();
      window.player.destroy();
      // window.player.clearVideo();
      //закрыть модал
      $video.classList.remove("video--show");
    }
  }); 
   
   

  try {
    window.player = new YT.Player("yt-player", {
      videoId: e.target.dataset.id,
      width: "960",
      height: "540",
      events: {
        'onReady': e => window.player.playVideo(),
      },
  });
  } catch (err) {
    alert(err.message);
  } 
} );} );


// function onYouTubeIframeAPIReady() {
//   window.player2 = new YT.Player('player', {
//     // height: '360',
//     // width: '640',
//     videoId: 'g-uF6uHgMYw',
//     events: {
//       'onReady': () => player2.playVideo(), 
//       // 'onStateChange': onPlayerStateChange
//     }
//   });
// }

/* Show more speakers button */
{{
  const $speakersButton = document.querySelector(".js-speakers-btn");
  const $speakersBox = document.querySelector(".js-speakers-box");
  const $speakersList = document.querySelector(".js-speakers-list");
  $speakersButton.addEventListener("click", speakersButtonClickHandler, false);
  
  function speakersButtonClickHandler(e) {
    $speakersButton.classList.add("hide");
    $speakersList.classList.remove("speakers__list1--hide");
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
	  // autoplay: true,
	  // autoplaySpeed: 5000,
	  infinite: true,
	  speed: 500,
	  pauseOnFocus: true,
	  pauseOnHover: false,
		// responsive: [
			// {
			// 	breakpoint: 1071,
			// 	settings: {
			// 		slidesToShow: 3,
			// 		slidesToScroll: 3,
			// 	},
			// },
			// {
			// 	breakpoint: 851,
			// 	settings: {
			// 		slidesToShow: 2,
			// 		slidesToScroll: 2,
			// 	},
			// },
			// {
			// 	breakpoint: 451,
			// 	settings: {
			// 		slidesToShow: 1,
			// 		slidesToScroll: 1,
			// 	},
			// },
		// ],
  });
}}

/* Result block slider */
{{
  const feedbackSlider = $(".js-feedback-slider").slick({
    arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		// accessibility: false,
		prevArrow: $(".js-feedback-prev"),
    nextArrow: $(".js-feedback-next"),
	  // autoplay: true,
	  // autoplaySpeed: 5000,
	  infinite: true,
	  // speed: 500,
	  // pauseOnFocus: true,
    // pauseOnHover: false,
    // centerMode: true,
    // variableWidth: true,
		// responsive: [
			// {
			// 	breakpoint: 1071,
			// 	settings: {
			// 		slidesToShow: 3,
			// 		slidesToScroll: 3,
			// 	},
			// },
			// {
			// 	breakpoint: 851,
			// 	settings: {
			// 		slidesToShow: 2,
			// 		slidesToScroll: 2,
			// 	},
			// },
			// {
			// 	breakpoint: 451,
			// 	settings: {
			// 		slidesToShow: 1,
			// 		slidesToScroll: 1,
			// 	},
			// },
		// ],
  });
}}



/* Countdown */
{{
  const targetDate = cfg.countdownTargetDate.getTime();
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
    let days = Math.round(diff/3600/24);
    let hours = Math.round(diff/3600%24);
    let minutes = Math.round(diff/60%60);
    let seconds = Math.round(diff%60);
    
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