import Logo from "../assets/images/logo.svg";
import Avatar from "../assets/images/image-avatar.png";
import { motion } from "framer-motion";
import { NavPros } from "../types";
import { IoCartOutline } from "react-icons/io5";
import { Cart } from "./Cart";

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
  return (
    <nav className="max-w-7xl mx-auto flex items-center gap-12 h-24 border-b border-colorGrayishBlue">
      <img src={Logo} alt="Logo Image" />

      <ul className="h-full flex-1 flex items-center gap-5">
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

      <div className="relative">
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
        className="rounded-full size-10 ring-colorOrange hover:ring-2 cursor-pointer"
        src={Avatar}
        alt="Image Avatar"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.5 }}
      ></motion.img>
    </nav>
  );
}
