import React from "react";
// importamos swiper de react component
import { Swiper, SwiperSlide } from "swiper/react";
// importamos los estilos de swiper
import "swiper/css";
import "swiper/css/effect-fade";
// importamos los modulos requeridos
import { EffectFade, Autoplay } from "swiper";
// imagenes
import Img1 from "../assets/img/heroSlider/1.jpg";
import Img2 from "../assets/img/heroSlider/2.jpg";
import Img3 from "../assets/img/heroSlider/3.jpg";

const slides = [
  {
    title: "Your Luxury Hotel for Vacation",
    bg: Img1,
    btnText: "See our Rooms",
  },
  {
    title: "Your Luxury Hotel for Vacation",
    bg: Img2,
    btnText: "See our Rooms",
  },
  {
    title: "Your Luxury Hotel for Vacation",
    bg: Img3,
    btnText: "See our Rooms",
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect="fade"
      loop={true}
      autoplay = {{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="heroSlider h-[600px] lg:h-[860px]"
    >
      {slides.map((slide, index) => {
        // destructuramos el slide
        const { title, bg, btnText } = slide;
        return (
          <SwiperSlide
            className="w-full h-full relative flex justify-center items-center"
            key={index}
          >
            <div className="z-20 text-white text-center lg:h-[600px]">
              <div className="uppercase font-tertiary tracking-[6px] mb-5 top-0">
                Just Enjoy and Relax
              </div>
              <h1 className="text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6">
                {title}
              </h1>
              <button className="btn btn-lg btn-primary mx-auto">
                {btnText}
              </button>
            </div>
            <div className="absolute top-0 w-full h-full">
              <img
                className="object-cover w-full h-full"
                src={bg}
                alt="fondo del slides"
              />
            </div>
            {/* overlay */}
            <div className="absolute w-full h-full bg-black/70 "></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
