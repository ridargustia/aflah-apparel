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
        <h2 className="text-3xl text-center font-bold tracking-wide text-blue-950">
          Our Gallery
        </h2>
        <p className="mt-4 max-w-[25rem] text-center font-medium text-gray-500 text-sm">
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
        />
        <Image
          width={200}
          height={200}
          className="w-full size-40 object-cover rounded-md"
          src={exampleGallery2}
          alt="Gallery Image"
        />
        <Image
          width={200}
          height={200}
          className="w-full size-40 object-cover rounded-md"
          src={exampleGallery3}
          alt="Gallery Image"
        />
        <Image
          width={200}
          height={200}
          className="w-full size-40 object-cover rounded-md"
          src={exampleGallery4}
          alt="Gallery Image"
        />
        <Image
          width={200}
          height={200}
          className="w-full size-40 object-cover rounded-md"
          src={exampleGallery5}
          alt="Gallery Image"
        />
        <Image
          width={200}
          height={200}
          className="w-full size-40 object-cover rounded-md"
          src={exampleGallery6}
          alt="Gallery Image"
        />
        <Image
          width={200}
          height={200}
          className="w-full size-40 object-cover rounded-md"
          src={exampleGallery7}
          alt="Gallery Image"
        />
        <Image
          width={200}
          height={200}
          className="w-full size-40 object-cover rounded-md"
          src={exampleGallery1}
          alt="Gallery Image"
        />
        <Image
          width={200}
          height={200}
          className="w-full size-40 object-cover rounded-md"
          src={exampleGallery2}
          alt="Gallery Image"
        />
        <Image
          width={200}
          height={200}
          className="w-full size-40 object-cover rounded-md"
          src={exampleGallery3}
          alt="Gallery Image"
        />
        <Image
          width={200}
          height={200}
          className="w-full size-40 object-cover rounded-md"
          src={exampleGallery4}
          alt="Gallery Image"
        />
        <Image
          width={200}
          height={200}
          className="w-full size-40 object-cover rounded-md"
          src={exampleGallery5}
          alt="Gallery Image"
        />
      </div>
    </AppShell>
  );
};

export default GalleryPage;
