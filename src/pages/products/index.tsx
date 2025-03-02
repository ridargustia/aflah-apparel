import AppShell from "@/views/containers/templates/AppShell";
import Image from "next/image";
import React from "react";
import exampleGallery1 from "../../../public/assets/images/gallery/kelas-1.jpg";
import exampleGallery2 from "../../../public/assets/images/gallery/kelas-2.jpg";
import exampleGallery3 from "../../../public/assets/images/gallery/kelas-3.jpg";
import exampleGallery4 from "../../../public/assets/images/gallery/kelas-4.jpg";
import exampleGallery5 from "../../../public/assets/images/gallery/kelas-5.jpg";
import exampleGallery6 from "../../../public/assets/images/gallery/kelas-6.jpg";
import exampleGallery7 from "../../../public/assets/images/gallery/kelas-7.jpg";
import { product } from "@/utils/data/static";

const images: any = {
  exampleGallery1: exampleGallery1,
  exampleGallery2: exampleGallery2,
  exampleGallery3: exampleGallery3,
  exampleGallery4: exampleGallery4,
  exampleGallery5: exampleGallery5,
  exampleGallery6: exampleGallery6,
  exampleGallery7: exampleGallery7,
};

const ProductsPage = () => {
  return (
    <AppShell>
      <div className="md:px-10 px-0 pt-10">
        <div className="flex flex-col items-center">
          <h2
            className="text-3xl text-center font-bold tracking-wide text-blue-950"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Our Products
          </h2>
          <p
            className="mt-4 max-w-[25rem] text-center font-medium text-gray-500 text-sm"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-tooltip-id="image-tooltip"
            data-tooltip-content="T13"
            data-tooltip-place="bottom"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus.
          </p>
        </div>
        <div className="mt-16 flex flex-wrap flex-row justify-start w-full h-auto">
          {product?.map((data: any) => (
            <div
              key={data.id}
              className="lg:w-1/4 md:w-1/3 w-1/2 lg:px-2 sm:px-1 px-0.5 sm:py-9 py-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={data.id * 100}
              data-tooltip-id="image-tooltip"
              data-tooltip-content="T14 - Product List"
              data-tooltip-place="bottom"
            >
              <div className="w-full max-w-full">
                <Image
                  src={images[data.image]}
                  alt="gallery"
                  width={200}
                  height={200}
                  className="rounded-md bg-cover bg-center w-full lg:h-64 md:h-48 h-40"
                />
                <h4 className="sm:mt-4 mt-2 sm:text-base text-sm font-semibold leading-relaxed text-gray-700">
                  {data.title}
                </h4>
                <div className="sm:mt-2 mt-1 sm:text-sm text-xs font-medium text-gray-500">
                  {data.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
};

export default ProductsPage;
