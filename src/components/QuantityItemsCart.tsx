import { IoCartOutline } from "react-icons/io5";
import { TiMinus, TiPlus } from "react-icons/ti";
import { QuantityItemsCartProps } from "../types";

export function QuantityItemsCart({
  quantity,
  handleMinusQuantity,
  handlePlusQuantity,
  handleAddToCart,
}: QuantityItemsCartProps) {
  return (
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
  );
}
