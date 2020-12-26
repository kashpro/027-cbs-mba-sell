export default () => {
  const $programList = document.querySelector(".js-program-list");
  const $programBox1All = document.querySelectorAll(".js-program-box1");
  const $programContentAll = document.querySelectorAll(".js-program-content");
  $programList.addEventListener("click", programListClickHandler, false);

  const programClick = new Event("click", {bubbles: true});
  $programBox1All[0].dispatchEvent(programClick);

  function programListClickHandler(e) {
    $programBox1All.forEach( (item) => {item.classList.remove("program__box1--active");} );
    $programContentAll.forEach( (item) => {item.classList.add("program__content--collapse");} );
    const $programBox1 = e.target.closest(".js-program-box1");
    if ($programBox1) {
      const $content = $programBox1.nextElementSibling;
      if ($content) {$content.classList.remove("program__content--collapse");}
      $programBox1.classList.add("program__box1--active");
    }
  }
}