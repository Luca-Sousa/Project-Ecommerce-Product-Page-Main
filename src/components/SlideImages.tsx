import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { productsThumbnailImages } from "../Datas";
import { SlideImagesProps } from "../types";

export function SlideImages({
  selectedImage,
  activeThumbnailImage,
  handleOpenModalImages,
  handleThumbnailClick,
  handlePrevSlide,
  handleNextSlide,
}: SlideImagesProps) {
  return (
    <div className="flex gap-6 flex-col items-center justify-center">
      <div className="static 2xs:relative">
        <button
          className="hidden absolute left-4 top-1/2 -translate-y-1/2 size-12 bg-colorWhite rounded-full 2xs:flex items-center justify-center ring-1 ring-colorDarkGrayishBlue text-colorBlack hover:text-colorOrange hover:ring-colorOrange"
          onClick={handlePrevSlide}
        >
          <GrFormPrevious className="size-7" />
        </button>

        <img
          className="size-[450px] object-cover object-center rounded-xl cursor-pointer lg:w-[600px] lg:h-[500px] sm:size-[450px] md:w-full sm:cursor-default 2xs:rounded-none 2xs:h-96"
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClick={handleOpenModalImages}
        />

        <button
          className="hidden absolute right-4 top-1/2 -translate-y-1/2 size-12 bg-colorWhite rounded-full 2xs:flex items-center justify-center ring-1 ring-colorDarkGrayishBlue text-colorBlack hover:text-colorOrange hover:ring-colorOrange"
          onClick={handleNextSlide}
        >
          <GrFormNext className="size-7" />
        </button>
      </div>

      <div className="w-full flex items-center justify-between lg:justify-center lg:gap-10 2xs:hidden">
        {productsThumbnailImages.map((thumbnail, index) => (
          <div
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`${
              activeThumbnailImage.src === thumbnail.src
                ? "ring-colorOrange ring-2 scale-105"
                : "ring-0"
            } size-20 rounded-xl overflow-hidden cursor-pointer relative hover:scale-105 md:size-16`}
          >
            <img src={thumbnail.src} alt={thumbnail.alt} />
            <div
              className={`${
                activeThumbnailImage.src === thumbnail.src ? "block" : "hidden"
              } absolute inset-0 bg-colorWhite/70`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
