import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import "./styes.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const AdvancedSlider = ({ images }) => {
  return (
    <div className="h-screen w-screen bg-black">
      <Swiper
        direction="vertical"
        spaceBetween={0}
        slidesPerView={1}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Mousewheel]}
        className="h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-screen w-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AdvancedSlider;
