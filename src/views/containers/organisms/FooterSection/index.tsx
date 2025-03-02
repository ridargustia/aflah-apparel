import Image from "next/image";
import React from "react";
import companyLogo from "../../../../../public/assets/images/company/company-logo2.png";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const FooterSection = () => {
  return (
    <section className="transform-none">
      <div className="relative -mx-8 -mb-8 bg-gray-300 px-8">
        <div className="flex flex-row justify-between py-20 md:px-8 mx-auto max-w-[1280px] flex-wrap sm:gap-0 gap-8">
          <div className="flex flex-col flex-wrap max-w-[1280px] justify-between gap-3">
            <div className="mb-0 w-full text-left md:justify-start flex items-center">
              <Image
                src={companyLogo}
                alt="logo"
                width={50}
                height={50}
                className="lg:w-12 lg:h-12 md:w-6 md:h-6 w-5 h-5"
              />
              <h5 className="ml-3 text-xl font-semibold text-gray-800 uppercase">
                Aflah Apparel
              </h5>
            </div>
            <p
              className="md:ml-0 md:mr-4 mt-4 max-w-80 text-sm font-medium text-gray-700"
              data-tooltip-id="image-tooltip"
              data-tooltip-content="T12 - Alamat & No. Telepon"
              data-tooltip-place="bottom"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos cum
              officiis aliquid ipsa cumque, quisquam eos? Sunt?
            </p>
            <div className="mt-4">
              <Link
                className="mr-4 inline-block cursor-pointer rounded-full bg-gray-600 p-2 text-gray-300"
                href="https://www.facebook.com/profile.php?id=61553701864207"
              >
                <FaFacebookF />
              </Link>
              <Link
                className="mr-4 inline-block cursor-pointer rounded-full bg-gray-600 p-2 text-gray-300"
                href="https://www.tiktok.com/@aflah.apparel"
              >
                <FaTiktok />
              </Link>
              <Link
                className="mr-4 inline-block cursor-pointer rounded-full bg-gray-600 p-2 text-gray-300"
                href="https://www.instagram.com/aflahapparel/"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
          <div className="sm:w-[20%] w-full">
            <h5 className="font-semibold">Menu</h5>
            <ul className="mt-4 text-sm font-medium">
              <li className="mt-3">
                <Link href="/" className="border-transparent pb-1">
                  Home
                </Link>
              </li>
              <li className="mt-3">
                <Link href="/products" className="border-transparent pb-1">
                  Products
                </Link>
              </li>
              <li className="mt-3">
                <Link href="/print-press" className="border-transparent pb-1">
                  Jasa Print & Press
                </Link>
              </li>
              <li className="mt-3">
                <Link href="/gallery" className="border-transparent pb-1">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          <div className="sm:w-[20%] w-full">
            <h5 className="font-semibold">Media Sosial</h5>
            <ul className="mt-4 text-sm font-medium">
              <li className="mt-3">
                <Link
                  href="https://www.facebook.com/profile.php?id=61553701864207"
                  className="border-transparent pb-1"
                >
                  Facebook
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  href="https://www.tiktok.com/@aflah.apparel"
                  className="border-transparent pb-1"
                >
                  Tiktok
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  href="https://www.instagram.com/aflahapparel/"
                  className="border-transparent pb-1"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full text-center pb-6">
          <p className="text-base text-gray-500">
            © 2025 Aflah Apparel. All Right Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
