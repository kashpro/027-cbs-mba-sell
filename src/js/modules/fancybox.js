import $ from "jquery";
window.jQuery = $;
require("@fancyapps/fancybox");

function closeModals() {
  $(".js-modal-close").on("click touchstart", () => {
    $.fancybox.close(true);
  })
}

function diploms() {
  $('[data-fancybox="diploms"]').fancybox({
    loop: true,
  });
}

function modals() {
  $('.js-modal-btn').fancybox({
    smallBtn: false,
    btnTpl: {
      close: "",
    }
  });
}

function actionBtn() {
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
}

export default () => {
  closeModals();
  diploms();
  modals();
  actionBtn();
}