import { useState } from "react";
import { Image } from "./types";
import { Nav } from "./components/Nav";
import { productsImages, productsThumbnailImages, menuItens } from "./Datas";
import { SlideImages } from "./components/SlideImages";
import { ModalImagens } from "./components/ModalImagens";
import { QuantityItemsCart } from "./components/QuantityItemsCart";

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
    setSelectedImage((prev: Image) => {
      const currentIndex = productsImages.indexOf(prev);
      return productsImages[(currentIndex + 1) % productsImages.length];
    });
  };

  const handlePrevSlide = () => {
    setSelectedImage((prev: Image) => {
      const currentIndex = productsImages.indexOf(prev);
      return productsImages[
        (currentIndex - 1 + productsImages.length) % productsImages.length
      ];
    });
  };

  const handleNextSlideModal = () => {
    setCurrentSlideModal((prev) =>
      prev === productsImages.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevSlideModal = () => {
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

      <div className="h-teste flex items-center justify-center gap-40 xl:gap-24 xl:px-4 lg:flex-col lg:h-full lg:py-20 2xs:pt-0 2xs:pb-10 2xs:px-0 2xs:gap-10">
        <SlideImages
          selectedImage={selectedImage}
          activeThumbnailImage={activeThumbnailImage}
          handleOpenModalImages={handleOpenModalImages}
          handleThumbnailClick={handleThumbnailClick}
          handleNextSlide={handleNextSlide}
          handlePrevSlide={handlePrevSlide}
        />

        {activeModalImages && (
          <ModalImagens
            currentSlideModal={currentSlideModal}
            setCurrentSlideModal={setCurrentSlideModal}
            handlePrevSlideModal={handlePrevSlideModal}
            handleNextSlideModal={handleNextSlideModal}
            handleCloseModalImages={handleCloseModalImages}
          />
        )}

        <div className="max-w-lg flex flex-col gap-5 relative lg:max-w-2xl 2xs:max-w-full 2xs:p-4">
          <h4 className="uppercase font-bold text-colorGrayishBlue">
            Sneaker Company
          </h4>
          <h2 className="text-colorVeryDarkBlue font-bold text-5xl 2xs:text-4xl">
            Fall Limited Edition Sneakers
          </h2>
          <p className="mt-4 text-colorDarkGrayishBlue 2xs:text-sm">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          <div className="space-y-2 font-bold lg:max-w-lg lg:w-full lg:mx-auto lg:flex lg:items-baseline lg:justify-evenly 2xs:max-w-xs 2xs:justify-between 3xs:max-w-full">
            <p className="text-colorVeryDarkBlue text-2xl flex gap-4 items-center">
              $125.00
              <span className="text-colorWhite bg-colorVeryDarkBlue px-2 text-sm rounded-md lg:text-base">
                50%
              </span>
            </p>
            <p className="line-through text-colorGrayishBlue">$250.00</p>
          </div>

          <QuantityItemsCart
            quantity={quantity}
            handleMinusQuantity={handleMinusQuantity}
            handlePlusQuantity={handlePlusQuantity}
            handleAddToCart={handleAddToCart}
          />

          <div className="flex 2xs:justify-center">
            {errorMessage && (
              <p className="absolute top-full text-red-500 mt-2 text-sm lg:text-center lg:w-full 2xs:-mt-4 2xs:w-4/5 3xs:-mt-8">
                {errorMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
