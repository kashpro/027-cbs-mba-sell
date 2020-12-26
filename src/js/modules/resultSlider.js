import $ from "jquery";
import slick from "slick-carousel";

export default () => {
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
}


