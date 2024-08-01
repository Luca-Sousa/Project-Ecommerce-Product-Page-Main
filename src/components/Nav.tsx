import Logo from "../assets/images/logo.svg";
import Avatar from "../assets/images/image-avatar.png";
import { motion } from "framer-motion";
import { NavPros } from "../types";
import { IoCartOutline } from "react-icons/io5";
import { Cart } from "./Cart";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export function Nav({
  menuItens,
  activeMenuItem,
  itemAdded,
  cartQuantity,
  activeModalCart,
  handleMenuItems,
  toggleModalCart,
  handleRemoveToCart,
}: NavPros) {
  const [activeModalMenuItems, setActiveModalMenuItems] =
    useState<boolean>(false);

  const handleOpenModalMenuItems = () => {
    setActiveModalMenuItems(true);
  };

  const handleCloseModalMenuItems = () => {
    setActiveModalMenuItems(false);
  };

  return (
    <nav className="max-w-7xl mx-auto flex items-center gap-12 h-24 border-b border-colorGrayishBlue xl:max-w-5xl xl:px-2 lg:max-w-3xl md:max-w-2xl md:px-4 2xs:border-0 2xs:gap-6">
      <div className="md:flex-1 flex items-center gap-8 2xs:gap-4">
        <button className="hidden md:block" onClick={handleOpenModalMenuItems}>
          <FaBarsStaggered className="size-6 hover:text-colorOrange hover:scale-110" />
        </button>

        <img src={Logo} alt="Logo Image" />
      </div>

      {activeModalMenuItems ? (
        <ul className="z-50 fixed inset-0 h-full gap-5 bg-colorBlack/75">
          <div className="w-2/5 h-full bg-colorWhite p-6 space-y-10 2xs:w-3/5">
            <button
              className="size-6 text-colorDarkGrayishBlue hover:scale-125 hover:text-colorOrange"
              onClick={handleCloseModalMenuItems}
            >
              <IoMdClose className="size-full" />
            </button>

            <div className="flex flex-col gap-5">
              {menuItens.map((item) => (
                <li
                  key={item.label}
                  onClick={() => handleMenuItems(item.label.toLowerCase())}
                  className={`${
                    activeMenuItem === item.label.toLowerCase()
                      ? "scale-y-105 border-colorOrange border-b-2"
                      : "text-colorBlack border-b-0"
                  } flex items-center text-lg font-bold hover:text-colorVeryDarkBlue`}
                >
                  <a href="#">
                    {item.label.split("").map((letter, index) => (
                      <span key={index}>{letter}</span>
                    ))}
                  </a>
                </li>
              ))}
            </div>
          </div>
        </ul>
      ) : (
        <ul className="h-full flex-1 flex items-center gap-5 md:hidden">
          {menuItens.map((item) => (
            <li
              key={item.label}
              onClick={() => handleMenuItems(item.label.toLowerCase())}
              className={`${
                activeMenuItem === item.label.toLowerCase()
                  ? "h-full border-colorOrange border-b-4 hover:text-colorVeryDarkBlue"
                  : "text-colorDarkGrayishBlue border-b-0"
              } flex items-center hover:text-colorVeryDarkBlue`}
            >
              <a href="#">
                {item.label.split("").map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
              </a>
            </li>
          ))}
        </ul>
      )}

      <div className="relative 2xs:static">
        <button
          className="text-colorDarkGrayishBlue flex items-center hover:text-colorBlack relative hover:scale-110"
          onClick={toggleModalCart}
        >
          {itemAdded && (
            <div className="w-5 h-4 absolute -top-2 -right-2 rounded-full bg-colorOrange flex items-center justify-center text-xs font-bold text-colorWhite">
              {cartQuantity}
            </div>
          )}
          <IoCartOutline className="size-6" />
        </button>

        {activeModalCart && (
          <Cart
            itemAdded={itemAdded}
            cartQuantity={cartQuantity}
            handleRemoveToCart={handleRemoveToCart}
          />
        )}
      </div>

      <motion.img
        className="rounded-full size-10 ring-colorOrange hover:ring-2 cursor-pointer 2xs:size-8"
        src={Avatar}
        alt="Image Avatar"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.5 }}
      ></motion.img>
    </nav>
  );
}
