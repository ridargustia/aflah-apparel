import React, { useEffect } from "react";
import HeaderComponent from "@/views/components/atoms/HeaderComponent";
import { useDispatch } from "react-redux";
import { setChangeColorHeader } from "@/lib/redux/actions/ChangeColorHeaderSlice";

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
        <div className="relative -mx-8 -mt-8 h-screen min-h-[36rem] bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1536300007881-7e482242baa5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80')]">
          <div className="absolute inset-0 z-10 bg-black bg-opacity-70"></div>
          <div className="sm:px-20 px-6 relative z-20 mx-auto flex h-full flex-col">
            <HeaderComponent />
            <div className="flex flex-1 flex-col items-center justify-center px-4">
              <h1
                className="lg:text-6xl md:text-5xl sm:text-3xl text-2xl sm:mt-24 text-center font-bold !leading-snug text-gray-100 m-0"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Lorem ipsum & dolor sit
                <br />
                amet consectetur elit.
              </h1>
              <button
                onClick={() => scrollToHash("product-section")}
                className="mt-16 md:py-3 md:px-8 sm:py-2 sm:px-6 py-2 px-4 sm:text-base text-sm rounded-full bg-green-500 font-bold text-gray-100 shadow-md"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                Lihat Produk
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
