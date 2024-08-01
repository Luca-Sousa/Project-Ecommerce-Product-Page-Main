import { RiDeleteBin5Fill } from "react-icons/ri";
import ProductThumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import { CartPros } from "../types";

export function Cart({
  itemAdded,
  cartQuantity,
  handleRemoveToCart,
}: CartPros) {
  return (
    <div className="w-96 h-fit z-40 absolute -left-1/2 -translate-x-1/2 top-12 rounded-lg bg-colorWhite shadow-default 2xl:-left-2/3 2xl:-translate-x-2/3 2xs:inset-0 2xs:top-28 2xs:left-1/2 2xs:-translate-x-1/2 2xs:w-80">
      <h2 className="w-full text-colorBlack font-bold border-b p-6">Cart</h2>

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
  );
}
