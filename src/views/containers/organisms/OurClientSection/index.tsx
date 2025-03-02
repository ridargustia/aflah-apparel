import Image from "next/image";
import React from "react";
import exampleGallery1 from "../../../../../public/assets/images/gallery/kelas-1.jpg";
import exampleGallery2 from "../../../../../public/assets/images/gallery/kelas-2.jpg";
import exampleGallery3 from "../../../../../public/assets/images/gallery/kelas-3.jpg";
import exampleGallery4 from "../../../../../public/assets/images/gallery/kelas-4.jpg";
import exampleGallery5 from "../../../../../public/assets/images/gallery/kelas-5.jpg";
import exampleGallery6 from "../../../../../public/assets/images/gallery/kelas-6.jpg";
import exampleGallery7 from "../../../../../public/assets/images/gallery/kelas-7.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { ourClient } from "@/utils/data/static";

const images: any = {
  exampleGallery1: exampleGallery1,
  exampleGallery2: exampleGallery2,
  exampleGallery3: exampleGallery3,
  exampleGallery4: exampleGallery4,
  exampleGallery5: exampleGallery5,
  exampleGallery6: exampleGallery6,
  exampleGallery7: exampleGallery7,
};

const OurClientSection = () => {
  return (
    <div id="product-section">
      <div className="transform-none">
        <div className="relative">
          <div className="lg:py-24 py-16 mx-auto max-w-[1280px]">
            <div className="flex flex-col items-center">
              <h2 className="md:text-4xl text-3xl text-center font-bold tracking-wide text-blue-950 uppercase">
                Our Client
              </h2>
              <p
                className="md:text-lg text-base mt-4 max-w-[25rem] text-center font-medium text-gray-500"
                data-tooltip-id="image-tooltip"
                data-tooltip-content="T11"
                data-tooltip-place="bottom"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
            <div className="mt-16 flex flex-wrap flex-row md:justify-between justify-center w-full h-auto">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                  },
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 5,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                  992: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                  },
                  1200: {
                    slidesPerView: 5,
                    spaceBetween: 15,
                  },
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {ourClient.map((data) => {
                  return (
                    <SwiperSlide key={data.id}>
                      <div className="max-w-full">
                        <Image
                          src={images[data.image]}
                          alt="gallery"
                          width={200}
                          height={200}
                          className="rounded-md bg-cover bg-center w-full xl:h-60 md:h-48 h-44"
                          data-tooltip-id="image-tooltip"
                          data-tooltip-content="A8"
                          data-tooltip-place="bottom"
                        />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          <svg
            width="600"
            height="600"
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0 -z-10 w-48 h-48 opacity-15 -translate-x-32 md:scale-100 scale-75"
          >
            <g transform="translate(300,300)">
              <path
                d="M125,-160.4C159.9,-146.7,184.6,-107.3,178.8,-70.9C173.1,-34.4,137,-0.8,128.8,47.3C120.7,95.5,140.6,158.2,123.8,198.4C107,238.6,53.5,256.3,5.4,248.9C-42.7,241.5,-85.4,208.9,-112.7,172.1C-140,135.3,-151.8,94.2,-146.3,59.7C-140.8,25.1,-117.9,-2.9,-104,-30.1C-90.1,-57.3,-85,-83.7,-69.1,-103.5C-53.3,-123.4,-26.6,-136.7,9.2,-149.4C45.1,-162,90.1,-174,125,-160.4Z"
                fill="#FFB4BC"
              ></path>
            </g>
          </svg>
          <svg
            width="600"
            height="600"
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 right-0 -z-10 w-48 h-48 opacity-15 translate-x-36 md:scale-90 scale-75"
          >
            <g transform="translate(300,300)">
              <path
                d="M176.2,-106.9C208.7,-45.5,201.8,33.5,165.8,99.4C129.9,165.3,65,218.2,-9.2,223.5C-83.4,228.8,-166.9,186.7,-201.6,121.4C-236.4,56.2,-222.6,-32.2,-180.9,-98.9C-139.1,-165.7,-69.6,-210.8,1.2,-211.5C71.9,-212.2,143.8,-168.3,176.2,-106.9Z"
                fill="#6415ff"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default OurClientSection;
