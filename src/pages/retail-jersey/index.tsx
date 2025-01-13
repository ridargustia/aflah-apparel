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

const RetailJerseyPage = () => {
  return (
    <AppShell>
      <div className="md:px-10 px-0 pt-10">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl text-center font-bold tracking-wide text-blue-950">
            Retail Jersey
          </h2>
          <p className="mt-4 max-w-[25rem] text-center font-medium text-gray-500 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus.
          </p>
        </div>
        <div className="mt-16 flex flex-wrap flex-row sm:justify-start justify-center w-full h-auto">
          {product?.map((data: any) => (
            <div
              key={data.id}
              className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full lg:px-2 sm:px-1 px-0 py-9"
            >
              <div className="w-full max-w-full">
                <Image
                  src={images[data.image]}
                  alt="gallery"
                  width={200}
                  height={200}
                  className="rounded-md bg-cover bg-center w-full h-64"
                />
                <div className="mt-4 text-sm font-medium text-gray-500">
                  {data.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </div>
                <h4 className="mt-2 text-base font-semibold leading-relaxed text-gray-700">
                  {data.desc}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
};

export default RetailJerseyPage;
