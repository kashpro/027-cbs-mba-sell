/* Development stats */
import Development from './development.js';
if (typeof cfg != "undefined" && cfg.showStats === true) {Development.addWindowStatsElement();}

/* App styles */
import "@/scss/main.scss";

//program tabs
{{
  const $programList = document.querySelector(".js-program-list");
  const $programBox1All = document.querySelectorAll(".js-program-box1");
  const $programContentAll = document.querySelectorAll(".js-program-content");
  $programList.addEventListener("click", programListClickHandler, false);

  function programListClickHandler(e) {
    // console.log(e.target);
    // console.log(e.target.closest(".js-program-box1"));
    $programBox1All.forEach( (item) => {item.classList.remove("program__box1--active");});
    $programContentAll.forEach( (item) => {item.classList.add("fade");});
    const $programBox1 = e.target.closest(".js-program-box1");
    if ($programBox1) {
      const $content = $programBox1.nextElementSibling;
      if ($content) {$content.classList.remove("fade");}
      // console.log($content);
      $programBox1.classList.add("program__box1--active");
    }
  }

  

}}