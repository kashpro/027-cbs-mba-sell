import $ from "jquery";
import slick from "slick-carousel";

export default () => {
  const feedbackSlider = $(".js-feedback-slider").slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    prevArrow: $(".js-feedback-prev"),
    nextArrow: $(".js-feedback-next"),
    infinite: true,
  });
}