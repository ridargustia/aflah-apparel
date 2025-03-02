import Image from "next/image";
import React from "react";
import companyLogo from "../../../../../public/assets/images/company/company-logo.png";
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { menuItem } from "@/utils/data/static";
import Link from "next/link";
import MobileMenuComponent from "../MobileMenuComponent";
import { setToggleMenu } from "@/lib/redux/actions/ToggleMenuSlice";

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const isColorHeader = useSelector(
    (state: any) => state.changeColorHeader.data
  );

  return (
    <header
      className={`w-full max-w-none pt-0 sm:px-20 px-10 mx-auto flex items-center justify-between top-0 left-0 fixed ${
        isColorHeader ? "bg-slate-600" : ""
      }`}
    >
      <div
        className="flex flex-1 items-center justify-between py-4"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <Link
          href="#"
          className="flex items-center text-gray-100 font-semibold ml-0 text-2xl my-0 mx-6 border-transparent tracking-wide no-underline"
        >
          <Image
            src={companyLogo}
            alt="logo"
            width={50}
            height={50}
            className="lg:w-16 lg:h-16 md:w-14 md:h-14 w-12 h-12"
          />
        </Link>
        <div className="lg:inline-block hidden">
          {menuItem.map((item: any) => (
            <Link
              key={item.id}
              href={`/${item.linkMenu}`}
              className="text-gray-100 my-0 mx-6 text-base border-transparent pb-1 font-medium tracking-wide no-underline"
            >
              {item.menuName}
            </Link>
          ))}
        </div>
        <div className="lg:inline-block hidden">
          <Link
            href="https://api.whatsapp.com/send?phone=6285712139792&text=Halo%20min%2C%20saya%20tau%20info%20dari%20website%20mau%20tanya-tanya%20mengenai%20custom%20jersey%20di%20Aflah%20apparel%20dong"
            className="text-gray-100 rounded-3xl mx-0 bg-green-500 py-2 px-5 lg:my-0 lg:mx-0 text-sm border-transparent font-medium tracking-wide no-underline"
          >
            Contact us
          </Link>
        </div>
        {/* Menu in mobile */}
        <MobileMenuComponent />
        <button
          className="text-gray-100 z-20 bg-transparent p-0 m-0 transform-none lg:hidden"
          onClick={() => dispatch(setToggleMenu(true))}
        >
          <IoMenu size={"30px"} />
        </button>
      </div>
    </header>
  );
};

export default HeaderComponent;
