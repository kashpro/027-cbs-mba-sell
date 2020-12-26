import $ from "jquery";

export default () => {
  let isOpened = false;
  let yOffset = null;
  const $speakersButton = $(".js-speakers-btn");
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
      $speakersSecondList.slideDown(300);
      $speakersButton.text('Скрыть спикеров');
    } else {
      window.scrollTo(0, yOffset);
      isOpened = false;
      $speakersSecondList.slideUp(300);
      $speakersButton.text('Показать больше спикеров');
    }
  }
}