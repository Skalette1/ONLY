
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

import { MainPage } from '../../pages/MainPage';
import { SecondPage } from '../../pages/SecondPage';
import { ThirdPage } from '../../pages/ThirdPage';
import '../Carousel/carousel.css'
import { Lines } from '../../app/widgets/lines/Lines';

// .
export default function MySwiper() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [rotation, setRotation] = useState(0);

  return (
    <div className="swiper-wrapper-with-buttons">
      <Lines rotate={rotation} />

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSlideChange={() => {
          setRotation((prev) => prev + 120);
        }}
      >
        <SwiperSlide><MainPage /></SwiperSlide>
        <SwiperSlide><SecondPage /></SwiperSlide>
        <SwiperSlide><ThirdPage /></SwiperSlide>
      </Swiper>

      <div className="custom-navigation-vertical">
        <button ref={prevRef} className="custom-swiper-button">{"<"}</button>
        <button ref={nextRef} className="custom-swiper-button">{">"}</button>
      </div>
    </div>
  );
}
