import Logo from "../assets/images/logo.svg";
import Avatar from "../assets/images/image-avatar.png";
import { motion } from "framer-motion";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { NavPros } from "../types";
import { IoCartOutline } from "react-icons/io5";
import ProductThumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";

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
          <div className="w-96 h-fit absolute -left-1/2 -translate-x-1/2 top-12 rounded-lg bg-colorWhite shadow-default">
            <h2 className="w-full text-colorBlack font-bold border-b p-6">
              Cart
            </h2>

            {itemAdded ? (
              <div className="px-6 py-8 space-y-6">
                <div className="flex items-center gap-4">
                  <img
                    className="size-14 rounded-lg"
                    src={ProductThumbnail1}
                    alt="Product Thumbnail Image 1"
                  />

                  <div className="text-colorGrayishBlue flex-1">
                    <h2 className="">Fall Limited Edition Sneakers</h2>
                    <div className="flex gap-1">
                      $125.00 x {cartQuantity}{" "}
                      <span className="font-bold text-colorBlack">
                        ${(125.0 * cartQuantity).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <button
                    className="text-colorGrayishBlue hover:text-colorBlack"
                    onClick={handleRemoveToCart}
                  >
                    <RiDeleteBin5Fill className="size-5 hover:scale-110" />
                  </button>
                </div>

                <button className="w-full h-12 text-center bg-colorOrange rounded-lg text-colorBlack font-bold hover:bg-colorOrange/60">
                  Checkout
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-center h-48">
                Your cart is empty.
              </div>
            )}
          </div>
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
