import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { productsImages, productsThumbnailImages } from "../Datas";

interface ModalImagensProps {
  currentSlideModal: number;
  setCurrentSlideModal: (index: number) => void;
  handlePrevSlide: () => void;
  handleNextSlide: () => void;
  handleCloseModalImages: () => void;
}

export function ModalImagens({
  currentSlideModal,
  setCurrentSlideModal,
  handlePrevSlide,
  handleNextSlide,
  handleCloseModalImages,
}: ModalImagensProps) {
  return (
    <div className="fixed inset-0 z-50 bg-colorBlack/75 flex gap-6 flex-col items-center justify-center">
      <div className="relative">
        <button
          className="absolute -left-6 top-1/2 -translate-y-1/2 size-12 bg-colorWhite rounded-full flex items-center justify-center ring-1 ring-colorBlack text-colorBlack hover:text-colorOrange hover:ring-colorOrange"
          onClick={handlePrevSlide}
        >
          <GrFormPrevious className="size-7" />
        </button>

        <img
          className="w-[550px] h-[500px] object-cover object-center rounded-xl"
          src={productsImages[currentSlideModal].src}
          alt={productsImages[currentSlideModal].alt}
        />

        <button
          className="absolute -right-6 top-1/2 -translate-y-1/2 size-12 bg-colorWhite rounded-full flex items-center justify-center ring-1 ring-colorBlack text-colorBlack hover:text-colorOrange hover:ring-colorOrange"
          onClick={handleNextSlide}
        >
          <GrFormNext className="size-7" />
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
  );
}
