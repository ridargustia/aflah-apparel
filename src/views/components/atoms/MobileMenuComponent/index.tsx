import { setToggleMenu } from "@/lib/redux/actions/ToggleMenuSlice";
import { menuItem } from "@/utils/data/static";
import Link from "next/link";
import React from "react";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";

const MobileMenuComponent = () => {
  const dispatch = useDispatch();
  const isToggle = useSelector((state: any) => state.toggleMenu.data);
  return (
    <div
      className={`fixed left-0 right-0 top-0 z-30 my-6 mx-4 rounded-md border bg-white p-8 text-center text-gray-800 lg:hidden ${
        isToggle ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-opacity duration-700 ease-in-out`}
    >
      <button
        className="text-gray-800 z-30 bg-transparent p-0 m-0 transform-none absolute right-4 top-4"
        onClick={() => dispatch(setToggleMenu(false))}
      >
        <ImCross size={"18px"} />
      </button>
      <div className="flex flex-col items-center">
        {menuItem.map((item: any) => (
          <Link
            key={item.id}
            href={`/${item.linkMenu}`}
            className="my-2 border-b-2 border-transparent pb-1 text-lg font-medium tracking-wide"
            onClick={() => dispatch(setToggleMenu(false))}
          >
            {item.menuName}
          </Link>
        ))}
      </div>
      <div className="flex flex-col items-center ">
        <Link
          href="https://api.whatsapp.com/send?phone=6285712139792&text=Halo%20min%2C%20saya%20tau%20info%20dari%20website%20mau%20tanya-tanya%20mengenai%20custom%20jersey%20di%20Aflah%20apparel%20dong"
          className="rounded-full border-b-0 bg-green-500 py-2 px-6 text-gray-100 my-2 border-transparent text-lg font-medium tracking-wide"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default MobileMenuComponent;
