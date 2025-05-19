import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import { MainPage } from '../../pages/MainPage';
import { SecondPage } from '../../pages/SecondPage';
import { ThirdPage } from '../../pages/ThirdPage';
import '../Carousel/carousel.css';
import { Lines } from '../../app/widgets/lines/Lines';

export default function MySwiper() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [rotation, setRotation] = useState(0);
  const [navigationReady, setNavigationReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    checkMobile(); // run on mount

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      setNavigationReady(true);
    }
  }, []);

  return (
    <div className="swiper-wrapper-with-buttons">
      <Lines rotate={rotation} />

      {(navigationReady || isMobile) && (
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={!isMobile ? {
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          } : false}
          pagination={isMobile ? { clickable: true } : false}
          onSlideChange={() => {
            setRotation((prev) => prev + 120);
          }}
        >
          <SwiperSlide><MainPage /></SwiperSlide>
          <SwiperSlide><SecondPage /></SwiperSlide>
          <SwiperSlide><ThirdPage /></SwiperSlide>
        </Swiper>
      )}

      {!isMobile && (
        <div className="custom-navigation-vertical">
          <button ref={prevRef} className="custom-swiper-button">{"<"}</button>
          <button ref={nextRef} className="custom-swiper-button">{">"}</button>
        </div>
      )}
    </div>
  );
}
