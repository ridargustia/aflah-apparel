import Image from "next/image";
import React from "react";
import exampleGallery1 from "../../../../../public/assets/images/gallery/kelas-1.jpg";
import exampleGallery2 from "../../../../../public/assets/images/gallery/kelas-2.jpg";
import exampleGallery3 from "../../../../../public/assets/images/gallery/kelas-3.jpg";
import "swiper/css";
import "swiper/css/pagination";
import { whyAflah } from "@/utils/data/static";

const images: any = {
  exampleGallery1: exampleGallery1,
  exampleGallery2: exampleGallery2,
  exampleGallery3: exampleGallery3,
};

const WhySection = () => {
  return (
    <div id="product-section">
      <div className="transform-none">
        <div className="relative">
          <div className="lg:py-24 py-16 mx-auto max-w-[1280px]">
            <div className="flex flex-col items-center">
              <h2 className="md:text-5xl text-3xl text-center font-bold tracking-wide text-blue-950 uppercase">
                Why Aflah?
              </h2>
              <p
                className="md:text-lg text-base mt-4 max-w-[25rem] text-center font-medium text-gray-500"
                data-tooltip-id="image-tooltip"
                data-tooltip-content="T7"
                data-tooltip-place="bottom"
              >
                Kenapa harus di Aflah?
              </p>
            </div>
            <div className="mt-16 flex flex-wrap flex-row sm:justify-start justify-center w-full h-auto lg:px-12 px-0">
              {whyAflah?.map((data: any) => (
                <div
                  key={data.id}
                  className="md:w-1/3 sm:w-1/2 w-full lg:px-3 sm:px-1 px-0 py-9"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={data.id * 100}
                >
                  <div className="w-full max-w-full">
                    <Image
                      src={images[data.image]}
                      alt="gallery"
                      width={200}
                      height={200}
                      className="rounded-md bg-cover bg-center w-full lg:h-64 h-60"
                      data-tooltip-id="image-tooltip"
                      data-tooltip-content={data.codeImage}
                      data-tooltip-place="bottom"
                    />
                    <h4
                      className="mt-4 text-base font-semibold leading-relaxed text-gray-700"
                      data-tooltip-id="image-tooltip"
                      data-tooltip-content={data.codeTitle}
                      data-tooltip-place="bottom"
                    >
                      {data.title}
                    </h4>
                    <div
                      className="mt-2 text-sm font-medium text-gray-500"
                      data-tooltip-id="image-tooltip"
                      data-tooltip-content={data.codeTitle}
                      data-tooltip-place="bottom"
                    >
                      {data.desc}
                    </div>
                  </div>
                </div>
              ))}
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

export default WhySection;
