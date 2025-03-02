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
import { gallery } from "@/utils/data/static";

const images: any = {
  exampleGallery1: exampleGallery1,
  exampleGallery2: exampleGallery2,
  exampleGallery3: exampleGallery3,
  exampleGallery4: exampleGallery4,
  exampleGallery5: exampleGallery5,
  exampleGallery6: exampleGallery6,
  exampleGallery7: exampleGallery7,
};

const GalleryPage = () => {
  return (
    <AppShell>
      <div className="flex flex-col items-center md:px-10 px-0 pt-10">
        <h2
          className="text-3xl text-center font-bold tracking-wide text-blue-950"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Our Gallery
        </h2>
        <p
          className="mt-4 max-w-[25rem] text-center font-medium text-gray-500 text-sm"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-tooltip-id="image-tooltip"
          data-tooltip-content="T16"
          data-tooltip-place="bottom"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus.
        </p>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-2 gap-1 lg:px-20 md:px-8 px-0 py-20">
        {gallery.map((data: any) => (
          <Image
            key={data.id}
            width={200}
            height={200}
            className="w-full lg:h-56 md:h-44 h-40 object-cover rounded-md"
            src={images[data.image]}
            alt={data.title}
            data-tooltip-id="image-tooltip"
            data-tooltip-content="A9"
            data-tooltip-place="bottom"
          />
        ))}
      </div>
    </AppShell>
  );
};

export default GalleryPage;
