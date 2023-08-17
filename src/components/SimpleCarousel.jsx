import Slider from "react-slick";
import styles from "../components/Home.module.css";

export default function SimpleCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div></div>
      <div></div>
    </Slider>
  );
}
