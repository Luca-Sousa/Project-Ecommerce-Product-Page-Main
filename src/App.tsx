import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import { TiMinus, TiPlus } from "react-icons/ti";
import { Image } from "./types";
import { IoMdClose } from "react-icons/io";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Nav } from "./components/Nav";
import { productsImages, productsThumbnailImages, menuItens } from "./Datas";

export function App() {
  const [activeMenuItem, setActiveMenuItem] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [activeModalCart, setActiveModalcart] = useState<boolean>(false);
  const [itemAdded, setItemAdded] = useState<boolean>(false);
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [activeModalImages, setActiveModalImages] = useState<boolean>(false);
  const [currentSlideModal, setCurrentSlideModal] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<Image>(productsImages[0]);
  const [activeThumbnailImage, setThumbnailImage] = useState<Image>(
    productsThumbnailImages[0]
  );

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

  const handleOpenModalImages = () => {
    setActiveModalImages(true);
  };

  const handleCloseModalImages = () => {
    setActiveModalImages(false);
  };

  const handleNextSlide = () => {
    setCurrentSlideModal((prev) =>
      prev === productsImages.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlideModal((prev) =>
      prev === 0 ? productsImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="max-w-[1440px] max-h-screen mx-auto h-full">
      <Nav
        menuItens={menuItens}
        activeMenuItem={activeMenuItem}
        itemAdded={itemAdded}
        cartQuantity={cartQuantity}
        activeModalCart={activeModalCart}
        handleMenuItems={handleMenuItems}
        toggleModalCart={toggleModalCart}
        handleRemoveToCart={handleRemoveToCart}
      />

      <div className="h-teste flex items-center justify-center gap-40">
        <div className="flex gap-6 flex-col items-center justify-center">
          <img
            className="size-[450px] object-cover object-center rounded-xl cursor-pointer"
            src={selectedImage.src}
            alt={selectedImage.alt}
            onClick={handleOpenModalImages}
          />

          <div className="w-full flex items-center justify-between">
            {productsThumbnailImages.map((thumbnail, index) => (
              <div
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`${
                  activeThumbnailImage.src === thumbnail.src
                    ? "ring-colorOrange ring-2 scale-105"
                    : "ring-0"
                } size-20 rounded-xl overflow-hidden cursor-pointer relative hover:scale-105`}
              >
                <img src={thumbnail.src} alt={thumbnail.alt} />
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

        {activeModalImages && (
          <div className="fixed inset-0 z-50 bg-colorBlack/75 flex gap-6 flex-col items-center justify-center">
            <div className="relative">
              <button
                className="absolute -left-6 top-1/2 -translate-y-1/2 size-12 bg-colorWhite rounded-full flex items-center justify-center"
                onClick={handlePrevSlide}
              >
                <GrFormPrevious className="size-7 text-colorBlack hover:text-colorOrange" />
              </button>

              <img
                className="size-[500px] object-cover object-center rounded-xl"
                src={productsImages[currentSlideModal].src}
                alt={productsImages[currentSlideModal].alt}
              />

              <button
                className="absolute -right-6 top-1/2 -translate-y-1/2 size-12 bg-colorWhite rounded-full flex items-center justify-center"
                onClick={handleNextSlide}
              >
                <GrFormNext className="size-7 text-colorBlack hover:text-colorOrange" />
              </button>

              <button
                className="size-6 absolute inset-0 left-full -translate-x-full -top-10 text-colorWhite hover:scale-125 hover:text-colorOrange"
                onClick={handleCloseModalImages}
              >
                <IoMdClose className="size-full" />
              </button>
            </div>

            <div className="w-full flex items-center justify-center gap-8">
              {productsThumbnailImages.map((thumbnail, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentSlideModal(index)}
                  className={`${
                    currentSlideModal === index
                      ? "ring-colorOrange ring-2 scale-105"
                      : "ring-0"
                  } size-20 rounded-xl overflow-hidden cursor-pointer relative hover:scale-105`}
                >
                  <img src={thumbnail.src} alt={thumbnail.alt} />
                  <div
                    className={`${
                      currentSlideModal === index ? "block" : "hidden"
                    } absolute inset-0 bg-colorWhite/70`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        )}

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
