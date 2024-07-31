import { productsThumbnailImages } from "../Datas";
import { SlideImagesProps } from "../types";

export function SlideImages({
  selectedImage,
  activeThumbnailImage,
  handleOpenModalImages,
  handleThumbnailClick,
}: SlideImagesProps) {
  return (
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
                activeThumbnailImage.src === thumbnail.src ? "block" : "hidden"
              } absolute inset-0 bg-colorWhite/70`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
