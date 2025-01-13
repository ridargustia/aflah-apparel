import HeaderComponent from "@/views/components/atoms/HeaderComponent";
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
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:px-10 px-0 py-20">
        <Image
          width={200}
          height={200}
          className="w-full size-40 object-cover rounded-md"
          src={exampleGallery1}
          alt="Gallery Image"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        />
        <Image
          width={200}
          height={200}
          className="w-full size-40 object-cover rounded-md"
          src={exampleGallery2}
          alt="Gallery Image"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        />
        <Image
          width={200}
          height={200}
          className="w-full size-40 object-cover rounded-md"
          src={exampleGallery3}
          alt="Gallery Image"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        />
        <Image
          width={200}
          height={200}
          className="w-full size-40 object-cover rounded-md"
          src={exampleGallery4}
          alt="Gallery Image"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        />
        <Image
          width={200}
          height={200}
          className="w-full size-40 object-cover rounded-md"
          src={exampleGallery5}
          alt="Gallery Image"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        />
        <Image
          width={200}
          height={200}
          className="w-full size-40 object-cover rounded-md"
          src={exampleGallery6}
          alt="Gallery Image"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="600"
        />
        <Image
          width={200}
          height={200}
          className="w-full size-40 object-cover rounded-md"
          src={exampleGallery7}
          alt="Gallery Image"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="700"
        />
        <Image
          width={200}
          height={200}
          className="w-full size-40 object-cover rounded-md"
          src={exampleGallery1}
          alt="Gallery Image"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="800"
        />
        <Image
          width={200}
          height={200}
          className="w-full size-40 object-cover rounded-md"
          src={exampleGallery2}
          alt="Gallery Image"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="900"
        />
        <Image
          width={200}
          height={200}
          className="w-full size-40 object-cover rounded-md"
          src={exampleGallery3}
          alt="Gallery Image"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
        />
        <Image
          width={200}
          height={200}
          className="w-full size-40 object-cover rounded-md"
          src={exampleGallery4}
          alt="Gallery Image"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1100"
        />
        <Image
          width={200}
          height={200}
          className="w-full size-40 object-cover rounded-md"
          src={exampleGallery5}
          alt="Gallery Image"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1200"
        />
      </div>
    </AppShell>
  );
};

export default GalleryPage;
