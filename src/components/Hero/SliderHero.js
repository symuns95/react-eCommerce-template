import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from "swiper/core";

// animation
import AOS from "aos";
import "aos/dist/aos.css";

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

AOS.init({
  duration: 1200,
});
const sliderInfo = [
  { image: "macbook-1.jpeg", subHeading: "Say Hello The future.", heading: "Mackbook Pro", btn: "Buy Now" },

  { image: "phone.jpeg", subHeading: "Say Hello The future.", heading: "IPhone XS", btn: "Buy Now" },
];

function SliderHero() {
  // const [sliderIndex, setSliderIndex] = useState(0);
  // const [changeIndex, setChangeIndex] = useState(2);
  // console.log(sliderIndex);
  // console.log(changeIndex);

  return (
    <>
      <Swiper
        // onSwiper={setSliderIndex}
        // onSlideChange={() => setChangeIndex(sliderIndex)}
        // grabCursor={true}
        centeredSlides={true}
        pagination={true}
        loop={true}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        className="slider-hero-main"
      >
        {sliderInfo.map((item, i) => {
          const { image, subHeading, heading, btn } = item;
          return (
            <SwiperSlide
              key={i}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.3)) ,url("/images/${image}")`,
              }}
              className="slider-hero"
            >
              <div className="section-hero-container container" data-aos="fade-right">
                <div className="row row-section-hero ">
                  <div className="section-hero-info text-center md:text-left">
                    <h2 className="section-hero-sub-heading text-gray-300 font-semibold md:mb-5 text-2xl ">{subHeading}</h2>
                    <h1 className="section-hero-heading  text-white xl:text-7xl md:mb-5 mb-3 font-bold "> {heading}</h1>
                    <div className="section-hero-btn px-8 py-3 text-white">{btn}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
export default SliderHero;
