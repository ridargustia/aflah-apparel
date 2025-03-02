import React, { useEffect } from "react";
import HeaderComponent from "@/views/components/atoms/HeaderComponent";
import { useDispatch } from "react-redux";
import { setChangeColorHeader } from "@/lib/redux/actions/ChangeColorHeaderSlice";
import Link from "next/link";

const HeroSection = () => {
  const dispatch = useDispatch();

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      dispatch(setChangeColorHeader(true));
    } else {
      dispatch(setChangeColorHeader(false));
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });

  const scrollToHash = (element_id: string) => {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div>
      <section className="transform-none">
        <div
          className="relative -mx-8 -mt-8 h-screen min-h-[36rem] bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1536300007881-7e482242baa5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80')]"
          data-tooltip-id="image-tooltip"
          data-tooltip-content="A1 - Hero Image"
          data-tooltip-place="bottom"
        >
          <div className="absolute inset-0 z-10 bg-black bg-opacity-70"></div>
          <div className="sm:px-20 px-6 relative z-20 mx-auto flex h-full flex-col">
            <HeaderComponent />
            <div className="flex flex-1 flex-col items-center justify-center px-4">
              <h1
                className="md:text-5xl sm:text-3xl text-2xl sm:mt-24 text-center font-bold !leading-snug text-gray-100 m-0"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-tooltip-id="text-tooltip"
                data-tooltip-content="T1 - Tagline"
                data-tooltip-place="bottom"
              >
                Lorem ipsum & dolor sit
                <br />
                amet consectetur elit.
              </h1>
              <h5
                className="md:text-lg sm:text-base text-sm text-center font-medium text-gray-400 mt-4 lg:px-32 px-0"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-tooltip-id="text-tooltip"
                data-tooltip-content="T2 - About"
                data-tooltip-place="bottom"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                eveniet dolorem quisquam at similique qui suscipit, ipsa impedit
                quibusdam alias.
              </h5>
              <Link
                // onClick={() => scrollToHash("product-section")}
                href="/products"
                className="mt-16 md:py-3 md:px-8 sm:py-2 sm:px-6 py-2 px-4 sm:text-base text-sm rounded-full bg-green-500 font-bold text-gray-100 shadow-md"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                Lihat Produk
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
