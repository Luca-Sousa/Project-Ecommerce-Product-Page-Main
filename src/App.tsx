import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import { motion } from "framer-motion";
import { TiMinus, TiPlus } from "react-icons/ti";
import Logo from "./assets/images/logo.svg";
import Avatar from "./assets/images/image-avatar.png";
import Product1 from "./assets/images/image-product-1.jpg";
import Product2 from "./assets/images/image-product-2.jpg";
import Product3 from "./assets/images/image-product-3.jpg";
import Product4 from "./assets/images/image-product-4.jpg";
import ProductThumbnail1 from "./assets/images/image-product-1-thumbnail.jpg";
import ProductThumbnail2 from "./assets/images/image-product-2-thumbnail.jpg";
import ProductThumbnail3 from "./assets/images/image-product-3-thumbnail.jpg";
import ProductThumbnail4 from "./assets/images/image-product-4-thumbnail.jpg";
import { RiDeleteBin5Fill } from "react-icons/ri";

interface Image {
  src: string;
  alt: string;
}

export function App() {
  const [activeMenuItem, setActiveMenuItem] = useState<string>("collections");
  const [quantity, setQuantity] = useState<number>(0);
  const [activeModalCart, setActiveModalcart] = useState<boolean>(false);
  const [itemAdded, setItemAdded] = useState<boolean>(false);
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const productsImages: Image[] = [
    { src: Product1, alt: "Product Image 1" },
    { src: Product2, alt: "Product Image 2" },
    { src: Product3, alt: "Product Image 3" },
    { src: Product4, alt: "Product Image 4" },
  ];
  const [selectedImage, setSelectedImage] = useState<Image>(productsImages[0]);

  const productsThumbnailImages: Image[] = [
    { src: ProductThumbnail1, alt: "Product Thumbnail Image 1" },
    { src: ProductThumbnail2, alt: "Product Thumbnail Image 2" },
    { src: ProductThumbnail3, alt: "Product Thumbnail Image 3" },
    { src: ProductThumbnail4, alt: "Product Thumbnail Image 4" },
  ];
  const [activeThumbnailImage, setThumbnailImage] = useState<Image>(
    productsThumbnailImages[0]
  );

  const menuItens = [
    { label: "Collections" },
    { label: "Men" },
    { label: "Women" },
    { label: "About" },
    { label: "Contact" },
  ];

  const handleMenuItems = (page: string) => {
    setActiveMenuItem(page);
  };

  const handleThumbnailClick = (index: number) => {
    setSelectedImage(productsImages[index]);
    setThumbnailImage(productsThumbnailImages[index]);
  };

  const handlePlusQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      if (newQuantity > 0) {
        setErrorMessage("");
      }
      return newQuantity;
    });
  };

  const handleMinusQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const toggleModalCart = () => {
    setActiveModalcart((prevState) => !prevState);
  };

  const handleAddToCart = () => {
    if (quantity === 0) {
      setErrorMessage("Please select a quantity before adding to cart.");
    } else {
      setItemAdded(true);
      setCartQuantity(quantity);
      setErrorMessage("");
    }
  };

  const handleRemoveToCart = () => {
    setItemAdded(false);
    setQuantity(0);
  };

  return (
    <div className="max-w-[1440px] max-h-screen mx-auto h-full">
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

      <div className="h-teste flex items-center justify-center gap-40">
        <div className="flex gap-6 flex-col items-center justify-center">
          <img
            className="size-[450px] object-cover object-center rounded-xl"
            src={selectedImage.src}
            alt={selectedImage.alt}
          />

          <div className="w-full flex items-center justify-between">
            {productsThumbnailImages.map((thumbnail, index) => (
              <div
                key={index}
                className={`${
                  activeThumbnailImage.src === thumbnail.src
                    ? "ring-colorOrange ring-2 scale-105"
                    : "ring-0"
                } size-20 rounded-xl overflow-hidden cursor-pointer relative hover:scale-105`}
              >
                <img
                  src={thumbnail.src}
                  alt={thumbnail.alt}
                  onClick={() => handleThumbnailClick(index)}
                />
                <div
                  className={`${
                    activeThumbnailImage.src === thumbnail.src
                      ? "block"
                      : "hidden"
                  } absolute inset-0 bg-colorWhite/70`}
                ></div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-md flex flex-col gap-5 relative">
          <h4 className="uppercase text-sm font-bold text-colorGrayishBlue">
            Sneaker Company
          </h4>
          <h2 className="text-colorVeryDarkBlue font-bold text-4xl">
            Fall Limited Edition Sneakers
          </h2>
          <p className="mt-4 text-colorDarkGrayishBlue">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          <div className="space-y-2 font-bold">
            <p className="text-colorVeryDarkBlue text-2xl flex gap-4 items-center">
              $125.00
              <span className="text-colorWhite bg-colorVeryDarkBlue px-2 text-sm rounded-md">
                50%
              </span>
            </p>
            <p className="line-through text-colorGrayishBlue">$250.00</p>
          </div>

          <div className="flex h-12 gap-2 mt-2">
            <div className="flex w-32 items-center justify-between px-3 bg-colorLightGrayishBlue rounded-lg">
              <button
                className="size-4 text-colorOrange hover:text-colorOrange/60 hover:scale-110"
                onClick={handleMinusQuantity}
              >
                <TiMinus />
              </button>
              <span className="text-black text-sm font-bold">{quantity}</span>

              <button
                className="size-4 text-colorOrange hover:text-colorOrange/60 hover:scale-110"
                onClick={handlePlusQuantity}
              >
                <TiPlus />
              </button>
            </div>

            <button
              className="flex gap-3 flex-1 items-center justify-center bg-colorOrange rounded-lg text-colorBlack font-bold text-sm hover:bg-colorOrange/60"
              onClick={handleAddToCart}
            >
              <IoCartOutline className="size-4" />
              Add to cart
            </button>
          </div>

          {errorMessage && (
            <p className="absolute top-full text-red-500 text-sm mt-2">
              {errorMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
